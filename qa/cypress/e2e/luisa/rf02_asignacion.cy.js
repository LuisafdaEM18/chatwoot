// RF-02 Asignación de una conversación a un agente o equipo — Luisa Fernanda Espinal Montoya
// Casos CP-02-01 a CP-02-03 de la matriz de trazabilidad.
describe('RF-02 Asignación de una conversación', () => {
  let conversationId;

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Necesito hablar con un agente' }).then(
      ({ conversation }) => {
        conversationId = conversation.id;
      }
    );
  });

  it('CP-02-01 (exitoso): asigna la conversación a un agente de la bandeja', () => {
    cy.openConversation(conversationId);
    cy.openConversationActions();

    cy.chooseInDropdown('Assigned Agent', 'Search agents', 'QA Agente');

    cy.contains('Conversation Assignee changed').should('be.visible');
    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.meta.assignee.id')
      .should('eq', Cypress.env('agentId'));
  });

  it('CP-02-02 (alternativo): asigna un equipo y luego deja la conversación sin asignar', () => {
    cy.uniqueName('qa-equipo').then(name => {
      cy.api('POST', '/teams', { name }).its('status').should('eq', 200);
      cy.openConversation(conversationId);
      cy.openConversationActions();

      cy.chooseInDropdown('Assigned Team', 'Search teams', name);

      cy.contains('Conversation team changed').should('be.visible');
      cy.api('GET', `/conversations/${conversationId}`)
        .its('body.meta.team.name')
        .should('eq', name);
    });

    cy.api('POST', `/conversations/${conversationId}/assignments`, {
      assignee_id: null,
    })
      .its('status')
      .should('eq', 200);
    cy.api('POST', `/conversations/${conversationId}/assignments`, {
      team_id: 0,
    })
      .its('status')
      .should('eq', 200);

    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.meta')
      .should(meta => {
        expect(meta.assignee).to.be.undefined;
        expect(meta.team).to.be.undefined;
      });
  });

  it('CP-02-03 (error, D-02): rechaza asignar un agente de otra cuenta y conserva el asignado', () => {
    cy.api('POST', `/conversations/${conversationId}/assignments`, {
      assignee_id: Cypress.env('agentId'),
    });

    cy.api('POST', `/conversations/${conversationId}/assignments`, {
      assignee_id: Cypress.env('otherUserId'),
    }).then(response => {
      expect(response.status).to.eq(422);
      expect(response.body.error).to.eq(
        'The assignee must be an agent of this account'
      );
    });

    cy.api('GET', `/conversations/${conversationId}`)
      .its('body.meta.assignee.id')
      .should('eq', Cypress.env('agentId'));
  });
});
