// RF-11 Respuestas predefinidas — Juan Pablo Berrío Díaz
// Casos CP-11-01 a CP-11-03 de la matriz de trazabilidad.
describe('RF-11 Respuestas predefinidas', () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-11-01 (exitoso): crea la respuesta qa-saludo y la inserta con / en el chat', () => {
    const shortCode = `qa-saludo-${Date.now()}`;
    cy.visitAccount('/settings/canned-response/list');
    cy.contains('button', 'Add canned response').click();
    cy.get('input[placeholder="Please enter a short code."]').type(shortCode);
    cy.get('dialog[open] .ProseMirror, .modal-container .ProseMirror')
      .first()
      .type('Hola, gracias por escribir a QA Chatwoot');
    cy.contains('button', 'Submit').click();
    cy.contains('Canned response added successfully.').should('be.visible');

    cy.createConversation({ message: 'Buenos días' }).then(
      ({ conversation }) => {
        cy.openConversation(conversation.id);
        cy.get('.ProseMirror').type(`/${shortCode}`);
        cy.contains('li', shortCode).click();
        cy.get('.ProseMirror').should(
          'contain',
          'Hola, gracias por escribir a QA Chatwoot'
        );
      }
    );
  });

  it('CP-11-02 (alternativo): edita una respuesta y la encuentra primero al buscar parte del código', () => {
    const stamp = Date.now();
    const shortCode = `qa-envio-${stamp}`;
    cy.api('POST', '/canned_responses', {
      canned_response: {
        short_code: `otro-qa-envio-${stamp}`,
        content: 'Coincide en medio',
      },
    });
    cy.api('POST', '/canned_responses', {
      canned_response: { short_code: shortCode, content: 'Texto original' },
    }).then(({ body }) => {
      cy.api('PATCH', `/canned_responses/${body.id}`, {
        canned_response: { content: 'Enviamos en 24 horas' },
      })
        .its('body.content')
        .should('eq', 'Enviamos en 24 horas');
    });

    cy.api('GET', `/canned_responses?search=qa-envio-${stamp}`).then(
      ({ body }) => {
        expect(body[0].short_code).to.eq(shortCode);
        expect(body[0].content).to.eq('Enviamos en 24 horas');
      }
    );

    cy.visitAccount('/settings/canned-response/list');
    cy.get('input[placeholder="Search canned responses..."]').type(shortCode);
    cy.contains('Enviamos en 24 horas').should('be.visible');
  });

  it('CP-11-03 (error): rechaza un código corto repetido y una respuesta sin contenido', () => {
    const shortCode = `qa-repetido-${Date.now()}`;
    cy.api('POST', '/canned_responses', {
      canned_response: { short_code: shortCode, content: 'Primera' },
    })
      .its('status')
      .should('eq', 200);

    cy.api('POST', '/canned_responses', {
      canned_response: { short_code: shortCode, content: 'Segunda' },
    })
      .its('status')
      .should('eq', 422);
    cy.api('POST', '/canned_responses', {
      canned_response: { short_code: `${shortCode}-vacio`, content: '' },
    })
      .its('status')
      .should('eq', 422);

    cy.visitAccount('/settings/canned-response/list');
    cy.contains('button', 'Add canned response').click();
    cy.get('input[placeholder="Please enter a short code."]').type(
      'qa-sin-mensaje'
    );
    cy.contains('button', 'Submit').should('be.disabled');
  });
});
