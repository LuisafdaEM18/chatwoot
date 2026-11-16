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

  it('RF-12: la lista de macros no agrega barreras a las conocidas', () => {
    cy.visitAccount('/settings/macros');
    cy.get('table').should('be.visible');
    comprobarAccesibilidad('macros', [...BARRERAS_PANEL, 'link-name']);
  });

  it('RF-13: la lista de automatizaciones no agrega barreras a las conocidas', () => {
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
