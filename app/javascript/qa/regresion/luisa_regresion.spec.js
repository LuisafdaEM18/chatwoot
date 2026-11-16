// [Regresión] Luisa Fernanda Espinal Montoya — RF-01 a RF-05 (frontend)
// Verifican que los flujos que ya funcionaban se conservan después de corregir D-07
// (toggleStatus relanza el error): el camino exitoso no debe cambiar.
import ConversationApi from 'dashboard/api/inbox/conversation';
import MessageApi from 'dashboard/api/inbox/message';
import LabelsAPI from 'dashboard/api/labels';
import conversationActions from 'dashboard/store/modules/conversations/actions';
import { actions as labelActions } from 'dashboard/store/modules/labels';
import { actions as searchActions } from 'dashboard/store/modules/conversationSearch';
import types from 'dashboard/store/mutation-types';

vi.mock('dashboard/api/inbox/conversation', () => ({
  default: {
    toggleStatus: vi.fn(),
    updateCustomAttributes: vi.fn(),
    assignAgent: vi.fn(),
    assignTeam: vi.fn(),
  },
}));
vi.mock('dashboard/api/inbox/message', () => ({
  default: { create: vi.fn(), retry: vi.fn() },
}));
vi.mock('dashboard/api/labels', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/helper/AnalyticsHelper', () => ({
  default: { track: vi.fn() },
}));

const commit = vi.fn();
const dispatch = vi.fn();

describe('[Regresión] RF-01 — el cambio de estado exitoso se sigue reflejando en el store', () => {
  it('resolver una conversación guarda el estado que devuelve la API', async () => {
    ConversationApi.toggleStatus.mockResolvedValue({
      data: { payload: { current_status: 'resolved', snoozed_until: null } },
    });

    await conversationActions.toggleStatus(
      { commit },
      { conversationId: 1, status: 'resolved' }
    );

    expect(commit).toHaveBeenCalledWith(types.CHANGE_CONVERSATION_STATUS, {
      conversationId: 1,
      status: 'resolved',
      snoozedUntil: null,
    });
  });

  it('posponer guarda también la fecha de reactivación', async () => {
    ConversationApi.toggleStatus.mockResolvedValue({
      data: {
        payload: { current_status: 'snoozed', snoozed_until: 1800000000 },
      },
    });

    await conversationActions.toggleStatus(
      { commit },
      { conversationId: 1, status: 'snoozed', snoozedUntil: 1800000000 }
    );

    expect(ConversationApi.toggleStatus).toHaveBeenCalledWith({
      conversationId: 1,
      status: 'snoozed',
      snoozedUntil: 1800000000,
    });
    expect(commit).toHaveBeenCalledWith(types.CHANGE_CONVERSATION_STATUS, {
      conversationId: 1,
      status: 'snoozed',
      snoozedUntil: 1800000000,
    });
  });
});

describe('[Regresión] RF-02 — asignar agente y equipo sigue actualizando la conversación', () => {
  it('asignar un agente despacha setCurrentChatAssignee con la respuesta', async () => {
    ConversationApi.assignAgent.mockResolvedValue({
      data: { id: 7, name: 'QA Agente' },
    });

    await conversationActions.assignAgent(
      { dispatch },
      { conversationId: 1, agentId: 7 }
    );

    expect(dispatch).toHaveBeenCalledWith(
      'setCurrentChatAssignee',
      expect.objectContaining({ assignee: { id: 7, name: 'QA Agente' } })
    );
  });

  it('asignar un equipo despacha setCurrentChatTeam con la respuesta', async () => {
    ConversationApi.assignTeam.mockResolvedValue({
      data: { id: 3, name: 'qa-pagos' },
    });

    await conversationActions.assignTeam(
      { dispatch },
      { conversationId: 1, teamId: 3 }
    );

    expect(dispatch).toHaveBeenCalledWith('setCurrentChatTeam', {
      team: { id: 3, name: 'qa-pagos' },
      conversationId: 1,
    });
  });
});

describe('[Regresión] RF-03 — enviar un mensaje lo sigue marcando como enviado', () => {
  it('un mensaje nuevo pasa de "en progreso" a "enviado"', async () => {
    const pending = {
      id: 'tmp',
      conversation_id: 1,
      content: 'Hola',
      status: 'progress',
    };
    MessageApi.create.mockResolvedValue({ data: { id: 10, content: 'Hola' } });

    await conversationActions.sendMessageWithData({ commit }, pending);

    expect(
      commit.mock.calls.map(([type, payload]) => [type, payload.status])
    ).toEqual([
      [types.ADD_MESSAGE, 'progress'],
      [types.ADD_MESSAGE, 'sent'],
      [types.ADD_CONVERSATION_ATTACHMENTS, 'sent'],
    ]);
  });
});

describe('[Regresión] RF-04 — crear una etiqueta la sigue agregando al store', () => {
  it('agrega la etiqueta y apaga el indicador de carga', async () => {
    LabelsAPI.create.mockResolvedValue({
      data: { id: 1, title: 'qa-regresion' },
    });

    await labelActions.create({ commit }, { title: 'qa-regresion' });

    expect(commit).toHaveBeenCalledWith(types.ADD_LABEL, {
      id: 1,
      title: 'qa-regresion',
    });
    expect(commit).toHaveBeenLastCalledWith(types.SET_LABEL_UI_FLAG, {
      isCreating: false,
    });
  });
});

describe('[Regresión] RF-05 — la búsqueda global sigue consultando los cuatro grupos', () => {
  it('busca contactos, conversaciones, mensajes y artículos', async () => {
    dispatch.mockResolvedValue();

    await searchActions.fullSearch({ commit, dispatch }, { q: 'factura' });

    expect(dispatch.mock.calls.map(([action]) => action)).toEqual([
      'contactSearch',
      'conversationSearch',
      'messageSearch',
      'articleSearch',
    ]);
  });
});
