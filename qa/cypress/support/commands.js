// Inicia sesión por la interfaz y guarda la sesión para reutilizarla entre pruebas.
// role: 'admin', 'agent' o 'agent2' (credenciales en cypress.env.json).
Cypress.Commands.add('loginAs', (role = 'admin') => {
  const email = Cypress.env(`${role}Email`);
  const password = Cypress.env(`${role}Password`);

  cy.session(
    [role, email],
    () => {
      cy.visit('/app/login');
      cy.get('[data-testid="email_input"]').type(email);
      cy.get('[data-testid="password_input"]').type(password, { log: false });
      cy.get('[data-testid="submit_button"]').click();
      cy.location('pathname').should('match', /\/app\/accounts\/\d+/);
    },
    { cacheAcrossSpecs: true }
  );
});

// Ruta del panel de la cuenta de pruebas, por ejemplo: cy.visitAccount('/dashboard').
// Chatwoot guarda etiquetas, equipos y otros datos en una caché local (IndexedDB cw-store-<cuenta>).
// Se borra antes de cargar la página para que la interfaz vea lo que las pruebas crean por API.
Cypress.Commands.add('visitAccount', (path = '/dashboard') => {
  const accountId = Cypress.env('accountId');
  cy.visit(`/app/accounts/${accountId}${path}`, {
    onBeforeLoad(win) {
      win.indexedDB.deleteDatabase(`cw-store-${accountId}`);
    },
  });
});

// Llamada a la API de la cuenta de pruebas con el token del rol indicado.
// No falla por el código de estado: cada prueba lo verifica.
// Ejemplo: cy.api('POST', '/labels', { title: 'qa' }).its('status').should('eq', 200)
Cypress.Commands.add('api', (method, path, body, role = 'admin') =>
  cy.request({
    method,
    url: path.startsWith('/api/')
      ? path
      : `/api/v1/accounts/${Cypress.env('accountId')}${path}`,
    headers: { api_access_token: Cypress.env(`${role}Token`) },
    body,
    failOnStatusCode: false,
  })
);

// Consulta la API hasta que la aserción se cumpla (o se agoten los intentos). Sirve para verificar
// en el servidor lo que la interfaz guarda de forma asíncrona.
// Ejemplo: cy.apiShould(`/conversations/${id}`, body => expect(body.status).to.eq('resolved'))
Cypress.Commands.add(
  'apiShould',
  (path, assertion, role = 'admin', retries = 10) => {
    const attempt = remaining =>
      cy.api('GET', path, null, role).then(({ body }) => {
        try {
          assertion(body);
          return body;
        } catch (error) {
          if (remaining <= 0) throw error;
          return cy.wait(500).then(() => attempt(remaining - 1));
        }
      });
    return attempt(retries);
  }
);

// Nombre único para que las pruebas no choquen con datos de ejecuciones anteriores.
Cypress.Commands.add('uniqueName', prefix =>
  cy.wrap(`${prefix}-${Date.now()}`)
);

// Crea un contacto en la bandeja de pruebas y una conversación con un mensaje del cliente.
// Devuelve { contact, conversation } (conversation.id es el display_id que usa la URL).
Cypress.Commands.add(
  'createConversation',
  ({ name = 'Cliente QA', email, message = 'Hola, necesito ayuda' } = {}) => {
    const inboxId = Cypress.env('inboxId');
    const contactEmail = email || `cliente.${Date.now()}@chatwoot.test`;

    return cy
      .api('POST', '/contacts', {
        name,
        email: contactEmail,
        inbox_id: inboxId,
      })
      .then(({ body }) => {
        const { contact, contact_inbox: contactInbox } = body.payload;
        return cy
          .api('POST', '/conversations', {
            source_id: contactInbox.source_id,
            inbox_id: inboxId,
            contact_id: contact.id,
          })
          .then(({ body: conversation }) =>
            cy
              .api('POST', `/conversations/${conversation.id}/messages`, {
                content: message,
                message_type: 'incoming',
              })
              .then(() => ({ contact, conversation }))
          );
      });
  }
);

// Abre una conversación y espera a que cargue el editor de respuesta.
Cypress.Commands.add('openConversation', id => {
  cy.visitAccount(`/conversations/${id}`);
  cy.get('.ProseMirror', { timeout: 20000 }).should('be.visible');
});

// Muestra el panel del contacto y despliega "Conversation Actions" (agente, equipo, etiquetas).
// El estado del panel se guarda en las preferencias del usuario, por eso se revisa antes de hacer clic.
Cypress.Commands.add('openConversationActions', () => {
  cy.get('body').then($body => {
    if (!$body.text().includes('Conversation Actions')) {
      cy.get('button .i-ph-user-bold').closest('button').click();
    }
  });
  cy.contains('Conversation Actions').should('be.visible');
  cy.get('body').then($body => {
    if (!$body.text().includes('Assigned Agent')) {
      cy.contains('Conversation Actions').click();
    }
  });
  cy.contains('Assigned Agent').should('be.visible');
});

// Elige una opción de un selector del panel (agente o equipo) usando su buscador.
Cypress.Commands.add('chooseInDropdown', (title, searchPlaceholder, option) => {
  // El botón del selector está junto al bloque del título (que puede tener "Assign to me").
  cy.contains(title).parents().eq(1).siblings().find('button').first().click();
  cy.get(`input[placeholder="${searchPlaceholder}"]`).type(option);
  cy.get(`input[placeholder="${searchPlaceholder}"]`)
    .parents('div')
    .eq(1)
    .contains('button', option)
    .click();
});
