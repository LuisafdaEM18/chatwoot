// [Daniel Ortiz] Regresión E2E — RF-06 a RF-10
// Verifica que las funcionalidades existentes siguen funcionando después de corregir D-03, D-04,
// D-05 y D-06. Se ejecuta después de cada corrección (ver qa/docs/criterio10_regresion.md).
const INTEGRANTE = 'Daniel Ortiz';

const contactWith = name =>
  cy.api('POST', '/contacts', { name, email: `${name.toLowerCase().replace(/\s/g, '.')}.${Date.now()}@chatwoot.test` }).its('body.payload.contact');

describe(`[${INTEGRANTE}] Regresión E2E`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  context('RF-06 Gestión de contactos', () => {
    it('editar el teléfono de un contacto desde su ficha sigue funcionando', () => {
      const phone = `310${String(Date.now()).slice(-7)}`;
      // El contacto ya tiene un teléfono de Colombia, así el selector de país queda en +57.
      cy.api('POST', '/contacts', { name: 'Contacto Regresion', phone_number: `+57300${String(Date.now()).slice(-7)}` }).then(({ body }) => {
        const contact = body.payload.contact;
        cy.visitAccount(`/contacts/${contact.id}`);

        cy.get('input[placeholder="Enter the phone number"]').clear().type(phone);
        cy.contains('button', 'Update contact').click();

        cy.apiShould(`/contacts/${contact.id}`, body => expect(body.payload.phone_number).to.eq(`+57${phone}`));
      });
    });

    it('un teléfono sin el signo + sigue rechazándose', () => {
      cy.api('POST', '/contacts', { name: 'Sin signo', phone_number: '573001234567' }).its('status').should('eq', 422);
    });
  });

  context('RF-07 Importación de contactos', () => {
    it('la importación sigue mostrando el aviso de que empezó', () => {
      cy.visitAccount('/contacts?page=1');
      cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
      cy.contains('Import contacts').click();
      cy.get('input[type="file"]').selectFile(
        { contents: Cypress.Buffer.from(`name,email\nRegresion,regresion.${Date.now()}@chatwoot.test\n`), fileName: 'regresion.csv', mimeType: 'text/csv' },
        { force: true }
      );
      cy.contains('button', /^Import$/).click();

      cy.contains('You will be notified via email when the import is complete.').should('be.visible');
    });

    it('una importación sin archivo sigue rechazándose', () => {
      cy.api('POST', '/contacts/import', {}).its('status').should('eq', 422);
    });
  });

  context('RF-08 Notas de contacto', () => {
    it('agregar una nota desde la ficha sigue funcionando', () => {
      contactWith('Notas Regresion').then(contact => {
        cy.visitAccount(`/contacts/${contact.id}`);
        cy.contains('button', 'Notes').click();

        cy.get('.ProseMirror').type('Nota de regresión');
        cy.contains('button', 'Save note').click();

        cy.contains('p', 'Nota de regresión').should('be.visible');
      });
    });

    it('una nota vacía sigue rechazándose', () => {
      contactWith('Nota Vacia').then(contact => {
        cy.api('POST', `/contacts/${contact.id}/notes`, { content: '' }).its('status').should('eq', 422);
      });
    });
  });

  context('RF-09 Atributos personalizados', () => {
    it('los ocho tipos válidos se siguen aceptando', () => {
      ['text', 'number', 'currency', 'percent', 'link', 'date', 'list', 'checkbox'].forEach(type => {
        cy.api('POST', '/custom_attribute_definitions', {
          custom_attribute_definition: {
            attribute_display_name: `Regresión ${type}`,
            attribute_key: `regresion_${type}_${Date.now()}`,
            attribute_display_type: type,
            attribute_model: 'contact_attribute',
            attribute_values: type === 'list' ? ['A', 'B'] : [],
          },
        })
          .its('status')
          .should('eq', 200);
      });
    });

    it('una clave con espacios sigue bloqueando el formulario', () => {
      cy.visitAccount('/settings/custom-attributes/list');
      cy.contains('button', 'Add Custom Attribute').click();
      cy.get('input[placeholder="Enter custom attribute display name"]').type('Clave mala');
      cy.get('input[placeholder="Enter custom attribute key"]').clear().type('clave mala').blur();

      cy.contains('button', 'Create').should('be.disabled');
    });
  });

  context('RF-10 Filtros y segmentos', () => {
    it('filtrar contactos por nombre desde la lista sigue funcionando', () => {
      const name = `Filtro Regresion ${Date.now()}`;
      contactWith(name);

      cy.visitAccount('/contacts?page=1');
      cy.get('button .i-lucide-list-filter').closest('button').click();
      cy.get('input[placeholder="Enter value"]').type(name);
      cy.contains('button', 'Apply filters').click();

      cy.contains('Showing 1 - 1 of 1 contact').should('be.visible');
    });

    it('guardar, renombrar y borrar un segmento sigue funcionando', () => {
      const query = { payload: [{ attribute_key: 'name', filter_operator: 'contains', values: ['qa'], query_operator: null }] };
      cy.api('POST', '/custom_filters', { custom_filter: { name: `Segmento ${Date.now()}`, filter_type: 'contact', query } }).then(({ body }) => {
        cy.api('PATCH', `/custom_filters/${body.id}`, { custom_filter: { name: 'Segmento renombrado' } })
          .its('body.name')
          .should('eq', 'Segmento renombrado');
        cy.api('DELETE', `/custom_filters/${body.id}`).its('status').should('eq', 204);
      });
    });
  });
});
