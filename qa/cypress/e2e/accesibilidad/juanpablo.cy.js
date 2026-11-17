// [Juan Pablo Berrío] Accesibilidad automática con axe — RF-11 a RF-15
import { BARRERAS_PANEL, comprobarAccesibilidad } from '../../support/accesibilidad';

const INTEGRANTE = 'Juan Pablo Berrío';

describe(`[${INTEGRANTE}] Accesibilidad automática con axe`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('RF-11: la lista de respuestas predefinidas no agrega barreras a las conocidas', () => {
    cy.visitAccount('/settings/canned-response/list');
    cy.get('input[placeholder="Search canned responses..."]').should('be.visible');
    comprobarAccesibilidad('respuestas predefinidas');
  });

  // Las listas de macros y automatizaciones solo muestran la tabla cuando hay al menos un
  // elemento, así que cada prueba crea el suyo y no depende del orden de ejecución.
  it('RF-12: la lista de macros no agrega barreras a las conocidas', () => {
    cy.api('POST', '/macros', {
      name: `qa-macro-accesible-${Date.now()}`,
      visibility: 'global',
      actions: [{ action_name: 'resolve_conversation', action_params: null }],
    });
    cy.visitAccount('/settings/macros');
    cy.get('table').should('be.visible');
    comprobarAccesibilidad('macros', [...BARRERAS_PANEL, 'link-name']);
  });

  it('RF-13: la lista de automatizaciones no agrega barreras a las conocidas', () => {
    cy.api('POST', '/automation_rules', {
      name: `qa-regla-accesible-${Date.now()}`,
      description: 'Regla creada para la revisión de accesibilidad',
      event_name: 'message_created',
      active: false,
      conditions: [{ attribute_key: 'content', filter_operator: 'contains', values: ['accesible'], query_operator: null }],
      actions: [{ action_name: 'resolve_conversation', action_params: null }],
    });
    cy.visitAccount('/settings/automation/list');
    cy.get('table').should('be.visible');
    comprobarAccesibilidad('automatizaciones');
  });

  it('RF-14: la lista de equipos no agrega barreras a las conocidas', () => {
    const name = `qa-accesible-${Date.now()}`;
    cy.api('POST', '/teams', { name });
    cy.visitAccount('/settings/teams/list');
    cy.contains(name).scrollIntoView().should('be.visible');
    comprobarAccesibilidad('equipos', [...BARRERAS_PANEL, 'link-name']);
  });

  it('RF-15: el reporte de conversaciones no agrega barreras a las conocidas', () => {
    cy.visitAccount('/reports/conversation');
    cy.contains('Messages received').should('exist');
    comprobarAccesibilidad('reporte de conversaciones', [...BARRERAS_PANEL, 'nested-interactive']);
  });
});
