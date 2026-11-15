import { Interaction, UsesAbilities } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright, PlaywrightPage } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import { Page as NativePage } from 'playwright';

import { accountPath, environment } from '../support/environment';
import { remember } from '../support/notes';

/** Página nativa de Playwright del actor, para las interacciones que necesitan sus localizadores. */
export const nativePageOf = async (actor: UsesAbilities): Promise<NativePage> => {
  const page = (await BrowseTheWebWithPlaywright.as(actor).currentPage()) as PlaywrightPage;
  return page.nativePage();
};

/**
 * Interacción sobre la página con localizadores de Playwright (getByText, getByRole, etc.).
 * Se usa para los pasos de la interfaz de Chatwoot que no tienen un data-testid estable.
 */
export const OnPage = (description: string, action: (page: NativePage, actor: UsesAbilities) => Promise<unknown>) =>
  Interaction.where(`#actor ${description}`, async actor => {
    await action(await nativePageOf(actor), actor);
  });

/** Abre una ruta de la cuenta en la página nativa, borrando antes la caché local de Chatwoot. */
export const goToAccountPage = async (page: NativePage, path: string): Promise<void> => {
  const accountId = environment.accountId;
  // Chatwoot guarda etiquetas, equipos y otros datos en IndexedDB (cw-store-<cuenta>). Se borra en cada
  // carga para que la interfaz muestre lo que el escenario creó por API.
  await page.addInitScript(id => window.indexedDB.deleteDatabase(`cw-store-${id}`), accountId);
  await page.goto(`/app/accounts/${accountId}${path}`);
};

/** Abre una página de la cuenta de pruebas. */
export const OpenAccountPage = {
  at: (path: string) => OnPage(`abre la página ${path}`, page => goToAccountPage(page, path)),
};

/**
 * Llamada a la API de Chatwoot con el token del actor. Anota el código y el cuerpo de la respuesta
 * (lastStatus y lastBody) para que los pasos "Entonces" los verifiquen.
 */
export const CallChatwoot = {
  with: (method: 'get' | 'post' | 'put' | 'patch' | 'delete', path: string | ((actor: UsesAbilities) => string), data?: unknown) =>
    Interaction.where(`#actor llama ${method.toUpperCase()} a la API`, async actor => {
      const url = accountPath(typeof path === 'function' ? path(actor) : path);
      const response = await CallAnApi.as(actor).request({ method, url, data });
      remember(actor, 'lastStatus', response.status);
      remember(actor, 'lastBody', response.data);
    }),
};

/** Lectura directa de la API, para preparar datos y responder preguntas. */
export const apiRequest = async (actor: UsesAbilities, method: string, path: string, data?: unknown) =>
  CallAnApi.as(actor).request({ method, url: accountPath(path), data });
