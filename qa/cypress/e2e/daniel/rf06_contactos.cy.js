// RF-06 Gestión de contactos — Daniel Ortiz Ortiz
// Casos CP-06-01 a CP-06-03 de la matriz de trazabilidad.
describe('RF-06 Gestión de contactos', () => {
  const field = placeholder =>
    cy.get(`dialog[open] input[placeholder="${placeholder}"]`);

  const findContact = email =>
    cy
      .api('GET', `/contacts/search?q=${encodeURIComponent(email)}`)
      .its('body.payload');

  beforeEach(() => {
    cy.loginAs('admin');
  });

  // El teléfono es único por cuenta, así que se usa +57300 seguido de 7 dígitos que cambian en cada
  // ejecución (mismo formato E.164 que +573001234567 del caso diseñado).
  it('CP-06-01 (exitoso): crea un contacto con nombre, correo válido y teléfono +57300XXXXXXX', () => {
    const stamp = String(Date.now());
    const email = `ana.${stamp}@chatwoot.test`;
    const phone = `300${stamp.slice(-7)}`;
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
    cy.contains('Add contact').click();

    field('Enter the first name').type('Ana');
    field('Enter the last name').type('Prueba');
    field('Enter the email address').type(email);
    // Chatwoot propone el indicativo según la zona horaria del navegador (America/Bogota: +57).
    cy.contains('dialog[open]', '+57').should('be.visible');
    field('Enter the phone number').type(phone);
    cy.contains('dialog[open] button', 'Save contact').click();

    cy.get('dialog[open]').should('not.exist');
    findContact(email).should(contacts => {
      expect(contacts).to.have.length(1);
      expect(contacts[0]).to.include({
        name: 'Ana Prueba',
        email,
        phone_number: `+57${phone}`,
      });
    });
  });

  it('CP-06-02 (alternativo): edita el teléfono de un contacto y luego lo elimina', () => {
    const stamp = String(Date.now());
    const email = `editar.${stamp}@chatwoot.test`;
    const newPhone = `310${stamp.slice(-7)}`;
    cy.api('POST', '/contacts', {
      name: 'Contacto Editable',
      email,
      phone_number: `+57300${stamp.slice(-7)}`,
    }).then(({ body }) => {
      const id = body.payload.contact.id;
      cy.visitAccount(`/contacts/${id}`);

      cy.get('input[placeholder="Enter the phone number"]')
        .clear()
        .type(newPhone);
      cy.contains('button', 'Update contact').click();

      cy.apiShould(`/contacts/${id}`, contact =>
        expect(contact.payload.phone_number).to.eq(`+57${newPhone}`)
      );

      cy.contains('button', 'Delete contact').click();
      cy.contains('button', 'Yes, Delete').click();

      // Al borrar, Chatwoot vuelve a la lista de contactos; se consulta la API hasta recibir 404.
      const expectDeleted = (remaining = 10) =>
        cy.api('GET', `/contacts/${id}`).then(({ status }) => {
          if (status === 404 || remaining === 0) {
            expect(status).to.eq(404);
            return;
          }
          cy.wait(500).then(() => expectDeleted(remaining - 1));
        });
      expectDeleted();
    });
  });

  it('CP-06-03 (error): rechaza un teléfono sin +, uno de 16 dígitos y un correo repetido', () => {
    ['573001234567', '+1234567890123456'].forEach(phone => {
      cy.api('POST', '/contacts', {
        name: 'Teléfono inválido',
        phone_number: phone,
      }).then(response => {
        expect(response.status).to.eq(422);
        expect(response.body.message).to.match(/Phone number/);
      });
    });

    const email = `repetido.${Date.now()}@chatwoot.test`;
    cy.api('POST', '/contacts', { name: 'Original', email })
      .its('status')
      .should('eq', 200);

    cy.intercept('POST', '**/api/v1/accounts/*/contacts').as('createContact');
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
    cy.contains('Add contact').click();
    field('Enter the first name').type('Copia');
    field('Enter the email address').type(email.toUpperCase());
    cy.contains('dialog[open] button', 'Save contact').click();

    cy.wait('@createContact').then(({ response }) => {
      expect(response.statusCode).to.eq(422);
      expect(response.body.attributes).to.include('email');
    });
    cy.get('dialog[open]').should('be.visible');
    findContact(email).should('have.length', 1);

    // Un correo sin @ ni siquiera deja guardar: el botón se desactiva.
    field('Enter the email address').clear().type('correo-malo');
    cy.contains('dialog[open] button', 'Save contact').should('be.disabled');
  });
});
