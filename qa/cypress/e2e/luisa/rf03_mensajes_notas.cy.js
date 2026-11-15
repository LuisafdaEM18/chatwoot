// RF-03 Envío de mensajes y notas privadas — Luisa Fernanda Espinal Montoya
// Casos CP-03-01 a CP-03-03 de la matriz de trazabilidad.
// La bandeja de pruebas es de tipo API (no tiene widget), así que "lo que ve el cliente" se
// comprueba con el campo private del mensaje: los mensajes privados nunca se envían al canal.
describe('RF-03 Envío de mensajes y notas privadas', () => {
  let conversationId;

  const expectLastMessage = assertion =>
    cy.apiShould(`/conversations/${conversationId}/messages`, body =>
      assertion(body.payload.at(-1))
    );

  beforeEach(() => {
    cy.loginAs('admin');
    cy.createConversation({ message: '¿Tienen envíos a Medellín?' }).then(
      ({ conversation }) => {
        conversationId = conversation.id;
      }
    );
    cy.then(() => cy.openConversation(conversationId));
  });

  it('CP-03-01 (exitoso): envía una respuesta pública al cliente', () => {
    cy.get('.ProseMirror').type('Sí, enviamos a todo el país');
    cy.contains('button', 'Send').click();

    cy.get('.ProseMirror').should('not.contain', 'Sí, enviamos a todo el país');
    cy.contains('Sí, enviamos a todo el país').should('be.visible');
    expectLastMessage(message => {
      expect(message.content).to.eq('Sí, enviamos a todo el país');
      expect(message.private).to.eq(false);
      expect(message.message_type).to.eq(1);
    });
  });

  it('CP-03-02 (alternativo): envía una nota privada que solo ven los agentes', () => {
    cy.contains('button', 'Private Note').click();
    cy.get('.ProseMirror').type('Cliente frecuente, ofrecer descuento');
    cy.contains('button', 'Add Note').click();

    cy.get('.ProseMirror').should('not.contain', 'Cliente frecuente');
    cy.contains('Cliente frecuente, ofrecer descuento').should('be.visible');
    expectLastMessage(message => {
      expect(message.content).to.eq('Cliente frecuente, ofrecer descuento');
      expect(message.private).to.eq(true);
    });
  });

  it('CP-03-03 (error): un mensaje con HTML y JavaScript se muestra como texto y no se ejecuta', () => {
    const payload =
      '<img src=x onerror="window.__xss=true"><script>window.__xss=true</script>';

    cy.api('POST', `/conversations/${conversationId}/messages`, {
      content: payload,
      message_type: 'incoming',
    });
    cy.reload();
    cy.get('.ProseMirror', { timeout: 20000 }).should('be.visible');

    cy.contains('onerror').should('exist');
    cy.get('img[src="x"]').should('not.exist');
    cy.window().its('__xss').should('be.undefined');
  });
});
