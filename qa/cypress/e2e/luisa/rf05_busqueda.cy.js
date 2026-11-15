// RF-05 Búsqueda global — Luisa Fernanda Espinal Montoya
// Casos CP-05-01 a CP-05-03 de la matriz de trazabilidad.
describe('RF-05 Búsqueda global', () => {
  const searchFor = term => {
    cy.visitAccount('/search');
    cy.get('input[placeholder="Type 3 or more characters to search"]').type(
      `${term}{enter}`
    );
  };

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-05-01 (exitoso): encuentra la conversación por el texto de un mensaje', () => {
    const word = `reembolso${Date.now()}`;
    cy.createConversation({
      name: 'Cliente Búsqueda',
      message: `Quiero un ${word} de mi compra`,
    });

    searchFor(word);

    cy.contains('Messages (1)').should('be.visible');
    cy.contains('Cliente Búsqueda wrote:').should('be.visible');
    cy.api('GET', `/search/messages?q=${word}`)
      .its('body.payload.messages')
      .should('have.length', 1);
  });

  it('CP-05-02 (alternativo): encuentra un contacto por su correo', () => {
    const email = `buscado.${Date.now()}@chatwoot.test`;
    cy.createConversation({ name: 'Contacto Buscado', email });

    searchFor(email);

    cy.contains('Contacto Buscado').should('be.visible');
    cy.api('GET', `/search/contacts?q=${encodeURIComponent(email)}`)
      .its('body.payload.contacts.0.email')
      .should('eq', email);
  });

  it('CP-05-03 (error): una inyección SQL o un término inexistente devuelve la lista vacía sin error 500', () => {
    ["' OR 1=1 --", 'termino-que-no-existe-xyz'].forEach(term => {
      cy.api('GET', `/search?q=${encodeURIComponent(term)}`).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.payload.contacts).to.have.length(0);
        expect(response.body.payload.conversations).to.have.length(0);
      });
    });

    searchFor('termino-que-no-existe-xyz');
    cy.contains(
      "No results found for query 'termino-que-no-existe-xyz'"
    ).should('be.visible');
  });
});
