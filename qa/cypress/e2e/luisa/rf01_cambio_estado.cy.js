// RF-01 Cambio de estado de una conversación — Luisa Fernanda Espinal Montoya
// Casos CP-01-01 a CP-01-03 de la matriz de trazabilidad.
describe('RF-01 Cambio de estado de una conversación', () => {
  let conversationId;

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Quiero cambiar mi plan' }).then(
      ({ conversation }) => {
        conversationId = conversation.id;
      }
    );
  });

  it('CP-01-01 (exitoso): resuelve una conversación abierta y sale de la vista Abiertas', () => {
    cy.openConversation(conversationId);

    cy.contains('button', /^Resolve$/).click();

    cy.contains('Conversation status changed').should('be.visible');
    cy.contains('button', 'Reopen').should('be.visible');
    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.status')
      .should('eq', 'resolved');
    cy.api('GET', '/conversations?status=open&assignee_type=all')
      .its('body.data.payload')
      .then(payload => {
        expect(payload.map(c => c.id)).not.to.include(conversationId);
      });
  });

  it('CP-01-02 (alternativo): pospone la conversación hasta mañana y luego la vuelve a abrir', () => {
    cy.openConversation(conversationId);

    cy.contains('button', /^Resolve$/)
      .parent()
      .find('button .i-lucide-chevron-down')
      .click();
    cy.contains('button', 'Snooze').click();
    // Las opciones de posponer se muestran en la barra de comandos (ninja-keys, con shadow DOM).
    cy.contains('Until tomorrow', { includeShadowDom: true }).click();

    cy.api('GET', `/conversations/${conversationId}`).should(({ body }) => {
      expect(body.status).to.eq('snoozed');
      expect(new Date(body.snoozed_until)).to.be.greaterThan(new Date());
    });

    cy.contains('button', /^Open$/).click();

    cy.contains('button', /^Resolve$/).should('be.visible');
    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.status')
      .should('eq', 'open');
  });

  it('CP-01-03 (error): rechaza por API el cambio de estado de una conversación de otra cuenta', () => {
    const otherAccount = Cypress.env('otherAccountId');
    const otherConversation = Cypress.env('otherConversationId');
    const path = `/api/v1/accounts/${otherAccount}/conversations/${otherConversation}`;

    cy.api('POST', `${path}/toggle_status`, { status: 'resolved' }).then(
      response => {
        expect(response.status).to.eq(401);
      }
    );

    cy.api('GET', path, null, 'other').its('body.status').should('eq', 'open');
  });

  it('CP-01-03 (error, D-01): un estado que no existe responde 422 y la conversación sigue abierta', () => {
    cy.api('POST', `/conversations/${conversationId}/toggle_status`, {
      status: 'cerrada',
    })
      .its('status')
      .should('eq', 422);

    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.status')
      .should('eq', 'open');
  });
});
