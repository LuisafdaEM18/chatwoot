// [Luisa Espinal] Regresión E2E — RF-01 a RF-05
// Verifica que las funcionalidades existentes siguen funcionando después de corregir D-01, D-02
// y refactorizar H-01. Se ejecuta después de cada corrección (ver qa/docs/criterio10_regresion.md).
const INTEGRANTE = 'Luisa Espinal';

describe(`[${INTEGRANTE}] Regresión E2E`, () => {
  let conversationId;

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Regresión de conversaciones' }).then(({ conversation }) => {
      conversationId = conversation.id;
    });
  });

  context('RF-01 Cambio de estado', () => {
    it('resolver y volver a abrir desde la conversación sigue funcionando', () => {
      cy.intercept('POST', '**/toggle_status').as('toggle');
      cy.openConversation(conversationId);

      cy.contains('button', /^Resolve$/).click();
      cy.wait('@toggle').its('response.statusCode').should('eq', 200);
      cy.contains('button', 'Reopen').click();
      cy.wait('@toggle').its('response.statusCode').should('eq', 200);

      cy.apiShould(`/conversations/${conversationId}`, body => expect(body.status).to.eq('open'));
    });

    it('un estado que no existe sigue rechazándose y la conversación sigue abierta', () => {
      cy.api('POST', `/conversations/${conversationId}/toggle_status`, { status: 'cerrada' }).its('status').should('eq', 422);
      cy.api('GET', `/conversations/${conversationId}`).its('body.status').should('eq', 'open');
    });
  });

  context('RF-02 Asignación', () => {
    it('asignar un agente desde el panel sigue funcionando', () => {
      cy.intercept('POST', '**/assignments').as('assign');
      cy.openConversation(conversationId);
      cy.openConversationActions();

      cy.chooseInDropdown('Assigned Agent', 'Search agents', 'QA Agente');

      cy.wait('@assign').its('response.statusCode').should('eq', 200);
      cy.apiShould(`/conversations/${conversationId}`, body => expect(body.meta.assignee.id).to.eq(Cypress.env('agentId')));
    });

    it('quitar el agente con assignee_id nulo sigue funcionando y un agente ajeno sigue rechazándose', () => {
      cy.api('POST', `/conversations/${conversationId}/assignments`, { assignee_id: Cypress.env('agentId') });
      cy.api('POST', `/conversations/${conversationId}/assignments`, { assignee_id: Cypress.env('otherUserId') })
        .its('status')
        .should('eq', 422);
      cy.api('POST', `/conversations/${conversationId}/assignments`, { assignee_id: null }).its('status').should('eq', 200);

      cy.api('GET', `/conversations/${conversationId}`).its('body.meta.assignee').should('be.undefined');
    });
  });

  context('RF-03 Mensajes y notas privadas', () => {
    it('responder al cliente sigue guardando un mensaje público', () => {
      cy.intercept('POST', '**/messages').as('message');
      cy.openConversation(conversationId);

      cy.get('.ProseMirror').type('Respuesta de regresión');
      cy.contains('button', 'Send').click();

      cy.wait('@message').its('response.body').should('include', { content: 'Respuesta de regresión', private: false });
    });

    it('agregar una nota privada sigue guardándola como privada', () => {
      cy.intercept('POST', '**/messages').as('message');
      cy.openConversation(conversationId);

      cy.contains('button', 'Private Note').click();
      cy.get('.ProseMirror').type('Nota de regresión');
      cy.contains('button', 'Add Note').click();

      cy.wait('@message').its('response.body').should('include', { content: 'Nota de regresión', private: true });
    });
  });

  context('RF-04 Etiquetas', () => {
    it('crear una etiqueta válida sigue funcionando', () => {
      cy.uniqueName('qa-regresion').then(title => {
        cy.intercept('POST', '**/labels').as('label');
        cy.visitAccount('/settings/labels/list');
        cy.contains('button', 'Add label').click();
        cy.get('input[placeholder="Label name"]').type(title);
        cy.contains('button', 'Create').click();

        cy.wait('@label').its('response.statusCode').should('eq', 200);
        cy.contains('Label added successfully').should('be.visible');
      });
    });

    it('una etiqueta con símbolos sigue rechazándose', () => {
      cy.visitAccount('/settings/labels/list');
      cy.contains('button', 'Add label').click();
      cy.get('input[placeholder="Label name"]').type('qa!');
      cy.contains('button', 'Create').click();

      cy.contains('Title is invalid').should('be.visible');
    });
  });

  context('RF-05 Búsqueda global', () => {
    it('buscar el texto de un mensaje sigue encontrando la conversación', () => {
      const word = `regresion${Date.now()}`;
      cy.createConversation({ name: 'Cliente Regresión', message: `Mensaje con ${word}` });

      cy.visitAccount('/search');
      cy.get('input[placeholder="Type 3 or more characters to search"]').type(`${word}{enter}`);

      cy.contains('Messages (1)').should('be.visible');
    });

    it('un término inexistente sigue mostrando que no hay resultados', () => {
      cy.visitAccount('/search');
      cy.get('input[placeholder="Type 3 or more characters to search"]').type('termino-inexistente-regresion{enter}');

      cy.contains("No results found for query 'termino-inexistente-regresion'").should('be.visible');
    });
  });
});
