// RF-14 Equipos y miembros — Juan Pablo Berrío Díaz
// Casos CP-14-01 a CP-14-03 de la matriz de trazabilidad.
describe('RF-14 Equipos y miembros', () => {
  const memberEmails = teamId =>
    cy
      .api('GET', `/teams/${teamId}/team_members`)
      .its('body')
      .then(members => members.map(m => m.email));

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-14-01 (exitoso): crea el equipo qa-pagos y le agrega dos agentes', () => {
    const name = `qa-pagos-${Date.now()}`;
    cy.visitAccount('/settings/teams/new');
    cy.get('input[placeholder="Example: Sales, Customer Support"]').type(name);
    cy.contains('button', 'Create team').click();

    cy.location('pathname').should('match', /\/teams\/new\/\d+\/agents$/);
    ['qa.agent@chatwoot.test', 'qa.agent2@chatwoot.test'].forEach(email => {
      cy.contains('tr', email).find('input[type="checkbox"]').check();
    });
    cy.contains('button', 'Add agents').click();

    cy.location('pathname')
      .should('match', /\/teams\/new\/\d+\/finish$/)
      .then(pathname => {
        const teamId = pathname.match(/new\/(\d+)\/finish/)[1];
        memberEmails(teamId).should('have.members', [
          'qa.agent@chatwoot.test',
          'qa.agent2@chatwoot.test',
        ]);
      });
  });

  it('CP-14-02 (alternativo): el equipo QA-Soporte se guarda en minúsculas y se le retira un miembro', () => {
    const stamp = Date.now();
    cy.api('POST', '/teams', { name: `QA-Soporte-${stamp}` }).then(
      ({ body: team }) => {
        expect(team.name).to.eq(`qa-soporte-${stamp}`);

        cy.api('POST', `/teams/${team.id}/team_members`, {
          user_ids: [Cypress.env('agentId'), Cypress.env('agent2Id')],
        });
        cy.api('DELETE', `/teams/${team.id}/team_members`, {
          user_ids: [Cypress.env('agent2Id')],
        })
          .its('status')
          .should('eq', 200);

        memberEmails(team.id).should('deep.equal', ['qa.agent@chatwoot.test']);

        cy.visitAccount(`/settings/teams/${team.id}/edit/agents`);
        cy.contains('tr', 'qa.agent@chatwoot.test')
          .find('input[type="checkbox"]')
          .should('be.checked');
        cy.contains('tr', 'qa.agent2@chatwoot.test')
          .find('input[type="checkbox"]')
          .should('not.be.checked');
      }
    );
  });

  it('CP-14-03 (error): un agente sin rol de administrador no puede crear equipos', () => {
    cy.api(
      'POST',
      '/teams',
      { name: `qa-sin-permiso-${Date.now()}` },
      'agent'
    ).then(response => {
      expect(response.status).to.eq(401);
    });

    // D-08: pedir miembros sin user_ids responde 422 y no 500.
    cy.api('POST', '/teams', { name: `qa-d08-${Date.now()}` }).then(
      ({ body: team }) => {
        cy.api('POST', `/teams/${team.id}/team_members`, {})
          .its('status')
          .should('eq', 422);
      }
    );
  });
});
