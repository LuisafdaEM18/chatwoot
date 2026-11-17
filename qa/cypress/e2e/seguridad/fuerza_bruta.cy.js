// [Equipo] Seguridad — A07 Fallas de identificación y autenticación (fuerza bruta)
// Ver qa/docs/criterio13_seguridad.md, sección 3.4.
//
// El entorno E2E desactiva Rack::Attack para que Cypress pueda iniciar sesión muchas veces.
// Esta prueba solo corre con Rack::Attack activo:
//   QA_ENABLE_RACK_ATTACK=true docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d rails
//   cd qa && npm run cy:seguridad:rack
// Sin --env rackAttack=true queda omitida (pending), así `npm run cy:seguridad` sigue en verde.
//
// Los contadores de Rack::Attack viven en Redis durante 5 minutos (login/ip) o 15 minutos
// (login/email), por eso la prueba no exige que los primeros intentos sean exactamente cinco:
// exige que todo intento antes del bloqueo responda 401 y que el bloqueo (429) llegue a más
// tardar en el sexto intento.
const activo = Cypress.env('rackAttack') === true || Cypress.env('rackAttack') === 'true';
const MAX_INTENTOS = 6;

const intentar = (path, body) =>
  cy.request({ method: 'POST', url: path, body, failOnStatusCode: false, log: false }).its('status');

const atacar = (path, body, intento = 1, codigos = []) =>
  intentar(path, body).then(status => {
    const vistos = [...codigos, status];
    if (status === 429 || intento >= MAX_INTENTOS) return cy.wrap(vistos);
    return atacar(path, body, intento + 1, vistos);
  });

(activo ? describe : describe.skip)('[Equipo] Seguridad — A07 fuerza bruta (Rack::Attack activo)', () => {
  it('bloquea con 429 los intentos repetidos de inicio de sesión con contraseña incorrecta', () => {
    atacar('/auth/sign_in', { email: `fuerza.bruta.${Date.now()}@chatwoot.test`, password: 'incorrecta' }).then(codigos => {
      cy.log(`Códigos: ${codigos.join(', ')}`);
      expect(codigos, 'el último intento queda bloqueado').to.include(429);
      expect(codigos.slice(0, -1), 'antes del bloqueo solo hay 401').to.satisfy(c => c.every(s => s === 401));
      expect(codigos.length, 'bloqueo a más tardar en el sexto intento').to.be.at.most(MAX_INTENTOS);
    });
  });

  it('mientras dura el bloqueo, ni siquiera la contraseña correcta permite entrar desde esa IP', () => {
    intentar('/auth/sign_in', { email: Cypress.env('adminEmail'), password: Cypress.env('adminPassword') }).then(status => {
      expect(status, 'la IP sigue bloqueada aunque la contraseña sea correcta').to.eq(429);
    });
  });

  it('bloquea con 429 las solicitudes repetidas de restablecer contraseña', () => {
    atacar('/auth/password', { email: `fuerza.bruta.${Date.now()}@chatwoot.test` }).then(codigos => {
      cy.log(`Códigos: ${codigos.join(', ')}`);
      expect(codigos).to.include(429);
    });
  });
});
