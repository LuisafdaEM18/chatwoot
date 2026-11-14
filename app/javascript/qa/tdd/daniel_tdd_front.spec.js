// TDD del frontend — Daniel Ortiz Ortiz (RF-07 Importación CSV)
// Defecto D-05: si la importación fallaba sin mensaje del servidor (error de red, 500 sin cuerpo),
// la acción import no lanzaba nada y el modal mostraba "importación exitosa".
//
// Cada prueba sigue AAA. Dobles de prueba:
// - ContactAPI.importContacts es un stub con la respuesta de cada escenario.
// - commit es un mock para verificar que el indicador isImporting se apaga.
import ContactAPI from 'dashboard/api/contacts';
import { actions } from 'dashboard/store/modules/contacts/actions';
import types from 'dashboard/store/mutation-types';
import { ExceptionWithMessage } from 'shared/helpers/CustomErrors';

vi.mock('dashboard/api/contacts', () => ({
  default: { importContacts: vi.fn() },
}));

describe('contacts import [RF-07 TDD front, D-05]', () => {
  const commit = vi.fn();
  const file = new File(['name,email\nQA,qa@chatwoot.test'], 'contactos.csv', {
    type: 'text/csv',
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('rechaza la promesa cuando falla la red, para que no se anuncie éxito', async () => {
    // Arrange
    const networkError = new Error('Network Error');
    ContactAPI.importContacts.mockRejectedValue(networkError);

    // Act
    const result = actions.import({ commit }, file);

    // Assert
    await expect(result).rejects.toThrow('Network Error');
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_UI_FLAG, {
      isImporting: false,
    });
  });

  it('con mensaje del servidor lanza ExceptionWithMessage con ese mensaje', async () => {
    // Arrange
    ContactAPI.importContacts.mockRejectedValue({
      response: { data: { message: 'Archivo CSV inválido' } },
    });

    // Act
    const result = actions.import({ commit }, file);

    // Assert
    await expect(result).rejects.toBeInstanceOf(ExceptionWithMessage);
    await expect(result).rejects.toHaveProperty('data', 'Archivo CSV inválido');
  });

  it('con una importación correcta resuelve y apaga el indicador', async () => {
    // Arrange
    ContactAPI.importContacts.mockResolvedValue({ data: {} });

    // Act
    await actions.import({ commit }, file);

    // Assert
    expect(ContactAPI.importContacts).toHaveBeenCalledWith(file);
    expect(commit.mock.calls).toEqual([
      [types.SET_CONTACT_UI_FLAG, { isImporting: true }],
      [types.SET_CONTACT_UI_FLAG, { isImporting: false }],
    ]);
  });
});
