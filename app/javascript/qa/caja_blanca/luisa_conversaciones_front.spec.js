// Caja blanca del frontend — Luisa Fernanda Espinal Montoya (RF-01 a RF-05)
// Cada describe corresponde a una función; cada it, a un camino independiente del grafo.
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

// RF-01 · conversations/actions.js toggleStatus · D1 customAttributes, D2 catch · V(G) = 3
describe('toggleStatus [RF-01 caja blanca front]', () => {
  const apiResponse = {
    data: { payload: { current_status: 'resolved', snoozed_until: null } },
  };

  it('camino 1 (D1=F, D2=F): sin atributos solo cambia el estado', async () => {
    ConversationApi.toggleStatus.mockResolvedValue(apiResponse);

    await conversationActions.toggleStatus(
      { commit },
      { conversationId: 1, status: 'resolved' }
    );

    expect(ConversationApi.updateCustomAttributes).not.toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith(types.CHANGE_CONVERSATION_STATUS, {
      conversationId: 1,
      status: 'resolved',
      snoozedUntil: null,
    });
  });

  it('camino 2 (D1=V, D2=F): primero guarda los atributos y luego cambia el estado', async () => {
    ConversationApi.updateCustomAttributes.mockResolvedValue({});
    ConversationApi.toggleStatus.mockResolvedValue(apiResponse);

    await conversationActions.toggleStatus(
      { commit },
      {
        conversationId: 1,
        status: 'resolved',
        customAttributes: { motivo: 'qa' },
      }
    );

    expect(commit.mock.calls.map(call => call[0])).toEqual([
      types.UPDATE_CONVERSATION_CUSTOM_ATTRIBUTES,
      types.CHANGE_CONVERSATION_STATUS,
    ]);
  });

  it('camino 3 (D2=V): si la API falla no modifica el estado ni lanza error', async () => {
    ConversationApi.toggleStatus.mockRejectedValue(new Error('500'));

    await expect(
      conversationActions.toggleStatus(
        { commit },
        { conversationId: 1, status: 'resolved' }
      )
    ).resolves.toBeUndefined();
    expect(commit).not.toHaveBeenCalled();
  });
});

// RF-02 · conversations/actions.js assignAgent · D1 catch · V(G) = 2
describe('assignAgent [RF-02 caja blanca front]', () => {
  it('camino 1 (D1=F): actualiza el agente asignado con la respuesta de la API', async () => {
    ConversationApi.assignAgent.mockResolvedValue({
      data: { id: 7, name: 'QA Agente' },
    });

    await conversationActions.assignAgent(
      { dispatch },
      { conversationId: 1, agentId: 7 }
    );

    expect(dispatch).toHaveBeenCalledWith('setCurrentChatAssignee', {
      conversationId: 1,
      assignee: { id: 7, name: 'QA Agente' },
      assigneeType: undefined,
    });
  });

  it('camino 2 (D1=V): si la API falla no cambia el agente', async () => {
    ConversationApi.assignAgent.mockRejectedValue(new Error('500'));

    await conversationActions.assignAgent(
      { dispatch },
      { conversationId: 1, agentId: 7 }
    );

    expect(dispatch).not.toHaveBeenCalled();
  });
});

// RF-03 · conversations/actions.js sendMessageWithData
// D1 falló con error externo (reintento), D2 catch, D3 error.response · V(G) = 4
describe('sendMessageWithData [RF-03 caja blanca front]', () => {
  const pending = {
    id: 'tmp-1',
    conversation_id: 1,
    content: 'Hola',
    status: 'progress',
  };

  it('camino 1 (D1=F, D2=F): crea el mensaje y lo marca como enviado', async () => {
    MessageApi.create.mockResolvedValue({ data: { id: 10, content: 'Hola' } });

    await conversationActions.sendMessageWithData({ commit }, pending);

    expect(MessageApi.create).toHaveBeenCalledWith(pending);
    expect(commit).toHaveBeenCalledWith(types.ADD_MESSAGE, {
      id: 10,
      content: 'Hola',
      status: 'sent',
    });
  });

  it('camino 2 (D1=V, D2=F): un mensaje fallido con error externo se reintenta', async () => {
    const failed = {
      ...pending,
      status: 'failed',
      content_attributes: { external_error: 'bloqueado' },
    };
    MessageApi.retry.mockResolvedValue({ data: { id: 10 } });

    await conversationActions.sendMessageWithData({ commit }, failed);

    expect(MessageApi.retry).toHaveBeenCalledWith(1, 'tmp-1');
    expect(MessageApi.create).not.toHaveBeenCalled();
  });

  it('camino 3 (D2=V, D3=V): con error de la API guarda el mensaje del servidor y relanza', async () => {
    const error = { response: { data: { error: 'Mensaje demasiado largo' } } };
    MessageApi.create.mockRejectedValue(error);

    await expect(
      conversationActions.sendMessageWithData({ commit }, pending)
    ).rejects.toBe(error);
    expect(commit).toHaveBeenLastCalledWith(types.ADD_MESSAGE, {
      ...pending,
      meta: { error: 'Mensaje demasiado largo' },
      status: 'failed',
    });
  });

  it('camino 4 (D2=V, D3=F): con error de red marca el mensaje como fallido sin texto', async () => {
    MessageApi.create.mockRejectedValue(new Error('Network Error'));

    await expect(
      conversationActions.sendMessageWithData({ commit }, pending)
    ).rejects.toThrow('Network Error');
    expect(commit).toHaveBeenLastCalledWith(types.ADD_MESSAGE, {
      ...pending,
      meta: { error: undefined },
      status: 'failed',
    });
  });
});

// RF-04 · labels.js create · D1 catch · V(G) = 2
describe('labels create [RF-04 caja blanca front]', () => {
  it('camino 1 (D1=F): agrega la etiqueta y apaga el indicador de carga', async () => {
    LabelsAPI.create.mockResolvedValue({
      data: { id: 1, title: 'qa-soporte' },
    });

    await labelActions.create({ commit }, { title: 'qa-soporte' });

    expect(commit.mock.calls).toEqual([
      [types.SET_LABEL_UI_FLAG, { isCreating: true }],
      [types.ADD_LABEL, { id: 1, title: 'qa-soporte' }],
      [types.SET_LABEL_UI_FLAG, { isCreating: false }],
    ]);
  });

  it('camino 2 (D1=V): lanza el mensaje del servidor y también apaga el indicador', async () => {
    LabelsAPI.create.mockRejectedValue({
      response: { data: { message: 'Title has already been taken' } },
    });

    await expect(
      labelActions.create({ commit }, { title: 'qa' })
    ).rejects.toThrow('Title has already been taken');
    expect(commit).toHaveBeenLastCalledWith(types.SET_LABEL_UI_FLAG, {
      isCreating: false,
    });
  });
});

// RF-05 · conversationSearch.js fullSearch · D1 !q, D2 sin filtros, D3 catch · V(G) = 4
describe('fullSearch [RF-05 caja blanca front]', () => {
  it('camino 1 (D1=V, D2=V): sin texto ni filtros no busca', async () => {
    await searchActions.fullSearch({ commit, dispatch }, { q: '' });

    expect(dispatch).not.toHaveBeenCalled();
    expect(commit).not.toHaveBeenCalled();
  });

  it('camino 2 (D1=V, D2=F): sin texto pero con filtros lanza las cuatro búsquedas', async () => {
    dispatch.mockResolvedValue();

    await searchActions.fullSearch({ commit, dispatch }, { q: '', since: 1 });

    expect(dispatch).toHaveBeenCalledTimes(4);
  });

  it('camino 3 (D1=F, D3=F): con texto busca y marca la búsqueda como completa', async () => {
    dispatch.mockResolvedValue();

    await searchActions.fullSearch({ commit, dispatch }, { q: 'qa' });

    expect(dispatch).toHaveBeenCalledWith('contactSearch', { q: 'qa' });
    expect(commit).toHaveBeenLastCalledWith(types.FULL_SEARCH_SET_UI_FLAG, {
      isFetching: false,
      isSearchCompleted: true,
    });
  });

  it('camino 4 (D3=V): si una búsqueda falla igual termina el estado de carga', async () => {
    dispatch.mockRejectedValue(new Error('500'));

    await searchActions.fullSearch({ commit, dispatch }, { q: 'qa' });

    expect(commit).toHaveBeenLastCalledWith(types.FULL_SEARCH_SET_UI_FLAG, {
      isFetching: false,
      isSearchCompleted: true,
    });
  });
});
