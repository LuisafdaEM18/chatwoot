// RF-09 Atributos personalizados — Daniel Ortiz Ortiz
// Casos CP-09-01 a CP-09-03 de la matriz de trazabilidad.
describe('RF-09 Atributos personalizados', () => {
  const openAttributeForm = () => {
    cy.visitAccount('/settings/custom-attributes/list');
    cy.contains('button', 'Add Custom Attribute').click();
  };

  const createContact = () =>
    cy
      .api('POST', '/contacts', {
        name: 'Contacto con atributos',
        email: `attr.${Date.now()}@chatwoot.test`,
      })
      .its('body.payload.contact.id');

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-09-01 (exitoso): crea un atributo de contacto de tipo número y el contacto muestra su valor', () => {
    const key = `qa_puntos_${Date.now()}`;
    openAttributeForm();

    cy.get('select').first().select('Contact');
    cy.get('input[placeholder="Enter custom attribute display name"]').type(
      'Puntos QA'
    );
    cy.get('input[placeholder="Enter custom attribute key"]').clear().type(key);
    cy.get('textarea[placeholder="Enter custom attribute description"]').type(
      'Puntos de fidelidad'
    );
    cy.get('select').eq(1).select('Number');
    cy.contains('button', 'Create').click();

    cy.contains('Custom Attribute added successfully!').should('be.visible');

    createContact().then(contactId => {
      cy.api('PUT', `/contacts/${contactId}`, {
        custom_attributes: { [key]: 150 },
      });
      cy.visitAccount(`/contacts/${contactId}`);
      cy.contains('Puntos QA').should('be.visible');
      cy.contains('150').should('be.visible');
    });
  });

  it('CP-09-02 (alternativo): crea un atributo de tipo lista y el contacto muestra la opción elegida', () => {
    const key = `qa_plan_${Date.now()}`;
    cy.api('POST', '/custom_attribute_definitions', {
      custom_attribute_definition: {
        attribute_display_name: 'Plan QA',
        attribute_key: key,
        attribute_display_type: 'list',
        attribute_model: 'contact_attribute',
        attribute_values: ['Básico', 'Premium'],
      },
    })
      .its('status')
      .should('eq', 200);

    createContact().then(contactId => {
      cy.api('PUT', `/contacts/${contactId}`, {
        custom_attributes: { [key]: 'Premium' },
      });
      cy.visitAccount(`/contacts/${contactId}`);
      cy.contains('Plan QA').should('be.visible');
      cy.contains('Premium').should('be.visible');
    });
  });

  it('CP-09-03 (error): rechaza una clave con espacios o símbolos, una clave repetida y un tipo inexistente (D-03)', () => {
    openAttributeForm();
    cy.get('input[placeholder="Enter custom attribute display name"]').type(
      'Clave mala'
    );
    cy.get('input[placeholder="Enter custom attribute key"]')
      .clear()
      .type('qa clave')
      .blur();
    // El campo queda marcado y no se puede crear. Defecto D-10: el mensaje dice "Key is required"
    // en lugar de "Invalid key" (keyErrorMessage compara el objeto de Vuelidate como booleano).
    cy.get('input[placeholder="Enter custom attribute key"]')
      .parent()
      .should('have.class', 'error');
    cy.contains('button', 'Create').should('be.disabled');

    const payload = (attributeKey, type = 'text') => ({
      custom_attribute_definition: {
        attribute_display_name: 'Atributo QA',
        attribute_key: attributeKey,
        attribute_display_type: type,
        attribute_model: 'contact_attribute',
      },
    });
    const key = `qa_repetida_${Date.now()}`;

    cy.api('POST', '/custom_attribute_definitions', payload('qa@clave'))
      .its('status')
      .should('eq', 422);
    cy.api('POST', '/custom_attribute_definitions', payload(key))
      .its('status')
      .should('eq', 200);
    cy.api('POST', '/custom_attribute_definitions', payload(key))
      .its('status')
      .should('eq', 422);
    cy.api(
      'POST',
      '/custom_attribute_definitions',
      payload(`${key}_color`, 'color')
    )
      .its('status')
      .should('eq', 422);
  });
});
