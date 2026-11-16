// Revisión automática de accesibilidad con axe-core (criterio 11), como en Athletia.
// Chatwoot no es nuestro: en vez de exigir cero violaciones, cada prueba declara las barreras ya
// documentadas en qa/docs/criterio11_accesibilidad.md y falla si aparece una barrera nueva.
export const REGLAS = { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } };

// Barreras del diseño general (barra lateral, logo, avatar y <head>) que aparecen en todas las
// pantallas del panel. Ver B-01 a B-06 en el documento del criterio 11.
export const BARRERAS_PANEL = ['html-has-lang', 'meta-viewport', 'image-alt', 'button-name', 'color-contrast', 'role-img-alt'];

function resumen(pantalla, violations) {
  const lineas = violations.map(
    v =>
      `  - [${v.impact}] ${v.id} (${v.tags.filter(t => /^wcag\d{3,}$/.test(t)).join(', ')}): ${v.help} ` +
      `(${v.nodes.length} elemento/s) → ${v.nodes
        .slice(0, 2)
        .map(n => n.target.join(' '))
        .join(' | ')}`
  );
  return [`[axe] ${pantalla}: ${violations.length} tipo(s) de violación`, ...lineas].join('\n');
}

/**
 * Revisa la página actual con axe (WCAG 2.1 A y AA), muestra cada violación en la terminal y
 * comprueba que solo aparezcan las barreras conocidas de esa pantalla.
 */
export function comprobarAccesibilidad(pantalla, barrerasConocidas = BARRERAS_PANEL) {
  cy.injectAxe();
  cy.window({ log: false })
    .then(win => win.axe.run(win.document, REGLAS))
    .then(({ violations }) => {
      // El detalle se muestra antes de la aserción para verlo también cuando la prueba falla.
      cy.task('log', resumen(pantalla, violations), { log: false }).then(() => {
          const nuevas = violations.map(v => v.id).filter(id => !barrerasConocidas.includes(id));
        expect(nuevas, `barreras de accesibilidad nuevas en ${pantalla}`).to.be.empty;
      });
    });
}
