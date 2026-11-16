const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/cypress',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    video: false,
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // Muestra en la terminal el detalle de las violaciones de accesibilidad (criterio 11).
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
