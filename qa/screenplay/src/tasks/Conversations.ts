import { Interaction, Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';

import { apiRequest, goToAccountPage, OnPage } from '../interactions';
import { environment, unique } from '../support/environment';
import { recall, remember } from '../support/notes';
import { ConversationScreen } from '../ui/Screens';

/**
 * Crea por API un contacto, una conversación en la bandeja QA y un mensaje del cliente.
 * Anota conversationId, contactId y contactEmail.
 */
export const StartConversation = {
  withMessage: (message: string, name = 'Cliente QA', email?: string) =>
    Interaction.where(`#actor recibe una conversación con el mensaje "${message}"`, async actor => {
      const contactEmail = email ?? `${unique('cliente')}@chatwoot.test`;
      const contact = await apiRequest(actor, 'post', '/contacts', { name, email: contactEmail, inbox_id: environment.inboxId });
      const { contact: created, contact_inbox: contactInbox } = contact.data.payload;
      const conversation = await apiRequest(actor, 'post', '/conversations', {
        source_id: contactInbox.source_id,
        inbox_id: environment.inboxId,
        contact_id: created.id,
      });
      await apiRequest(actor, 'post', `/conversations/${conversation.data.id}/messages`, { content: message, message_type: 'incoming' });
      remember(actor, 'conversationId', conversation.data.id);
      remember(actor, 'contactId', created.id);
      remember(actor, 'contactEmail', contactEmail);
    }),
};

/** Abre la conversación anotada y espera el editor de respuesta. */
export const OpenTheConversation = () =>
  OnPage('abre la conversación', async (page, actor) => {
    await goToAccountPage(page, `/conversations/${recall(actor, 'conversationId')}`);
    await page.locator('.ProseMirror').first().waitFor({ timeout: 30_000 });
  });

export const ResolveTheConversation = () =>
  OnPage('resuelve la conversación', page => page.getByRole('button', { name: 'Resolve', exact: true }).click());

/** Despliega "Conversation Actions" en el panel del contacto (agente, equipo, etiquetas, macros). */
export const OpenConversationActions = () =>
  OnPage('abre las acciones de la conversación', async page => {
    if (!(await page.getByText('Conversation Actions').isVisible())) {
      await page.locator('button:has(.i-ph-user-bold)').click();
    }
    await page.getByText('Conversation Actions').waitFor();
    if (!(await page.getByText('Assigned Agent').isVisible())) {
      await page.getByText('Conversation Actions').click();
    }
    await page.getByText('Assigned Agent').waitFor();
  });

/** Elige una opción de un selector del panel (agente o equipo) usando su buscador. */
const ChooseInDropdown = (title: string, searchPlaceholder: string, option: string) =>
  OnPage(`elige "${option}" en ${title}`, async page => {
    // El título (con "Assign to me") está en un div.overflow-auto; el botón del selector, en el div siguiente.
    const titleBlock = page.locator('div.overflow-auto', { has: page.getByText(title, { exact: true }) });
    await titleBlock.locator('xpath=./following-sibling::div[1]').locator('button').first().click();
    const search = page.getByPlaceholder(searchPlaceholder);
    await search.fill(option);
    await page.locator('div.absolute', { has: search }).getByRole('button', { name: option }).first().click();
  });

export const AssignTheConversation = {
  toAgent: (agentName: string) =>
    Task.where(`#actor asigna la conversación a ${agentName}`,
      OpenConversationActions(),
      ChooseInDropdown('Assigned Agent', 'Search agents', agentName),
    ),
};

export const Reply = {
  publicly: (text: string) =>
    Task.where(`#actor responde "${text}"`,
      Enter.theValue(text).into(ConversationScreen.editor()),
      Click.on(ConversationScreen.button('Send')),
    ),
  withPrivateNote: (text: string) =>
    Task.where(`#actor agrega la nota privada "${text}"`,
      Click.on(ConversationScreen.button('Private Note')),
      Enter.theValue(text).into(ConversationScreen.editor()),
      Click.on(ConversationScreen.button('Add Note')),
    ),
};
