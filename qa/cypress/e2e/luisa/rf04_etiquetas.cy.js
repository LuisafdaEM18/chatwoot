// RF-04 Gestión de etiquetas — Luisa Fernanda Espinal Montoya
// Casos CP-04-01 a CP-04-03 de la matriz de trazabilidad.
describe('RF-04 Gestión de etiquetas', () => {
  let conversationId;

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Tengo un problema con el soporte' }).then(
      ({ conversation }) => {
        conversationId = conversation.id;
      }
    );
  });

  const openLabelForm = () => {
    cy.visitAccount('/settings/labels/list');
    cy.contains('button', 'Add label').click();
  };

  it('CP-04-01 (exitoso): crea la etiqueta qa-soporte y la aplica a una conversación', () => {
    cy.uniqueName('qa-soporte').then(title => {
      openLabelForm();
      cy.get('input[placeholder="Label name"]').type(title);
      cy.contains('button', 'Create').click();
      cy.contains('Label added successfully').should('be.visible');

      cy.openConversation(conversationId);
      cy.openConversationActions();
      cy.contains('button', 'Add Labels').click();
      cy.get('input[placeholder="Search labels"]').type(title);
      cy.get('input[placeholder="Search labels"]')
        .parents()
        .eq(1)
        .contains('li button', title)
        .click();

      cy.get('.label-wrap > .label').should('contain', title);
      cy.apiShould(`/conversations/${conversationId}/labels`, body =>
        expect(body.payload).to.include(title)
      );
    });
  });

  it('CP-04-02 (alternativo): quita la etiqueta y la conversación ya no aparece al filtrar por ella', () => {
    cy.uniqueName('qa-filtro').then(title => {
      cy.api('POST', '/labels', { title });
      cy.api('POST', `/conversations/${conversationId}/labels`, {
        labels: [title],
      });

      cy.openConversation(conversationId);
      cy.openConversationActions();
      cy.get('.label-wrap > .label')
        .filter(`:contains("${title}")`)
        .find('button')
        .click();

      cy.get('.label-wrap > .label').should('not.exist');
      cy.apiShould(`/conversations/${conversationId}/labels`, body =>
        expect(body.payload).not.to.include(title)
      );
      cy.api(
        'GET',
        `/conversations?labels[]=${title}&status=all&assignee_type=all`
      )
        .its('body.data.payload')
        .should('have.length', 0);
    });
  });

  it('CP-04-03 (error): no deja crear etiquetas con espacios, con símbolos ni repetidas', () => {
    openLabelForm();

    // Con espacios: el frontend marca el campo y desactiva el botón. Defecto D-09: no muestra el texto
    // del error, porque getLabelTitleErrorMessage compara los objetos de Vuelidate como booleanos.
    cy.get('input[placeholder="Label name"]').type('qa soporte').blur();
    cy.get('[data-testid="label-title"]').should('have.class', 'error');
    cy.contains('button', 'Create').should('be.disabled');

    // Con símbolos: el frontend no lo valida; el servidor lo rechaza y la interfaz lo informa.
    cy.get('input[placeholder="Label name"]').clear().type('qa!');
    cy.contains('button', 'Create').should('be.enabled').click();
    cy.contains('Title is invalid').should('be.visible');
    cy.api('GET', '/labels')
      .its('body.payload')
      .then(labels => {
        expect(labels.map(label => label.title)).not.to.include('qa!');
      });

    // Repetida: la API responde 422.
    cy.uniqueName('qa-repetida').then(title => {
      cy.api('POST', '/labels', { title }).its('status').should('eq', 200);
      cy.api('POST', '/labels', { title }).then(response => {
        expect(response.status).to.eq(422);
        expect(response.body.message).to.match(/already been taken/);
      });
    });
  });
});
