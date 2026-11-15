import { Interaction, Task } from '@serenity-js/core';
import { Click, Enter, Press, Key } from '@serenity-js/web';

import { apiRequest, OnPage, OpenAccountPage } from '../interactions';
import { remember } from '../support/notes';
import { ConversationScreen, SearchScreen, SettingsScreen } from '../ui/Screens';
import { OpenConversationActions } from './Conversations';

/** RF-04: etiquetas. */
export const CreateLabel = {
  titled: (title: string) =>
    Task.where(`#actor crea la etiqueta ${title}`,
      OpenAccountPage.at('/settings/labels/list'),
      Click.on(ConversationScreen.button('Add label')),
      Enter.theValue(title).into(SettingsScreen.labelName()),
      Click.on(ConversationScreen.button('Create')),
    ),
};

export const ApplyLabel = {
  toTheConversation: (title: string) =>
    Task.where(`#actor aplica la etiqueta ${title} a la conversación`,
      OpenConversationActions(),
      OnPage(`busca y elige la etiqueta ${title}`, async page => {
        await page.getByRole('button', { name: 'Add Labels' }).click();
        const search = page.getByPlaceholder('Search labels');
        await search.fill(title);
        await search.locator('xpath=../..').locator('li button', { hasText: title }).first().click();
      }),
    ),
};

/** RF-05: búsqueda global. */
export const SearchFor = (term: string) =>
  Task.where(`#actor busca "${term}"`,
    OpenAccountPage.at('/search'),
    Enter.theValue(term).into(SearchScreen.input()),
    Press.the(Key.Enter).in(SearchScreen.input()),
  );

/** RF-11: respuestas predefinidas. */
export const CreateCannedResponse = {
  withShortCode: (shortCode: string, content: string) =>
    Task.where(`#actor crea la respuesta predefinida ${shortCode}`,
      OpenAccountPage.at('/settings/canned-response/list'),
      Click.on(ConversationScreen.button('Add canned response')),
      Enter.theValue(shortCode).into(SettingsScreen.shortCode()),
      OnPage('escribe el contenido de la respuesta', page =>
        page.locator('dialog[open] .ProseMirror, .modal-container .ProseMirror').first().fill(content)),
      Click.on(ConversationScreen.button('Submit')),
    ),
};

export const InsertCannedResponse = {
  withShortCode: (shortCode: string) =>
    Task.where(`#actor inserta la respuesta /${shortCode} en el chat`,
      OnPage(`escribe /${shortCode} y elige la sugerencia`, async page => {
        await page.locator('.ProseMirror').first().pressSequentially(`/${shortCode}`);
        await page.locator('li', { hasText: shortCode }).first().click();
      }),
    ),
};

/** RF-12: macros. Ejecuta desde el panel de la conversación la macro con ese nombre. */
export const ExecuteMacro = {
  named: (name: string) =>
    Task.where(`#actor ejecuta la macro "${name}"`,
      OpenConversationActions(),
      OnPage('despliega la sección Macros y ejecuta la macro', async page => {
        // La sección está desplegada cuando tiene contenido a continuación (el estado se guarda por usuario).
        const section = page.locator('button', { has: page.locator('h5', { hasText: /^Macros$/ }) });
        if ((await section.locator('xpath=./following-sibling::*[1]').count()) === 0) {
          await section.click();
        }
        // Con muchas macros la lista tiene scroll: se lleva la macro a la vista antes de ejecutarla.
        const macro = page.getByText(name, { exact: true });
        await macro.scrollIntoViewIfNeeded();
        await macro.locator('xpath=..').locator('button:has(.i-lucide-play)').first().click({ force: true });
      }),
    ),
};

/** RF-14: equipos. Crea el equipo por la interfaz y le agrega los agentes con esos correos. */
export const CreateTeam = {
  named: (name: string) => ({
    withAgents: (...emails: string[]) =>
      Task.where(`#actor crea el equipo ${name} con ${emails.length} agentes`,
        OpenAccountPage.at('/settings/teams/new'),
        Enter.theValue(name).into(SettingsScreen.teamName()),
        Click.on(ConversationScreen.button('Create team')),
        OnPage('marca los agentes y los agrega', async (page, actor) => {
          await page.waitForURL(/\/teams\/new\/\d+\/agents$/, { timeout: 30_000 });
          for (const email of emails) {
            await page.locator('tr', { hasText: email }).locator('input[type="checkbox"]').check();
          }
          await page.getByRole('button', { name: 'Add agents' }).click();
          await page.waitForURL(/\/teams\/new\/\d+\/finish$/, { timeout: 30_000 });
          remember(actor, 'teamId', Number(page.url().match(/new\/(\d+)\/finish/)![1]));
        }),
      ),
  }),
};

/** Crea un recurso por API y anota el campo indicado de la respuesta (preparación de datos). */
export const Prepare = {
  through: (path: string, body: unknown, rememberAs?: { key: 'teamId' | 'contactId'; field: (data: any) => number }) =>
    Interaction.where(`#actor prepara ${path} por la API`, async actor => {
      const response = await apiRequest(actor, 'post', path, body);
      if (response.status >= 300) {
        throw new Error(`La preparación de ${path} respondió ${response.status}: ${JSON.stringify(response.data)}`);
      }
      if (rememberAs) {
        remember(actor, rememberAs.key, rememberAs.field(response.data));
      }
    }),
};
