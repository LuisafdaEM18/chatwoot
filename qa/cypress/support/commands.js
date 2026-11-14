// Inicia sesión por la interfaz y guarda la sesión para reutilizarla entre pruebas.
// role: 'admin' o 'agent' (credenciales en cypress.env.json).
Cypress.Commands.add('loginAs', (role = 'admin') => {
  const email = Cypress.env(`${role}Email`);
  const password = Cypress.env(`${role}Password`);

  cy.session(
    [role, email],
    () => {
      cy.visit('/app/login');
      cy.get('[data-testid="email_input"]').type(email);
      cy.get('[data-testid="password_input"]').type(password, { log: false });
      cy.get('[data-testid="submit_button"]').click();
      cy.location('pathname').should('match', /\/app\/accounts\/\d+/);
    },
    { cacheAcrossSpecs: true }
  );
});

// Ruta del panel de la cuenta de pruebas, por ejemplo: cy.visitAccount('/dashboard').
Cypress.Commands.add('visitAccount', (path = '/dashboard') => {
  cy.visit(`/app/accounts/${Cypress.env('accountId')}${path}`);
});
