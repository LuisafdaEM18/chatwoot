// [Daniel Ortiz] Accesibilidad automática con axe — RF-06 a RF-10
import { BARRERAS_PANEL, comprobarAccesibilidad } from '../../support/accesibilidad';

const INTEGRANTE = 'Daniel Ortiz';
const LISTA = [...BARRERAS_PANEL, 'list', 'listitem'];

describe(`[${INTEGRANTE}] Accesibilidad automática con axe`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('RF-06: la lista de contactos no agrega barreras a las conocidas', () => {
    // La prueba crea su propio contacto: con la lista vacía no aparece el pie "Showing…".
    cy.api('POST', '/contacts', { name: 'Contacto Lista Accesible', email: `lista.${Date.now()}@chatwoot.test` });
    cy.visitAccount('/contacts?page=1');
    cy.contains('Showing').should('be.visible');
    comprobarAccesibilidad('lista de contactos', LISTA);
  });

  it('RF-06 y RF-08: la ficha de un contacto con sus notas no agrega barreras a las conocidas', () => {
    cy.api('POST', '/contacts', { name: 'Contacto Accesible', email: `accesible.${Date.now()}@chatwoot.test` }).then(({ body }) => {
      cy.visitAccount(`/contacts/${body.payload.contact.id}`);
    });
    cy.contains('button', 'Notes').click();
    cy.get('.ProseMirror').should('be.visible');
    comprobarAccesibilidad('ficha de contacto', LISTA);
  });

  it('RF-07: la ventana de importar contactos no agrega barreras a las conocidas', () => {
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
    cy.contains('Import contacts').click();
    cy.contains('button', /^Import$/).should('be.visible');
    comprobarAccesibilidad('importar contactos', LISTA);
  });

  it('RF-09: el formulario de atributo personalizado no agrega barreras a las conocidas', () => {
    cy.visitAccount('/settings/custom-attributes/list');
    cy.contains('button', 'Add Custom Attribute').click();
    cy.get('input[placeholder="Enter custom attribute display name"]').should('be.visible');
    comprobarAccesibilidad('nuevo atributo', [...BARRERAS_PANEL, 'label']);
  });

  it('RF-10: el panel de filtros de contactos no agrega barreras a las conocidas', () => {
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-list-filter').closest('button').click();
    cy.get('input[placeholder="Enter value"]').should('be.visible');
    comprobarAccesibilidad('filtros de contactos', LISTA);
  });
});
