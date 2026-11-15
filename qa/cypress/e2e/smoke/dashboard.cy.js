describe('Humo: acceso al panel de Chatwoot', () => {
  it('muestra la pantalla de inicio de sesión', () => {
    cy.visit('/app/login');
    cy.get('[data-testid="email_input"]').should('be.visible');
    cy.get('[data-testid="password_input"]').should('be.visible');
  });

  it('el administrador de pruebas entra al panel de conversaciones', () => {
    cy.loginAs('admin');
    cy.visitAccount('/dashboard');
    cy.location('pathname').should(
      'include',
      `/app/accounts/${Cypress.env('accountId')}`
    );
    cy.contains('Conversations').should('be.visible');
  });
});
