import 'cypress-mochawesome-reporter/register';
import 'cypress-axe';
import './commands';

// Errores conocidos del propio Chatwoot que no afectan los flujos probados:
// - ResizeObserver: aviso del navegador cuando un panel cambia de tamaño.
// - ConstraintError y AbortError: la caché de IndexedDB de Chatwoot cuando se borra entre páginas
//   (visitAccount la limpia para ver los datos creados por API).
Cypress.on(
  'uncaught:exception',
  error =>
    !/ResizeObserver loop|ConstraintError|AbortError/.test(
      `${error.name} ${error.message}`
    )
);
