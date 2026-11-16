// [Luisa Espinal] Accesibilidad automática con axe — RF-01 a RF-05
import { BARRERAS_PANEL, comprobarAccesibilidad } from '../../support/accesibilidad';

const INTEGRANTE = 'Luisa Espinal';

describe(`[${INTEGRANTE}] Accesibilidad automática con axe`, () => {
  it('el inicio de sesión no agrega barreras a las conocidas', () => {
    cy.visit('/app/login');
    cy.get('[data-testid="email_input"]').should('be.visible');
    comprobarAccesibilidad('inicio de sesión', ['html-has-lang', 'meta-viewport', 'color-contrast']);
  });

  it('RF-01 a RF-03: la vista de una conversación no agrega barreras a las conocidas', () => {
    cy.loginAs('admin');
    cy.createConversation({ message: 'Revisión de accesibilidad' }).then(({ conversation }) => {
      cy.openConversation(conversation.id);
    });
    comprobarAccesibilidad('conversación', [...BARRERAS_PANEL, 'link-name', 'list', 'listitem', 'scrollable-region-focusable']);
  });

  it('RF-04: el formulario de nueva etiqueta no agrega barreras a las conocidas', () => {
    cy.loginAs('admin');
    cy.visitAccount('/settings/labels/list');
    cy.contains('button', 'Add label').click();
    cy.get('input[placeholder="Label name"]').should('be.visible');
    comprobarAccesibilidad('nueva etiqueta', [...BARRERAS_PANEL, 'label']);
  });

  it('RF-05: la búsqueda con resultados no agrega barreras a las conocidas', () => {
    const word = `accesible${Date.now()}`;
    cy.loginAs('admin');
    cy.createConversation({ message: `Mensaje ${word}` });
    cy.visitAccount('/search');
    cy.get('input[placeholder="Type 3 or more characters to search"]').type(`${word}{enter}`);
    cy.contains('Messages (1)').should('be.visible');
    comprobarAccesibilidad('búsqueda');
  });
});
