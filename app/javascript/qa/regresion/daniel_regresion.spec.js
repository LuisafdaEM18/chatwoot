// [Regresión] Daniel Ortiz Ortiz — RF-06 a RF-10 (frontend)
// Verifican que los flujos que ya funcionaban se conservan después de corregir D-05
// (contacts import relanza el error): la importación exitosa no debe cambiar.
import ContactAPI from 'dashboard/api/contacts';
import ContactNotesAPI from 'dashboard/api/contactNotes';
import AttributeAPI from 'dashboard/api/attributes';
import { actions as contactActions } from 'dashboard/store/modules/contacts/actions';
import { actions as noteActions } from 'dashboard/store/modules/contactNotes';
import { actions as attributeActions } from 'dashboard/store/modules/attributes';
import generatePayload from 'dashboard/helper/filterQueryGenerator';
import types from 'dashboard/store/mutation-types';

vi.mock('dashboard/api/contacts', () => ({
  default: { create: vi.fn(), update: vi.fn(), importContacts: vi.fn() },
}));
vi.mock('dashboard/api/contactNotes', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/api/attributes', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/helper/AnalyticsHelper', () => ({
  default: { track: vi.fn() },
}));

const commit = vi.fn();

describe('[Regresión] RF-06 — crear un contacto lo sigue guardando en el store', () => {
  it('envía los datos en snake_case y devuelve el contacto creado', async () => {
    ContactAPI.create.mockResolvedValue({
      data: { payload: { contact: { id: 5, name: 'Ana' } } },
    });

    const contact = await contactActions.create(
      { commit },
      { name: 'Ana', phoneNumber: '+573001234567' }
    );

    expect(ContactAPI.create).toHaveBeenCalledWith({
      name: 'Ana',
      phone_number: '+573001234567',
    });
    expect(commit).toHaveBeenCalledWith(types.SET_CONTACT_ITEM, {
      id: 5,
      name: 'Ana',
    });
    expect(contact).toEqual({ id: 5, name: 'Ana' });
  });
});

describe('[Regresión] RF-07 — una importación exitosa termina sin error', () => {
  it('sube el archivo, no lanza error y apaga el indicador', async () => {
    const file = new File(['name,email'], 'contactos.csv', {
      type: 'text/csv',
    });
    ContactAPI.importContacts.mockResolvedValue({});

    await expect(
      contactActions.import({ commit }, file)
    ).resolves.toBeUndefined();

    expect(ContactAPI.importContacts).toHaveBeenCalledWith(file);
    expect(commit.mock.calls).toEqual([
      [types.SET_CONTACT_UI_FLAG, { isImporting: true }],
      [types.SET_CONTACT_UI_FLAG, { isImporting: false }],
    ]);
  });
});

describe('[Regresión] RF-08 — crear una nota la sigue agregando al contacto', () => {
  it('agrega la nota con el ID del contacto', async () => {
    ContactNotesAPI.create.mockResolvedValue({
      data: { id: 1, content: 'Llamar en la tarde' },
    });

    await noteActions.create(
      { commit },
      { contactId: 5, content: 'Llamar en la tarde' }
    );

    expect(commit).toHaveBeenCalledWith(types.ADD_CONTACT_NOTE, {
      contactId: 5,
      data: { id: 1, content: 'Llamar en la tarde' },
    });
  });
});

describe('[Regresión] RF-09 — crear un atributo lo sigue agregando al store', () => {
  it('agrega el atributo devuelto por la API', async () => {
    AttributeAPI.create.mockResolvedValue({
      data: {
        id: 1,
        attribute_key: 'qa_nivel',
        attribute_display_type: 'number',
      },
    });

    await attributeActions.create({ commit }, { attribute_key: 'qa_nivel' });

    expect(commit).toHaveBeenCalledWith(types.ADD_CUSTOM_ATTRIBUTE, {
      id: 1,
      attribute_key: 'qa_nivel',
      attribute_display_type: 'number',
    });
  });
});

describe('[Regresión] RF-10 — el generador de filtros sigue armando el payload de la API', () => {
  it('convierte opciones en IDs y deja sin query_operator el último filtro', () => {
    const { payload } = generatePayload(
      [
        {
          attribute_key: 'status',
          filter_operator: 'equal_to',
          values: [{ id: 'open', name: 'Open' }],
          query_operator: 'and',
        },
        {
          attribute_key: 'name',
          filter_operator: 'contains',
          values: 'qa',
          query_operator: 'and',
        },
      ],
      { useLocalTimezone: false }
    );

    expect(payload).toEqual([
      {
        attribute_key: 'status',
        filter_operator: 'equal_to',
        values: ['open'],
        query_operator: 'and',
      },
      {
        attribute_key: 'name',
        filter_operator: 'contains',
        values: ['qa'],
        query_operator: undefined,
      },
    ]);
  });
});
