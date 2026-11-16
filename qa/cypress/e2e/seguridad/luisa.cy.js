// [Luisa Espinal] Seguridad — RF-01 a RF-05 (OWASP Top 10 2021)
// Ver qa/docs/criterio13_seguridad.md. Las pruebas verifican que los ataques fallan; los hallazgos
// que sí se confirmaron están documentados allí con su severidad.
const INTEGRANTE = 'Luisa Espinal';
const XSS = '<img src=x onerror="window.__xss=1">';

describe(`[${INTEGRANTE}] Seguridad`, () => {
  let conversationId;

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Revisión de seguridad' }).then(({ conversation }) => {
      conversationId = conversation.id;
    });
  });

  context('A01 Control de acceso', () => {
    it('RF-01: un usuario de otra cuenta no puede cambiar el estado de una conversación', () => {
      cy.api('POST', `/conversations/${conversationId}/toggle_status`, { status: 'resolved' }, 'other')
        .its('status')
        .should('eq', 401);
      cy.api('GET', `/conversations/${conversationId}`).its('body.status').should('eq', 'open');
    });

    it('RF-02 y RF-03: un agente sin acceso a la bandeja no puede leer ni escribir en la conversación', () => {
      cy.api('GET', `/conversations/${conversationId}`, null, 'agent2').its('status').should('eq', 401);
      cy.api('POST', `/conversations/${conversationId}/messages`, { content: 'intruso' }, 'agent2')
        .its('status')
        .should('eq', 401);
    });

    it('RF-04: un agente no puede crear etiquetas (solo los administradores)', () => {
      cy.api('POST', '/labels', { title: `qa-agente-${Date.now()}` }, 'agent').its('status').should('eq', 401);
    });
  });

  context('A07 Fallas de identificación y autenticación', () => {
    it('la API rechaza peticiones sin token y con un token falso', () => {
      cy.request({ url: `/api/v1/accounts/${Cypress.env('accountId')}/conversations`, failOnStatusCode: false })
        .its('status')
        .should('eq', 401);
      cy.request({
        url: `/api/v1/accounts/${Cypress.env('accountId')}/conversations`,
        headers: { api_access_token: 'token-falso-123' },
        failOnStatusCode: false,
      })
        .its('body.error')
        .should('eq', 'Invalid Access Token');
    });

    it('el inicio de sesión no revela si un correo existe y no cae ante una inyección SQL', () => {
      const login = (email, password) =>
        cy.request({ method: 'POST', url: '/auth/sign_in', body: { email, password }, failOnStatusCode: false });

      login(Cypress.env('adminEmail'), 'ClaveIncorrecta#2026').then(existente => {
        login('no.existe@chatwoot.test', 'ClaveIncorrecta#2026').then(inexistente => {
          expect(inexistente.status).to.eq(existente.status);
          expect(inexistente.body.errors).to.deep.eq(existente.body.errors);
        });
      });
      login("' OR '1'='1", "' OR '1'='1").its('status').should('eq', 401);
    });
  });

  context('A03 Inyección', () => {
    it('RF-03: una nota privada con HTML se muestra como texto y no ejecuta código', () => {
      cy.api('POST', `/conversations/${conversationId}/messages`, { content: `Nota ${XSS}`, private: true });
      cy.openConversation(conversationId);

      cy.contains('onerror').should('exist');
      cy.get('img[src="x"]').should('not.exist');
      cy.window().its('__xss').should('be.undefined');
    });

    it('RF-04: la descripción de una etiqueta con HTML se muestra como texto', () => {
      const title = `qa-xss-${Date.now()}`;
      cy.api('POST', '/labels', { title, description: XSS });
      cy.visitAccount('/settings/labels/list');

      cy.contains(title).should('exist');
      cy.get('img[src="x"]').should('not.exist');
      cy.window().its('__xss').should('be.undefined');
    });

    it('RF-05: una inyección SQL en la búsqueda devuelve resultados vacíos, sin error del servidor', () => {
      ["' OR 1=1--", "'; DROP TABLE conversations;--"].forEach(q => {
        cy.api('GET', `/search?q=${encodeURIComponent(q)}`).then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.payload.conversations).to.have.length(0);
        });
      });
    });
  });

  context('A05 Configuración de seguridad', () => {
    it('las respuestas envían las cabeceras de seguridad y no exponen la tecnología del servidor', () => {
      cy.request('/app/login').then(({ headers }) => {
        expect(headers['x-frame-options']).to.eq('SAMEORIGIN');
        expect(headers['x-content-type-options']).to.eq('nosniff');
        expect(headers['referrer-policy']).to.eq('strict-origin-when-cross-origin');
        expect(headers).not.to.have.property('x-powered-by');
      });
    });
  });
});
