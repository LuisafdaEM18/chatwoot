// RF-08 Notas de contacto — Daniel Ortiz Ortiz
// Casos CP-08-01 a CP-08-03 de la matriz de trazabilidad.
describe('RF-08 Notas de contacto', () => {
  let contactId;

  const openNotes = () => {
    cy.visitAccount(`/contacts/${contactId}`);
    cy.contains('button', 'Notes').click();
  };

  beforeEach(() => {
    cy.loginAs('admin');
    cy.api('POST', '/contacts', {
      name: 'Contacto con notas',
      email: `notas.${Date.now()}@chatwoot.test`,
    }).then(({ body }) => {
      contactId = body.payload.contact.id;
    });
  });

  it('CP-08-01 (exitoso): agrega una nota al contacto', () => {
    openNotes();

    cy.get('.ProseMirror').type('Prefiere que lo llamen en la tarde');
    cy.contains('button', 'Save note').click();

    cy.contains('p', 'Prefiere que lo llamen en la tarde').should('be.visible');
    cy.apiShould(`/contacts/${contactId}/notes`, notes =>
      expect(notes.map(note => note.content)).to.include(
        'Prefiere que lo llamen en la tarde'
      )
    );
  });

  it('CP-08-02 (alternativo): elimina una nota existente', () => {
    cy.api('POST', `/contacts/${contactId}/notes`, {
      content: 'Nota para borrar',
    });
    openNotes();

    cy.contains('p', 'Nota para borrar')
      .parents()
      .eq(1)
      .find('button .i-lucide-trash')
      .click();

    cy.contains('p', 'Nota para borrar').should('not.exist');
    cy.apiShould(`/contacts/${contactId}/notes`, notes =>
      expect(notes).to.have.length(0)
    );
  });

  it('CP-08-03 (error): una nota vacía o con solo espacios no se guarda', () => {
    ['', '   '].forEach(content => {
      cy.api('POST', `/contacts/${contactId}/notes`, { content })
        .its('status')
        .should('eq', 422);
    });

    openNotes();
    cy.contains('button', 'Save note').should('be.disabled');
    cy.api('GET', `/contacts/${contactId}/notes`)
      .its('body')
      .should('have.length', 0);
  });
});
