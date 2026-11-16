// [Juan Pablo Berrío] Seguridad — RF-11 a RF-15 (OWASP Top 10 2021)
// Ver qa/docs/criterio13_seguridad.md.
const INTEGRANTE = 'Juan Pablo Berrío';
const XSS = '<img src=x onerror="window.__xss=1">';

describe(`[${INTEGRANTE}] Seguridad`, () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  context('A01 Control de acceso', () => {
    it('RF-12: una macro global creada por un agente queda como personal', () => {
      cy.api('POST', '/macros', { name: `Global agente ${Date.now()}`, visibility: 'global', actions: [{ action_name: 'add_label', action_params: ['qa'] }] }, 'agent').then(
        ({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.payload.visibility).to.eq('personal');
          cy.api('DELETE', `/macros/${body.payload.id}`, null, 'agent');
        }
      );
    });

    it('RF-12: un usuario de otra cuenta no puede ver las macros de la cuenta', () => {
      cy.api('GET', '/macros', null, 'other').its('status').should('eq', 401);
    });

    it('RF-13 y RF-14: un agente no puede crear reglas de automatización ni equipos', () => {
      cy.api(
        'POST',
        '/automation_rules',
        {
          name: 'Intrusa',
          event_name: 'message_created',
          conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: null }],
          actions: [{ action_name: 'add_label', action_params: ['qa'] }],
        },
        'agent'
      )
        .its('status')
        .should('eq', 401);
      cy.api('POST', '/teams', { name: `intruso-${Date.now()}` }, 'agent').its('status').should('eq', 401);
    });

    it('RF-14: no se puede agregar a un equipo un usuario de otra cuenta', () => {
      cy.api('POST', '/teams', { name: `qa-seguridad-${Date.now()}` }).then(({ body: team }) => {
        cy.api('POST', `/teams/${team.id}/team_members`, { user_ids: [Cypress.env('otherUserId')] }).then(({ status, body }) => {
          expect(status).to.eq(401);
          expect(body.error).to.eq('Invalid User IDs');
        });
        cy.api('GET', `/teams/${team.id}/team_members`).its('body').should('have.length', 0);
        cy.api('DELETE', `/teams/${team.id}`);
      });
    });

    it('RF-15: un agente no puede consultar los reportes de la cuenta', () => {
      const until = Math.floor(Date.now() / 1000);
      cy.api('GET', `/api/v2/accounts/${Cypress.env('accountId')}/reports/summary?type=account&since=${until - 604800}&until=${until}`, null, 'agent')
        .its('status')
        .should('eq', 401);
    });
  });

  context('A03 Inyección', () => {
    it('RF-11: una respuesta predefinida con HTML se muestra como texto en la configuración', () => {
      const shortCode = `xss-${Date.now()}`;
      cy.api('POST', '/canned_responses', { canned_response: { short_code: shortCode, content: `Respuesta ${XSS}` } });
      cy.visitAccount('/settings/canned-response/list');
      cy.get('input[placeholder="Search canned responses..."]').type(shortCode);

      cy.contains('onerror').should('exist');
      cy.get('img[src="x"]').should('not.exist');
      cy.window().its('__xss').should('be.undefined');
    });

    it('RF-12: el nombre de una macro con HTML se muestra como texto en la lista', () => {
      cy.api('POST', '/macros', { name: `Macro ${XSS}`, visibility: 'global', actions: [{ action_name: 'add_label', action_params: ['qa'] }] }).then(({ body }) => {
        cy.visitAccount('/settings/macros');

        cy.contains('onerror').scrollIntoView().should('exist');
        cy.get('img[src="x"]').should('not.exist');
        cy.window().its('__xss').should('be.undefined');
        cy.api('DELETE', `/macros/${body.payload.id}`);
      });
    });

    it('RF-15: una métrica maliciosa en los reportes no ejecuta métodos del servidor (falso positivo de Brakeman)', () => {
      const until = Math.floor(Date.now() / 1000);
      const range = `type=account&since=${until - 604800}&until=${until}`;
      ['destroy', 'instance_eval'].forEach(metric => {
        cy.api('GET', `/api/v2/accounts/${Cypress.env('accountId')}/reports?metric=${metric}&${range}`).then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body).to.deep.eq({});
        });
      });
      cy.api('GET', `/api/v2/accounts/${Cypress.env('accountId')}/reports/outgoing_messages_count?group_by=destroy&${range}`)
        .its('status')
        .should('eq', 422);
    });
  });

  context('A10 Falsificación de peticiones del lado del servidor (SSRF)', () => {
    it('RF-13: una regla acepta un webhook a una dirección interna al guardarla (hallazgo S-02; se bloquea al ejecutarse)', () => {
      cy.api('POST', '/automation_rules', {
        name: `SSRF ${Date.now()}`,
        event_name: 'message_created',
        conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: null }],
        actions: [{ action_name: 'send_webhook_event', action_params: ['http://169.254.169.254/latest/meta-data/'] }],
      }).then(({ status, body }) => {
        // Se documenta el comportamiento actual: la URL no se valida al guardar.
        expect(status).to.eq(200);
        cy.api('DELETE', `/automation_rules/${body.id}`);
      });
    });
  });
});
