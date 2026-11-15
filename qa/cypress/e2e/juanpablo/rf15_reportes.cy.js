// RF-15 Reportes de conversaciones y agentes — Juan Pablo Berrío Díaz
// Casos CP-15-01 a CP-15-03 de la matriz de trazabilidad.
describe('RF-15 Reportes de conversaciones y agentes', () => {
  const accountId = () => Cypress.env('accountId');
  const unix = date => Math.floor(date.getTime() / 1000);

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-15-01 (exitoso): muestra las métricas de conversaciones de los últimos 7 días', () => {
    cy.createConversation({ message: 'Conversación para el reporte' });

    cy.visitAccount('/reports/conversation');

    cy.contains('Last 7 days').should('be.visible');
    [
      'Messages received',
      'Messages sent',
      'First Response Time',
      'Resolution Count',
    ].forEach(metric => cy.contains(metric).should('exist'));

    const until = new Date();
    const since = new Date(until.getTime() - 7 * 24 * 60 * 60 * 1000);
    cy.api(
      'GET',
      `/api/v2/accounts/${accountId()}/reports/summary?type=account&since=${unix(since)}&until=${unix(until)}`
    ).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.conversations_count).to.be.greaterThan(0);
    });
  });

  it('CP-15-02 (alternativo): consulta el reporte por agente con un rango personalizado y lo descarga', () => {
    const until = new Date();
    const since = new Date(until.getTime() - 3 * 24 * 60 * 60 * 1000);
    cy.intercept('GET', '**/api/v2/accounts/*/reports/agents*').as(
      'downloadAgents'
    );

    cy.visitAccount(
      `/reports/agents_overview?from=${unix(since)}&to=${unix(until)}&range=custom`
    );

    cy.contains('QA Admin').should('be.visible');
    cy.contains('No. of conversations').should('be.visible');
    cy.contains('button', 'Download agent reports').click();

    cy.wait('@downloadAgents').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);
      // La interfaz extiende el rango personalizado al inicio del primer día.
      const startOfDay = new Date(since);
      startOfDay.setHours(0, 0, 0, 0);
      expect(request.url).to.include(`since=${unix(startOfDay)}`);
      expect(response.body).to.match(/Agent name|Agent/i);
    });
  });

  it('CP-15-03 (error): un agente sin permisos no puede consultar los reportes por API', () => {
    const until = new Date();
    const since = new Date(until.getTime() - 7 * 24 * 60 * 60 * 1000);

    cy.api(
      'GET',
      `/api/v2/accounts/${accountId()}/reports/summary?type=account&since=${unix(since)}&until=${unix(until)}`,
      null,
      'agent'
    )
      .its('status')
      .should('eq', 401);
  });
});
