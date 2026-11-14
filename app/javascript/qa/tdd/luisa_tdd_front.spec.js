// TDD del frontend — Luisa Fernanda Espinal Montoya (RF-01 Cambio de estado)
// Defecto D-07: si la API de cambio de estado falla (por ejemplo el 422 de D-01), la acción
// toggleStatus se tragaba el error. Los componentes que la llaman mostraban "Estado de la
// conversación cambiado" aunque no cambió, y ResolveAction dejaba el botón cargando.
//
// Cada prueba sigue AAA (Arrange, Act, Assert). Dobles de prueba:
// - ConversationApi es un stub (respuestas programadas con mockResolvedValue / mockRejectedValue).
// - commit es un mock: se verifica qué mutaciones recibió y cuáles no.
import ConversationApi from 'dashboard/api/inbox/conversation';
import conversationActions from 'dashboard/store/modules/conversations/actions';
import types from 'dashboard/store/mutation-types';

vi.mock('dashboard/api/inbox/conversation', () => ({
  default: { toggleStatus: vi.fn(), updateCustomAttributes: vi.fn() },
}));

describe('toggleStatus [RF-01 TDD front, D-07]', () => {
  const commit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('propaga el error de la API para que la interfaz no anuncie un cambio que no ocurrió', async () => {
    // Arrange
    const apiError = {
      response: {
        status: 422,
        data: { message: 'Status is not included in the list' },
      },
    };
    ConversationApi.toggleStatus.mockRejectedValue(apiError);

    // Act
    const result = conversationActions.toggleStatus(
      { commit },
      { conversationId: 7, status: 'cerrada' }
    );

    // Assert
    await expect(result).rejects.toBe(apiError);
    expect(commit).not.toHaveBeenCalledWith(
      types.CHANGE_CONVERSATION_STATUS,
      expect.anything()
    );
  });

  it('con respuesta exitosa sigue actualizando el estado en el store', async () => {
    // Arrange
    ConversationApi.toggleStatus.mockResolvedValue({
      data: { payload: { current_status: 'resolved', snoozed_until: null } },
    });

    // Act
    await conversationActions.toggleStatus(
      { commit },
      { conversationId: 7, status: 'resolved' }
    );

    // Assert
    expect(commit).toHaveBeenCalledExactlyOnceWith(
      types.CHANGE_CONVERSATION_STATUS,
      { conversationId: 7, status: 'resolved', snoozedUntil: null }
    );
  });
});
