import { Question } from '@serenity-js/core';

import { apiRequest, nativePageOf } from '../interactions';
import { recall } from '../support/notes';

/**
 * Preguntas del patrón Screenplay: lo que el actor consulta para verificar el resultado.
 * Las de la API leen el estado real en el servidor; las de la pantalla, lo que ve la persona.
 */

const conversation = async (actor: any) =>
  (await apiRequest(actor, 'get', `/conversations/${recall(actor, 'conversationId')}`)).data;

export const TheConversation = {
  status: () => Question.about('el estado de la conversación', async actor => (await conversation(actor)).status as string),
  assigneeName: () =>
    Question.about('el agente asignado', async actor => ((await conversation(actor)).meta?.assignee?.name ?? 'sin asignar') as string),
  labels: () =>
    Question.about('las etiquetas de la conversación', async actor =>
      (await apiRequest(actor, 'get', `/conversations/${recall(actor, 'conversationId')}/labels`)).data.payload as string[]),
  teamName: () => Question.about('el equipo de la conversación', async actor => ((await conversation(actor)).meta?.team?.name ?? 'sin equipo') as string),
  lastMessage: () =>
    Question.about('el último mensaje de la conversación', async actor => {
      const messages = (await apiRequest(actor, 'get', `/conversations/${recall(actor, 'conversationId')}/messages`)).data.payload;
      const last = messages.at(-1);
      return { content: last.content as string, private: last.private as boolean };
    }),
};

export const TheContacts = {
  withEmail: (email: string) =>
    Question.about(`los contactos con el correo ${email}`, async actor =>
      (await apiRequest(actor, 'get', `/contacts/search?q=${encodeURIComponent(email)}`)).data.payload as Array<Record<string, any>>),
  nameAndPhoneOf: (email: string) =>
    Question.about(`el nombre y el teléfono del contacto ${email}`, async actor => {
      const [contact] = (await apiRequest(actor, 'get', `/contacts/search?q=${encodeURIComponent(email)}`)).data.payload;
      return { name: contact?.name as string, phone: contact?.phone_number as string };
    }),
  notes: () =>
    Question.about('las notas del contacto', async actor =>
      ((await apiRequest(actor, 'get', `/contacts/${recall(actor, 'contactId')}/notes`)).data as Array<{ content: string }>).map(
        note => note.content,
      )),
};

export const TheAccount = {
  labelTitles: () =>
    Question.about('las etiquetas de la cuenta', async actor =>
      ((await apiRequest(actor, 'get', '/labels')).data.payload as Array<{ title: string }>).map(label => label.title)),
  attributeKeys: () =>
    Question.about('las claves de los atributos personalizados', async actor =>
      ((await apiRequest(actor, 'get', '/custom_attribute_definitions?attribute_model=contact_attribute')).data as Array<{
        attribute_key: string;
      }>).map(attribute => attribute.attribute_key)),
  teamMemberEmails: () =>
    Question.about('los correos de los miembros del equipo', async actor =>
      ((await apiRequest(actor, 'get', `/teams/${recall(actor, 'teamId')}/team_members`)).data as Array<{ email: string }>).map(
        member => member.email,
      )),
};

/** Respuesta de la última llamada a la API hecha con CallChatwoot. */
export const TheLastResponse = {
  status: () => Question.about('el código de la última respuesta', actor => recall(actor, 'lastStatus')),
  body: () => Question.about('el cuerpo de la última respuesta', actor => recall(actor, 'lastBody')),
  names: () =>
    Question.about('los nombres en la última respuesta', actor =>
      ((recall(actor, 'lastBody')?.payload ?? []) as Array<{ name: string }>).map(item => item.name)),
};

/** Lo que la persona ve en la pantalla. */
export const TheScreen = {
  shows: (text: string) =>
    Question.about(`si la pantalla muestra "${text}"`, async actor => (await nativePageOf(actor)).getByText(text).first().isVisible()),
  editorText: () =>
    Question.about('el texto del editor', async actor => ((await nativePageOf(actor)).locator('.ProseMirror').first().innerText())),
  dialogIsOpen: () =>
    Question.about('si el formulario sigue abierto', async actor => (await nativePageOf(actor)).locator('dialog[open]').isVisible()),
};
