// [Daniel Ortiz] Seguridad — RF-06 a RF-10 (OWASP Top 10 2021)
// Ver qa/docs/criterio13_seguridad.md.
const INTEGRANTE = 'Daniel Ortiz';
const XSS = '<img src=x onerror="window.__xss=1">';

const nuevoContacto = (name = 'Contacto Seguridad') =>
  cy.api('POST', '/contacts', { name, email: `seguridad.${Date.now()}@chatwoot.test` }).its('body.payload.contact');

describe(`[${INTEGRANTE}] Seguridad`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  context('A01 Control de acceso', () => {
    it('RF-06 y RF-08: un usuario de otra cuenta no puede leer un contacto ni sus notas', () => {
      nuevoContacto().then(contact => {
        cy.api('GET', `/contacts/${contact.id}`, null, 'other').its('status').should('eq', 401);
        cy.api('GET', `/contacts/${contact.id}/notes`, null, 'other').its('status').should('eq', 401);
      });
    });

    it('RF-09: un agente no puede crear atributos personalizados (solo los administradores)', () => {
      cy.api(
        'POST',
        '/custom_attribute_definitions',
        {
          custom_attribute_definition: {
            attribute_display_name: 'Intruso',
            attribute_key: `intruso_${Date.now()}`,
            attribute_display_type: 'text',
            attribute_model: 'contact_attribute',
          },
        },
        'agent'
      )
        .its('status')
        .should('eq', 401);
    });

    it('RF-10: los filtros guardados de un usuario no los ve ni los abre otro usuario', () => {
      const name = `privado-${Date.now()}`;
      const query = { payload: [{ attribute_key: 'status', filter_operator: 'equal_to', values: ['open'], query_operator: null }] };
      cy.api('POST', '/custom_filters', { custom_filter: { name, filter_type: 'conversation', query } }).then(({ body }) => {
        cy.api('GET', `/custom_filters/${body.id}`, null, 'agent').its('status').should('eq', 404);
        cy.api('GET', '/custom_filters?filter_type=conversation', null, 'agent')
          .its('body')
          .then(filters => expect(filters.map(f => f.name)).not.to.include(name));
        cy.api('DELETE', `/custom_filters/${body.id}`);
      });
    });
  });

  context('A03 Inyección', () => {
    it('RF-06: un nombre de contacto con HTML se muestra como texto y no ejecuta código', () => {
      nuevoContacto(`XSS ${XSS}`).then(contact => {
        cy.visitAccount(`/contacts/${contact.id}`);
      });

      cy.contains('onerror').should('exist');
      cy.get('img[src="x"]').should('not.exist');
      cy.window().its('__xss').should('be.undefined');
    });

    it('RF-08: una nota de contacto con HTML se muestra como texto y no ejecuta código', () => {
      nuevoContacto().then(contact => {
        cy.api('POST', `/contacts/${contact.id}/notes`, { content: `Nota ${XSS}` });
        cy.visitAccount(`/contacts/${contact.id}`);
      });
      cy.contains('button', 'Notes').click();

      cy.contains('onerror').should('exist');
      cy.get('img[src="x"]').should('not.exist');
      cy.window().its('__xss').should('be.undefined');
    });

    it('RF-10: un filtro con una columna inyectada se rechaza y un valor con SQL no devuelve datos', () => {
      cy.api('POST', '/contacts/filter', {
        payload: [{ attribute_key: 'name; DROP TABLE contacts;--', filter_operator: 'equal_to', values: ['x'], query_operator: null }],
      })
        .its('status')
        .should('eq', 422);
      cy.api('POST', '/contacts/filter', {
        payload: [{ attribute_key: 'name', filter_operator: 'contains', values: ["' OR '1'='1"], query_operator: null }],
      }).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.payload).to.have.length(0);
      });
    });
  });

  context('A04 Diseño inseguro', () => {
    it('RF-06: enviar account_id al editar un contacto no lo mueve a otra cuenta (asignación masiva)', () => {
      nuevoContacto().then(contact => {
        cy.api('PATCH', `/contacts/${contact.id}`, { account_id: Cypress.env('otherAccountId') });
        cy.api('GET', `/contacts/${contact.id}`).its('status').should('eq', 200);
        cy.api('GET', `/api/v1/accounts/${Cypress.env('otherAccountId')}/contacts/${contact.id}`, null, 'other')
          .its('status')
          .should('eq', 404);
      });
    });
  });
});
