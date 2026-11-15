// RF-12 Macros — Juan Pablo Berrío Díaz
// Casos CP-12-01 a CP-12-03 de la matriz de trazabilidad.
describe('RF-12 Macros', () => {
  const macro = (name, visibility, actions) => ({ name, visibility, actions });

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-12-01 (exitoso): ejecuta una macro que etiqueta, asigna un equipo y resuelve', () => {
    const stamp = Date.now();
    const label = `qa-macro-${stamp}`;
    const team = `qa-macro-equipo-${stamp}`;
    const name = `Cerrar con etiqueta ${stamp}`;
    cy.api('POST', '/labels', { title: label });

    cy.api('POST', '/teams', { name: team }).then(({ body: createdTeam }) => {
      cy.api(
        'POST',
        '/macros',
        macro(name, 'global', [
          { action_name: 'add_label', action_params: [label] },
          { action_name: 'assign_team', action_params: [createdTeam.id] },
          { action_name: 'resolve_conversation', action_params: null },
        ])
      )
        .its('status')
        .should('eq', 200);
    });

    cy.createConversation({ message: 'Ya resolvieron mi caso' }).then(
      ({ conversation }) => {
        cy.openConversation(conversation.id);
        cy.openConversationActions();
        // La sección Macros recuerda si quedó abierta. Abierta, su botón tiene al lado el contenido;
        // cerrada, no tiene hermano. Solo se hace clic si está cerrada.
        cy.contains('button h5', /^Macros$/)
          .closest('button')
          .then($section => {
            if (!$section.next().length) cy.wrap($section).click();
          });
        // El botón de ejecutar solo aparece al pasar el mouse por la fila de la macro.
        cy.contains(name)
          .parent()
          .find('button .i-lucide-play')
          .first()
          .click({ force: true });

        cy.contains('Macro executed successfully').should('be.visible');
        cy.apiShould(`/conversations/${conversation.id}`, body => {
          expect(body.status).to.eq('resolved');
          expect(body.labels).to.include(label);
          expect(body.meta.team.name).to.eq(team);
        });
      }
    );
  });

  it('CP-12-02 (alternativo): una macro personal no la ve otro agente; la global sí', () => {
    const stamp = Date.now();
    const personal = `Personal admin ${stamp}`;
    const global = `Global ${stamp}`;
    const actions = [{ action_name: 'add_label', action_params: ['qa'] }];
    cy.api('POST', '/macros', macro(personal, 'personal', actions));
    cy.api('POST', '/macros', macro(global, 'global', actions));

    cy.api('GET', '/macros', null, 'agent')
      .its('body.payload')
      .then(macros => {
        const names = macros.map(item => item.name);
        expect(names).to.include(global);
        expect(names).not.to.include(personal);
      });
  });

  it('CP-12-03 (error): rechaza por API una macro con una acción que no existe', () => {
    cy.api(
      'POST',
      '/macros',
      macro(`Inválida ${Date.now()}`, 'global', [
        { action_name: 'borrar_todo', action_params: [] },
      ])
    ).then(response => {
      expect(response.status).to.eq(422);
      expect(response.body.error.actions[0]).to.match(
        /borrar_todo not supported/
      );
    });
  });
});
