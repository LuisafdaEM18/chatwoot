// Caja blanca del frontend — Daniel Ortiz Ortiz (RF-06 a RF-10)
import ContactAPI from 'dashboard/api/contacts';
import ContactNotesAPI from 'dashboard/api/contactNotes';
import AttributeAPI from 'dashboard/api/attributes';
import { actions as contactActions } from 'dashboard/store/modules/contacts/actions';
import { actions as noteActions } from 'dashboard/store/modules/contactNotes';
import { actions as attributeActions } from 'dashboard/store/modules/attributes';
import generatePayload from 'dashboard/helper/filterQueryGenerator';
import types from 'dashboard/store/mutation-types';
import {
  DuplicateContactException,
  ExceptionWithMessage,
} from 'shared/helpers/CustomErrors';

vi.mock('dashboard/api/contacts', () => ({
  default: { create: vi.fn(), importContacts: vi.fn() },
}));
vi.mock('dashboard/api/contactNotes', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/api/attributes', () => ({ default: { create: vi.fn() } }));
vi.mock('dashboard/helper/AnalyticsHelper', () => ({
  default: { track: vi.fn() },
}));

const commit = vi.fn();
const contact = { id: 5, name: 'QA' };

// RF-06 · contacts/actions.js create con handleContactOperationErrors
// D1 isFormData, D2 catch, D3 status 422, D4 el 422 trae mensaje,
// D5 otro error trae mensaje del servidor · V(G) = 6
describe('contacts create [RF-06 caja blanca front]', () => {
  it('camino 1 (D1=F, D2=F): envía JSON en snake_case y devuelve el contacto', async () => {
    ContactAPI.create.mockResolvedValue({ data: { payload: { contact } } });

    const result = await contactActions.create(
      { commit },
      { name: 'QA', phoneNumber: '+573001234567' }
    );

    expect(ContactAPI.create).toHaveBeenCalledWith({
      name: 'QA',
      phone_number: '+573001234567',
    });
    expect(result).toEqual(contact);
  });

  it('camino 2 (D1=V, D2=F): con avatar envía un FormData', async () => {
    ContactAPI.create.mockResolvedValue({ data: { payload: { contact } } });

    await contactActions.create(
      { commit },
      {
        isFormData: true,
        name: 'QA',
        additionalAttributes: { socialProfiles: {} },
      }
    );

    expect(ContactAPI.create.mock.calls[0][0]).toBeInstanceOf(FormData);
  });

  it('camino 3 (D2=V, D3=V, D4=V): un 422 se convierte en DuplicateContactException', async () => {
    ContactAPI.create.mockRejectedValue({
      response: {
        status: 422,
        data: { message: 'Email ya existe', attributes: ['email'] },
      },
    });

    await expect(
      contactActions.create({ commit }, { name: 'QA' })
    ).rejects.toBeInstanceOf(DuplicateContactException);
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_UI_FLAG, {
      isCreating: false,
    });
  });

  it('camino 4 (D3=V, D4=F): un 422 sin mensaje conserva el mensaje por defecto de la excepción', async () => {
    ContactAPI.create.mockRejectedValue({
      response: { status: 422, data: { attributes: ['phone_number'] } },
    });

    const error = await contactActions
      .create({ commit }, { name: 'QA' })
      .catch(e => e);

    expect(error).toBeInstanceOf(DuplicateContactException);
    expect(error.message).toBe(
      new DuplicateContactException(['phone_number']).message
    );
  });

  it('camino 5 (D3=F, D5=V): otro error con mensaje se convierte en ExceptionWithMessage', async () => {
    ContactAPI.create.mockRejectedValue({
      response: { status: 500, data: { message: 'Fallo interno' } },
    });

    await expect(
      contactActions.create({ commit }, { name: 'QA' })
    ).rejects.toBeInstanceOf(ExceptionWithMessage);
  });

  it('camino 6 (D3=F, D5=F): un error sin respuesta se relanza como Error', async () => {
    ContactAPI.create.mockRejectedValue('Network Error');

    await expect(
      contactActions.create({ commit }, { name: 'QA' })
    ).rejects.toThrow('Network Error');
  });
});

// RF-07 · contacts/actions.js import · D1 catch, D2 hay mensaje del servidor · V(G) = 3
describe('contacts import [RF-07 caja blanca front]', () => {
  const file = new File(['name,email'], 'contactos.csv', { type: 'text/csv' });

  it('camino 1 (D1=F): sube el archivo y apaga el indicador', async () => {
    ContactAPI.importContacts.mockResolvedValue({});

    await contactActions.import({ commit }, file);

    expect(ContactAPI.importContacts).toHaveBeenCalledWith(file);
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_UI_FLAG, {
      isImporting: false,
    });
  });

  it('camino 2 (D1=V, D2=V): relanza el mensaje del servidor', async () => {
    ContactAPI.importContacts.mockRejectedValue({
      response: { data: { message: 'Archivo inválido' } },
    });

    await expect(
      contactActions.import({ commit }, file)
    ).rejects.toBeInstanceOf(ExceptionWithMessage);
  });

  // Antes de corregir D-05 este camino descartaba el error y la acción terminaba sin error.
  it('camino 3 (D1=V, D2=F): un error sin mensaje se relanza (D-05 corregido)', async () => {
    ContactAPI.importContacts.mockRejectedValue(new Error('Network Error'));

    await expect(contactActions.import({ commit }, file)).rejects.toThrow(
      'Network Error'
    );
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_UI_FLAG, {
      isImporting: false,
    });
  });
});

// RF-08 · contactNotes.js create · D1 catch · V(G) = 2
describe('contactNotes create [RF-08 caja blanca front]', () => {
  it('camino 1 (D1=F): agrega la nota al contacto', async () => {
    ContactNotesAPI.create.mockResolvedValue({
      data: { id: 1, content: 'Llamar el lunes' },
    });

    await noteActions.create(
      { commit },
      { contactId: 5, content: 'Llamar el lunes' }
    );

    expect(commit).toHaveBeenCalledWith(types.ADD_CONTACT_NOTE, {
      contactId: 5,
      data: { id: 1, content: 'Llamar el lunes' },
    });
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_NOTES_UI_FLAG, {
      isCreating: false,
    });
  });

  it('camino 2 (D1=V): relanza el error y apaga el indicador', async () => {
    ContactNotesAPI.create.mockRejectedValue(new Error('422'));

    await expect(
      noteActions.create({ commit }, { contactId: 5, content: '' })
    ).rejects.toThrow('422');
    expect(commit).toHaveBeenLastCalledWith(types.SET_CONTACT_NOTES_UI_FLAG, {
      isCreating: false,
    });
  });
});

// RF-09 · attributes.js create · D1 catch · V(G) = 2
describe('attributes create [RF-09 caja blanca front]', () => {
  it('camino 1 (D1=F): agrega el atributo', async () => {
    AttributeAPI.create.mockResolvedValue({
      data: { id: 1, attribute_key: 'qa_nivel' },
    });

    await attributeActions.create({ commit }, { attribute_key: 'qa_nivel' });

    expect(commit).toHaveBeenCalledWith(types.ADD_CUSTOM_ATTRIBUTE, {
      id: 1,
      attribute_key: 'qa_nivel',
    });
  });

  it('camino 2 (D1=V): lanza el mensaje del servidor', async () => {
    AttributeAPI.create.mockRejectedValue({
      response: { data: { message: 'Attribute key has already been taken' } },
    });

    await expect(
      attributeActions.create({ commit }, { attribute_key: 'email' })
    ).rejects.toThrow('Attribute key has already been taken');
  });
});

// RF-10 · filterQueryGenerator.js generateValues y setArrayValues (a través de generatePayload)
// D1 null, D2 undefined, D3 '', D4 arreglo, D5 primer valor con id, D6 objeto · V(G) = 7
describe('filterQueryGenerator generateValues [RF-10 caja blanca front]', () => {
  const valuesOf = values =>
    generatePayload(
      [
        {
          attribute_key: 'status',
          filter_operator: 'equal_to',
          values,
          query_operator: 'and',
        },
      ],
      { useLocalTimezone: false }
    ).payload[0].values;

  it('camino 1 (D1=V): null produce un arreglo vacío', () => {
    expect(valuesOf(null)).toEqual([]);
  });

  it('camino 2 (D2=V): undefined produce un arreglo vacío', () => {
    expect(valuesOf(undefined)).toEqual([]);
  });

  it("camino 3 (D3=V): '' produce un arreglo vacío", () => {
    expect(valuesOf('')).toEqual([]);
  });

  it('camino 4 (D4=V, D5=V): un arreglo de opciones se convierte en sus id', () => {
    expect(
      valuesOf([
        { id: 'open', name: 'Abierta' },
        { id: 'pending', name: 'Pendiente' },
      ])
    ).toEqual(['open', 'pending']);
  });

  it('camino 5 (D4=V, D5=F): un arreglo de valores simples se conserva', () => {
    expect(valuesOf(['es', 'en'])).toEqual(['es', 'en']);
  });

  it('camino 6 (D6=V): un objeto se convierte en su id', () => {
    expect(valuesOf({ id: 3, name: 'Equipo QA' })).toEqual([3]);
  });

  it('camino 7 (todas F): un valor simple se envuelve en un arreglo', () => {
    expect(valuesOf('qa')).toEqual(['qa']);
  });

  it('el último filtro queda sin query_operator para no romper la API', () => {
    const { payload } = generatePayload(
      [{ attribute_key: 'status', values: 'open', query_operator: 'and' }],
      { useLocalTimezone: false }
    );

    expect(payload[0].query_operator).toBeUndefined();
  });
});
