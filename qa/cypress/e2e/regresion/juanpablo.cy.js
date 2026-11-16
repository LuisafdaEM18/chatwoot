// [Juan Pablo Berrío] Regresión E2E — RF-11 a RF-15
// Verifica que las funcionalidades existentes siguen funcionando después de corregir D-08 y M-01.
// Se ejecuta después de cada corrección (ver qa/docs/criterio10_regresion.md).
const INTEGRANTE = 'Juan Pablo Berrío';

describe(`[${INTEGRANTE}] Regresión E2E`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  context('RF-11 Respuestas predefinidas', () => {
    it('buscar una respuesta en la configuración sigue funcionando', () => {
      const shortCode = `regresion-${Date.now()}`;
      cy.api('POST', '/canned_responses', { canned_response: { short_code: shortCode, content: 'Texto de regresión' } });

      cy.visitAccount('/settings/canned-response/list');
      cy.get('input[placeholder="Search canned responses..."]').type(shortCode);

      cy.contains('Texto de regresión').should('be.visible');
    });

    it('una respuesta sin contenido sigue rechazándose', () => {
      cy.api('POST', '/canned_responses', { canned_response: { short_code: `vacia-${Date.now()}`, content: '' } })
        .its('status')
        .should('eq', 422);
    });
  });

  context('RF-12 Macros', () => {
    it('una macro global sigue apareciendo en la configuración', () => {
      const name = `Macro regresión ${Date.now()}`;
      cy.api('POST', '/macros', { name, visibility: 'global', actions: [{ action_name: 'add_label', action_params: ['qa'] }] });

      cy.visitAccount('/settings/macros');

      cy.contains(name).scrollIntoView().should('be.visible');
    });

    it('una acción que no existe sigue rechazándose', () => {
      cy.api('POST', '/macros', { name: `Inválida ${Date.now()}`, visibility: 'global', actions: [{ action_name: 'borrar_todo', action_params: [] }] })
        .its('status')
        .should('eq', 422);
    });
  });

  context('RF-13 Reglas de automatización', () => {
    it('una regla creada sigue apareciendo en la lista de automatizaciones', () => {
      const name = `Regla regresión ${Date.now()}`;
      cy.api('POST', '/automation_rules', {
        name,
        event_name: 'message_created',
        active: true,
        conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: null }],
        actions: [{ action_name: 'add_label', action_params: ['qa'] }],
      });

      cy.visitAccount('/settings/automation/list');

      cy.contains(name).scrollIntoView().should('be.visible');
    });

    it('un retraso de 9 minutos sigue rechazándose', () => {
      cy.api('POST', '/automation_rules', {
        name: `Retraso ${Date.now()}`,
        event_name: 'message_created',
        active: true,
        conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: null }],
        actions: [{ action_name: 'add_label', action_params: ['qa'] }],
        execution_delay: 9,
      })
        .its('status')
        .should('eq', 422);
    });
  });

  context('RF-14 Equipos y miembros', () => {
    it('crear un equipo desde la configuración sigue llevando al paso de agentes', () => {
      cy.visitAccount('/settings/teams/new');
      cy.get('input[placeholder="Example: Sales, Customer Support"]').type(`qa-regresion-${Date.now()}`);
      cy.contains('button', 'Create team').click();

      cy.location('pathname').should('match', /\/teams\/new\/\d+\/agents$/);
    });

    it('agregar y quitar miembros por la API sigue funcionando', () => {
      cy.api('POST', '/teams', { name: `qa-miembros-${Date.now()}` }).then(({ body: team }) => {
        cy.api('POST', `/teams/${team.id}/team_members`, { user_ids: [Cypress.env('agentId')] }).its('status').should('eq', 200);
        cy.api('DELETE', `/teams/${team.id}/team_members`, { user_ids: [Cypress.env('agentId')] }).its('status').should('eq', 200);
        cy.api('GET', `/teams/${team.id}/team_members`).its('body').should('have.length', 0);
      });
    });
  });

  context('RF-15 Reportes', () => {
    it('el reporte de conversaciones sigue mostrando sus métricas', () => {
      cy.visitAccount('/reports/conversation');

      cy.contains('Last 7 days').should('be.visible');
      cy.contains('Messages received').should('exist');
    });

    it('un agente sin permisos sigue sin poder consultar los reportes', () => {
      const until = Math.floor(Date.now() / 1000);
      cy.api('GET', `/api/v2/accounts/${Cypress.env('accountId')}/reports/summary?type=account&since=${until - 604800}&until=${until}`, null, 'agent')
        .its('status')
        .should('eq', 401);
    });
  });
});
