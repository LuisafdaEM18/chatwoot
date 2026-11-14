// Caja blanca del frontend — Juan Pablo Berrío Díaz (RF-11 a RF-15)
import CannedResponseAPI from 'dashboard/api/cannedResponse';
import TeamsAPI from 'dashboard/api/teams';
import cannedResponseModule from 'dashboard/store/modules/cannedResponse';
import { actions as teamActions } from 'dashboard/store/modules/teams/actions';
import {
  SET_TEAM_ITEM,
  SET_TEAM_UI_FLAG,
} from 'dashboard/store/modules/teams/types';
import { getFileName } from 'dashboard/routes/dashboard/settings/macros/macroHelper';
import { formatDelay } from 'dashboard/helper/automationHelper';
import { clampDataBetweenTimeline } from 'shared/helpers/ReportsDataHelper';
import types from 'dashboard/store/mutation-types';

vi.mock('dashboard/api/cannedResponse', () => ({
  default: { validateCacheKey: vi.fn(), refetchAndCommit: vi.fn() },
}));
vi.mock('dashboard/api/teams', () => ({ default: { create: vi.fn() } }));

const commit = vi.fn();

// RF-11 · cannedResponse.js revalidateCannedResponses · D1 la caché no es válida, D2 catch · V(G) = 3
describe('revalidateCannedResponses [RF-11 caja blanca front]', () => {
  const { revalidateCannedResponses } = cannedResponseModule.actions;

  it('camino 1 (D1=F, D2=F): con la caché vigente no vuelve a pedir las respuestas', async () => {
    CannedResponseAPI.validateCacheKey.mockResolvedValue(true);

    await revalidateCannedResponses({ commit }, { newKey: 'k1' });

    expect(CannedResponseAPI.refetchAndCommit).not.toHaveBeenCalled();
    expect(commit).not.toHaveBeenCalled();
  });

  it('camino 2 (D1=V, D2=F): con la caché vencida vuelve a pedir y guarda las respuestas', async () => {
    CannedResponseAPI.validateCacheKey.mockResolvedValue(false);
    CannedResponseAPI.refetchAndCommit.mockResolvedValue({
      data: [{ short_code: 'qa-saludo' }],
    });

    await revalidateCannedResponses({ commit }, { newKey: 'k2' });

    expect(commit).toHaveBeenCalledWith(types.SET_CANNED, [
      { short_code: 'qa-saludo' },
    ]);
  });

  it('camino 3 (D2=V): si la validación falla ignora el error', async () => {
    CannedResponseAPI.validateCacheKey.mockRejectedValue(new Error('500'));

    await expect(
      revalidateCannedResponses({ commit }, { newKey: 'k3' })
    ).resolves.toBeUndefined();
    expect(commit).not.toHaveBeenCalled();
  });
});

// RF-12 · macros/macroHelper.js getFileName · D1 !id, D2 !files, D3 send_attachment, D4 archivo encontrado · V(G) = 5
describe('macroHelper getFileName [RF-12 caja blanca front]', () => {
  const files = [{ blob_id: 10, filename: 'guia.pdf' }];

  it("camino 1 (D1=V): sin id devuelve ''", () => {
    expect(getFileName(null, 'send_attachment', files)).toBe('');
  });

  it("camino 2 (D1=F, D2=V): sin archivos devuelve ''", () => {
    expect(getFileName(10, 'send_attachment', null)).toBe('');
  });

  it("camino 3 (D3=F): con otra acción devuelve ''", () => {
    expect(getFileName(10, 'add_label', files)).toBe('');
  });

  it("camino 4 (D3=V, D4=F): si el adjunto no existe devuelve ''", () => {
    expect(getFileName(99, 'send_attachment', files)).toBe('');
  });

  it('camino 5 (D3=V, D4=V): devuelve el nombre del adjunto', () => {
    expect(getFileName(10, 'send_attachment', files)).toBe('guia.pdf');
  });
});

// RF-13 · automationHelper.js formatDelay · D1 múltiplo de 1440, D2 múltiplo de 60 · V(G) = 3
describe('automationHelper formatDelay [RF-13 caja blanca front]', () => {
  it('camino 1 (D1=V): 1440 minutos se muestran como 1d', () => {
    expect(formatDelay(1440)).toBe('1d');
  });

  it('camino 2 (D1=F, D2=V): 60 minutos se muestran como 1h', () => {
    expect(formatDelay(60)).toBe('1h');
  });

  it('camino 3 (D1=F, D2=F): 10 minutos se muestran como 10m', () => {
    expect(formatDelay(10)).toBe('10m');
  });

  it('valor límite: 43 200 minutos (máximo permitido) se muestran como 30d', () => {
    expect(formatDelay(43_200)).toBe('30d');
  });
});

// RF-14 · teams/actions.js create · D1 catch · V(G) = 2
describe('teams create [RF-14 caja blanca front]', () => {
  it('camino 1 (D1=F): guarda y devuelve el equipo creado', async () => {
    TeamsAPI.create.mockResolvedValue({ data: { id: 1, name: 'qa-soporte' } });

    const team = await teamActions.create({ commit }, { name: 'QA-Soporte' });

    expect(team).toEqual({ id: 1, name: 'qa-soporte' });
    expect(commit.mock.calls).toEqual([
      [SET_TEAM_UI_FLAG, { isCreating: true }],
      [SET_TEAM_ITEM, { id: 1, name: 'qa-soporte' }],
      [SET_TEAM_UI_FLAG, { isCreating: false }],
    ]);
  });

  it('camino 2 (D1=V): relanza el error y apaga el indicador', async () => {
    TeamsAPI.create.mockRejectedValue(new Error('422'));

    await expect(teamActions.create({ commit }, { name: '' })).rejects.toThrow(
      '422'
    );
    expect(commit).toHaveBeenLastCalledWith(SET_TEAM_UI_FLAG, {
      isCreating: false,
    });
  });
});

// RF-15 · ReportsDataHelper.js clampDataBetweenTimeline
// D1 from undefined, D2 to undefined, D3 quedan elementos, D4 from undefined (filtro),
// D5 timestamp - from >= 0, D6 to undefined (filtro), D7 to - timestamp > 0, D8 conservar elemento · V(G) = 9
describe('clampDataBetweenTimeline [RF-15 caja blanca front]', () => {
  const data = [
    { timestamp: 100, value: 1 },
    { timestamp: 200, value: 2 },
    { timestamp: 300, value: 3 },
  ];

  it('camino 1 (D1=V, D2=V): sin límites devuelve los mismos datos', () => {
    expect(clampDataBetweenTimeline(data, undefined, undefined)).toBe(data);
  });

  it('camino 2 (D1=F, D3=F): con datos vacíos devuelve un arreglo vacío', () => {
    expect(clampDataBetweenTimeline([], 100, 300)).toEqual([]);
  });

  it('camino 3 (D1=V, D2=F, D4=V, D7=V): solo con fin conserva lo anterior al fin', () => {
    expect(
      clampDataBetweenTimeline(data, undefined, 250).map(d => d.timestamp)
    ).toEqual([100, 200]);
  });

  it('camino 4 (D5=V en el borde): un dato justo en el inicio se conserva', () => {
    expect(
      clampDataBetweenTimeline(data, 200, 1000).map(d => d.timestamp)
    ).toEqual([200, 300]);
  });

  it('camino 5 (D5=F, D8=F): un dato anterior al inicio se descarta', () => {
    expect(
      clampDataBetweenTimeline(data, 150, 1000).map(d => d.timestamp)
    ).not.toContain(100);
  });

  it('camino 6 (D7=F en el borde): un dato justo en el fin se descarta', () => {
    expect(
      clampDataBetweenTimeline(data, 0, 300).map(d => d.timestamp)
    ).toEqual([100, 200]);
  });

  it('camino 7 (D1=F, D6=V): solo con inicio conserva lo posterior al inicio', () => {
    expect(
      clampDataBetweenTimeline(data, 200, undefined).map(d => d.timestamp)
    ).toEqual([200, 300]);
  });
});
