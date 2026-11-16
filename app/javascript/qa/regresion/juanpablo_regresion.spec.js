// [Regresión] Juan Pablo Berrío Díaz — RF-11 a RF-15 (frontend)
// Verifican que los flujos que ya funcionaban se conservan después de M-01 (el error al crear
// un equipo lleva el mensaje del servidor): crear un equipo con éxito no debe cambiar.
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

describe('[Regresión] RF-11 — las respuestas predefinidas se siguen recargando cuando cambia la caché', () => {
  it('con una clave nueva vuelve a pedir y guarda las respuestas', async () => {
    CannedResponseAPI.validateCacheKey.mockResolvedValue(false);
    CannedResponseAPI.refetchAndCommit.mockResolvedValue({
      data: [{ short_code: 'qa-saludo', content: 'Hola' }],
    });

    await cannedResponseModule.actions.revalidateCannedResponses(
      { commit },
      { newKey: 'nueva' }
    );

    expect(commit).toHaveBeenCalledWith(types.SET_CANNED, [
      { short_code: 'qa-saludo', content: 'Hola' },
    ]);
  });
});

describe('[Regresión] RF-12 — las macros siguen mostrando el nombre del adjunto', () => {
  it('devuelve el nombre del archivo de una acción send_attachment', () => {
    expect(
      getFileName(10, 'send_attachment', [
        { blob_id: 10, filename: 'guia.pdf' },
      ])
    ).toBe('guia.pdf');
  });
});

describe('[Regresión] RF-13 — el retraso de las automatizaciones se sigue mostrando en días, horas o minutos', () => {
  it.each([
    [10, '10m'],
    [90, '90m'],
    [60, '1h'],
    [1440, '1d'],
    [43200, '30d'],
  ])('%i minutos se muestran como %s', (minutes, label) => {
    expect(formatDelay(minutes)).toBe(label);
  });
});

describe('[Regresión] RF-14 — crear un equipo con éxito no cambia con M-01', () => {
  it('guarda el equipo, lo devuelve y apaga el indicador', async () => {
    TeamsAPI.create.mockResolvedValue({ data: { id: 1, name: 'qa-soporte' } });

    const team = await teamActions.create({ commit }, { name: 'QA-Soporte' });

    expect(team).toEqual({ id: 1, name: 'qa-soporte' });
    expect(commit.mock.calls).toEqual([
      [SET_TEAM_UI_FLAG, { isCreating: true }],
      [SET_TEAM_ITEM, { id: 1, name: 'qa-soporte' }],
      [SET_TEAM_UI_FLAG, { isCreating: false }],
    ]);
  });
});

describe('[Regresión] RF-15 — los reportes siguen recortando los datos al rango pedido', () => {
  it('conserva el inicio y descarta el fin del rango', () => {
    const data = [100, 200, 300, 400].map(timestamp => ({
      timestamp,
      value: 1,
    }));

    expect(
      clampDataBetweenTimeline(data, 200, 400).map(d => d.timestamp)
    ).toEqual([200, 300]);
  });
});
