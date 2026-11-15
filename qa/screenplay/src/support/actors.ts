import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { CallAnApi } from '@serenity-js/rest';
import { Browser } from 'playwright';

import { environment } from './environment';

/**
 * Personas de los escenarios. Cada actor tiene un rol en Chatwoot y tres habilidades:
 * navegar con Playwright, llamar a la API con su token y tomar notas (los IDs que crea en el escenario).
 */
export interface Persona {
  role: string;
  email: string;
  password: string;
  token: string;
  accountId: number;
}

export const personas: Record<string, Persona> = {
  Andrea: {
    role: 'administradora de la cuenta QA',
    email: environment.adminEmail,
    password: environment.adminPassword,
    token: environment.adminToken,
    accountId: environment.accountId,
  },
  Carlos: {
    role: 'agente de la cuenta QA',
    email: environment.agentEmail,
    password: environment.agentPassword,
    token: environment.agentToken,
    accountId: environment.accountId,
  },
  Bruno: {
    role: 'segundo agente de la cuenta QA',
    email: environment.agent2Email,
    password: environment.agent2Password,
    token: environment.agent2Token,
    accountId: environment.accountId,
  },
  Elena: {
    role: 'administradora de otra cuenta',
    email: 'qa.otro@chatwoot.test',
    password: environment.adminPassword,
    token: environment.otherToken,
    accountId: environment.otherAccountId,
  },
};

export const personaOf = (actor: Actor): Persona => {
  const persona = personas[actor.name];
  if (!persona) {
    throw new Error(`No hay una persona configurada con el nombre ${actor.name}`);
  }
  return persona;
};

export class ChatwootCast extends Cast {
  constructor(private readonly browser: Browser) {
    super();
  }

  prepare(actor: Actor): Actor {
    const persona = personaOf(actor);
    return actor.whoCan(
      BrowseTheWebWithPlaywright.using(this.browser, {
        baseURL: environment.baseURL,
        viewport: { width: 1366, height: 768 },
        locale: 'en-US',
        timezoneId: 'America/Bogota',
      }),
      CallAnApi.using({
        baseURL: environment.baseURL,
        headers: { api_access_token: persona.token },
        // Los casos de error verifican el código de estado, así que la API nunca lanza excepción.
        validateStatus: () => true,
      }),
      TakeNotes.usingAnEmptyNotepad(),
    );
  }
}
