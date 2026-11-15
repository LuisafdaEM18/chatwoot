// RF-13 Reglas de automatización — Juan Pablo Berrío Díaz
// Casos CP-13-01 a CP-13-03 de la matriz de trazabilidad.
// Las reglas se ejecutan en segundo plano (Sidekiq), por eso el resultado se consulta con apiShould.
describe('RF-13 Reglas de automatización', () => {
  const rule = (name, label, extra = {}) => ({
    name,
    description: 'Etiqueta las conversaciones que hablan de facturas',
    event_name: 'message_created',
    active: true,
    conditions: [
      {
        attribute_key: 'content',
        filter_operator: 'contains',
        values: ['factura'],
        query_operator: null,
      },
    ],
    actions: [{ action_name: 'add_label', action_params: [label] }],
    ...extra,
  });

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-13-01 (exitoso): la regla etiqueta la conversación cuando llega un mensaje con "factura"', () => {
    const stamp = Date.now();
    const label = `qa-factura-${stamp}`;
    const name = `Etiquetar facturas ${stamp}`;
    cy.api('POST', '/labels', { title: label });
    cy.api('POST', '/automation_rules', rule(name, label))
      .its('status')
      .should('eq', 200);

    cy.visitAccount('/settings/automation/list');
    cy.contains(name).scrollIntoView().should('be.visible');

    cy.createConversation({ message: 'Necesito una copia de mi factura' }).then(
      ({ conversation }) => {
        cy.apiShould(
          `/conversations/${conversation.id}/labels`,
          body => expect(body.payload).to.include(label),
          'admin',
          40
        );
      }
    );
  });

  it('CP-13-02 (alternativo): una regla desactivada desde la interfaz no se ejecuta', () => {
    const stamp = Date.now();
    const label = `qa-inactiva-${stamp}`;
    const name = `Regla inactiva ${stamp}`;
    cy.api('POST', '/labels', { title: label });
    cy.api('POST', '/automation_rules', rule(name, label)).then(({ body }) => {
      const ruleId = body.payload?.id ?? body.id;

      cy.visitAccount('/settings/automation/list');
      cy.contains('tr', name).find('button[role="switch"]').click();
      cy.contains('Deactivate Automation Rule').should('be.visible');
      cy.contains('button', /^Yes$/).click();
      cy.apiShould(`/automation_rules/${ruleId}`, rule => {
        expect((rule.payload ?? rule).active).to.eq(false);
      });
    });

    cy.createConversation({ message: 'Adjunto la factura del mes' }).then(
      ({ conversation }) => {
        // Se da tiempo a Sidekiq (igual que en CP-13-01) y se confirma que no llegó la etiqueta.
        cy.wait(8000);
        cy.api('GET', `/conversations/${conversation.id}/labels`)
          .its('body.payload')
          .should('not.include', label);
      }
    );
  });

  // execution_delay requiere la función delayed_automations, que activa create_qa_data.rb.
  it('CP-13-03 (error): rechaza una regla con retraso de 9 o 43 201 minutos y acepta 10', () => {
    const delayedRule = delay =>
      rule(`Retraso ${delay} ${Date.now()}`, 'qa', {
        conditions: [
          {
            attribute_key: 'message_type',
            filter_operator: 'equal_to',
            values: ['incoming'],
            query_operator: null,
          },
        ],
        execution_delay: delay,
      });

    [9, 43201].forEach(delay => {
      cy.api('POST', '/automation_rules', delayedRule(delay))
        .its('status')
        .should('eq', 422);
    });
    cy.api('POST', '/automation_rules', delayedRule(10))
      .its('status')
      .should('eq', 200);
  });
});
