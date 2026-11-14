// TDD del frontend — Juan Pablo Berrío Díaz (RF-14 Equipos y miembros)
// Mejora M-01: al fallar la creación de un equipo (por ejemplo, nombre repetido), la acción
// envolvía el error en new Error(error) y el mensaje quedaba como "[object Object]". La vista
// siempre mostraba "Couldn't save the team details", sin decir por qué.
//
// Cada prueba sigue AAA. Dobles de prueba:
// - TeamsAPI.create es un stub.
// - useAlert es un mock: se verifica el texto que se le muestra al usuario.
// - $store.dispatch es un stub que devuelve la promesa de cada escenario.
// - El router es un fake con replace vacío, para no cargar todas las rutas.
import { shallowMount } from '@vue/test-utils';
import TeamsAPI from 'dashboard/api/teams';
import { actions } from 'dashboard/store/modules/teams/actions';
import { useAlert } from 'dashboard/composables';
import router from 'dashboard/routes/index';
import CreateTeam from 'dashboard/routes/dashboard/settings/teams/Create/CreateTeam.vue';

vi.mock('dashboard/api/teams', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/composables', () => ({ useAlert: vi.fn() }));
vi.mock('dashboard/routes/index', () => ({ default: { replace: vi.fn() } }));

const nameTaken = {
  response: { status: 422, data: { message: 'Name has already been taken' } },
};

describe('teams create [RF-14 TDD front, M-01]', () => {
  const commit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('lanza un error con el mensaje que envió el servidor', async () => {
    // Arrange
    TeamsAPI.create.mockRejectedValue(nameTaken);

    // Act
    const result = actions.create({ commit }, { name: 'soporte' });

    // Assert
    await expect(result).rejects.toThrow('Name has already been taken');
  });
});

describe('CreateTeam.vue [RF-14 TDD front, M-01]', () => {
  const mountWith = dispatch =>
    shallowMount(CreateTeam, {
      global: { mocks: { $t: key => key, $store: { dispatch } } },
    });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('con éxito lleva al paso de agregar agentes del equipo nuevo', async () => {
    // Arrange
    const dispatch = vi.fn().mockResolvedValue({ id: 3, name: 'soporte' });
    const wrapper = mountWith(dispatch);

    // Act
    await wrapper.vm.createTeam({ name: 'soporte' });

    // Assert
    expect(dispatch).toHaveBeenCalledWith('teams/create', { name: 'soporte' });
    expect(router.replace).toHaveBeenCalledWith({
      name: 'settings_teams_add_agents',
      params: { page: 'new', teamId: 3 },
    });
    expect(useAlert).not.toHaveBeenCalled();
  });

  it('muestra al usuario el mensaje del servidor', async () => {
    // Arrange
    const wrapper = mountWith(
      vi.fn().mockRejectedValue(new Error('Name has already been taken'))
    );

    // Act
    await wrapper.vm.createTeam({ name: 'soporte' });

    // Assert
    expect(useAlert).toHaveBeenCalledWith('Name has already been taken');
  });

  it('sin mensaje del servidor muestra el texto genérico', async () => {
    // Arrange
    const wrapper = mountWith(vi.fn().mockRejectedValue(new Error()));

    // Act
    await wrapper.vm.createTeam({ name: 'soporte' });

    // Assert
    expect(useAlert).toHaveBeenCalledWith(
      'TEAMS_SETTINGS.TEAM_FORM.ERROR_MESSAGE'
    );
  });
});
