import { Given, Then, When } from '@cucumber/cucumber';
import { contain, Ensure, includes, isTrue, not } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, Duration, Interaction } from '@serenity-js/core';

import { apiRequest, CallChatwoot, OpenAccountPage } from '../../src/interactions';
import { TheAccount, TheConversation, TheLastResponse, TheScreen } from '../../src/questions';
import { OpenTheConversation, StartConversation } from '../../src/tasks/Conversations';
import { CreateCannedResponse, CreateTeam, ExecuteMacro, InsertCannedResponse } from '../../src/tasks/Settings';
import { environment, unique } from '../../src/support/environment';
import { recall, remember } from '../../src/support/notes';

/** Juan Pablo Berrío Díaz — RF-11 a RF-15 (productividad). */

// RF-11 Respuestas predefinidas
When('{actor} crea una respuesta predefinida con el texto {string}', async (actor: Actor, text: string) => {
  const shortCode = unique('qa-saludo');
  await actor.attemptsTo(
    Interaction.where(`#actor anota el código ${shortCode}`, a => remember(a, 'shortCode', shortCode)),
    CreateCannedResponse.withShortCode(shortCode, text),
  );
});

When('{actor} la inserta con su código corto en una conversación nueva', async (actor: Actor) => {
  await actor.attemptsTo(
    StartConversation.withMessage('Buenos días'),
    OpenTheConversation(),
    InsertCannedResponse.withShortCode(recall(actor, 'shortCode')),
  );
});

Then('el editor de respuesta contiene {string}', async (text: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheScreen.editorText(), includes(text)));
});

Given('que {actor} ya tiene una respuesta predefinida con un código nuevo', async (actor: Actor) => {
  const shortCode = unique('qa-repetido');
  await actor.attemptsTo(
    Interaction.where(`#actor crea por la API la respuesta ${shortCode}`, async a => {
      remember(a, 'shortCode', shortCode);
      await apiRequest(a, 'post', '/canned_responses', { canned_response: { short_code: shortCode, content: 'Primera' } });
    }),
  );
});

When('{actor} intenta crear por la API otra respuesta con el mismo código', async (actor: Actor) => {
  await actor.attemptsTo(
    CallChatwoot.with('post', '/canned_responses', { canned_response: { short_code: recall(actor, 'shortCode'), content: 'Segunda' } }),
  );
});

// RF-12 Macros
Given('que {actor} tiene una macro global que etiqueta, asigna un equipo y resuelve', async (actor: Actor) => {
  await actor.attemptsTo(
    Interaction.where('#actor crea por la API la etiqueta, el equipo y la macro', async a => {
      const stamp = Date.now();
      const label = `qa-macro-${stamp}`;
      const macroName = `Cerrar con etiqueta ${stamp}`;
      await apiRequest(a, 'post', '/labels', { title: label });
      const team = await apiRequest(a, 'post', '/teams', { name: `qa-macro-equipo-${stamp}` });
      await apiRequest(a, 'post', '/macros', {
        name: macroName,
        visibility: 'global',
        actions: [
          { action_name: 'add_label', action_params: [label] },
          { action_name: 'assign_team', action_params: [team.data.id] },
          { action_name: 'resolve_conversation', action_params: null },
        ],
      });
      remember(a, 'label', label);
      remember(a, 'macroName', macroName);
      remember(a, 'teamName', team.data.name);
    }),
  );
});

When('{actor} ejecuta esa macro', async (actor: Actor) => {
  await actor.attemptsTo(ExecuteMacro.named(recall(actor, 'macroName')));
});

Then('la conversación tiene la etiqueta y el equipo de la macro', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(
    Ensure.eventually(TheConversation.labels(), contain(recall(actor, 'label'))),
    Ensure.eventually(TheConversation.teamName(), includes(recall(actor, 'teamName'))),
  );
});

Given('que {actor} creó una macro personal y una macro global', async (actor: Actor) => {
  await actor.attemptsTo(
    Interaction.where('#actor crea por la API una macro personal y una global', async a => {
      const stamp = Date.now();
      const actions = [{ action_name: 'add_label', action_params: ['qa'] }];
      remember(a, 'personalMacro', `Personal ${stamp}`);
      remember(a, 'globalMacro', `Global ${stamp}`);
      await apiRequest(a, 'post', '/macros', { name: `Personal ${stamp}`, visibility: 'personal', actions });
      await apiRequest(a, 'post', '/macros', { name: `Global ${stamp}`, visibility: 'global', actions });
    }),
  );
});

When('{actor} consulta las macros por la API', async (actor: Actor) => {
  await actor.attemptsTo(CallChatwoot.with('get', '/macros'));
});

Then('{actor} ve la macro global de Andrea pero no la personal', async (actor: Actor) => {
  const andrea = actorCalled('Andrea');
  await actor.attemptsTo(
    Ensure.that(TheLastResponse.names(), contain(recall(andrea, 'globalMacro'))),
    Ensure.that(TheLastResponse.names(), not(contain(recall(andrea, 'personalMacro')))),
  );
});

// RF-13 Automatizaciones
Given('que {actor} tiene una regla que etiqueta los mensajes que contienen {string}', async (actor: Actor, word: string) => {
  await actor.attemptsTo(
    Interaction.where(`#actor crea por la API una regla para "${word}"`, async a => {
      const stamp = Date.now();
      const label = `qa-factura-${stamp}`;
      const ruleName = `Etiquetar facturas ${stamp}`;
      await apiRequest(a, 'post', '/labels', { title: label });
      await apiRequest(a, 'post', '/automation_rules', {
        name: ruleName,
        description: 'Etiqueta las conversaciones que hablan de facturas',
        event_name: 'message_created',
        active: true,
        conditions: [{ attribute_key: 'content', filter_operator: 'contains', values: [word], query_operator: null }],
        actions: [{ action_name: 'add_label', action_params: [label] }],
      });
      remember(a, 'label', label);
      remember(a, 'ruleName', ruleName);
    }),
  );
});

When('{actor} abre la lista de automatizaciones', async (actor: Actor) => {
  await actor.attemptsTo(OpenAccountPage.at('/settings/automation/list'));
});

Then('{actor} ve la regla en la lista', async (actor: Actor) => {
  await actor.attemptsTo(Ensure.eventually(TheScreen.shows(recall(actor, 'ruleName')), isTrue()));
});

Then('la conversación recibe la etiqueta de la regla', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(
    Ensure.eventually(TheConversation.labels(), contain(recall(actor, 'label'))).timeoutAfter(Duration.ofSeconds(60)),
  );
});

When('{actor} intenta crear por la API una regla con retraso de {int} minutos', async (actor: Actor, minutes: number) => {
  await actor.attemptsTo(
    CallChatwoot.with('post', '/automation_rules', {
      name: `Retraso ${minutes} ${Date.now()}`,
      event_name: 'message_created',
      active: true,
      conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: null }],
      actions: [{ action_name: 'add_label', action_params: ['qa'] }],
      execution_delay: minutes,
    }),
  );
});

// RF-14 Equipos
When('{actor} crea un equipo nuevo con los agentes {string} y {string}', async (actor: Actor, first: string, second: string) => {
  await actor.attemptsTo(CreateTeam.named(unique('qa-pagos')).withAgents(first, second));
});

Then('el equipo tiene como miembros a {string} y {string}', async (first: string, second: string) => {
  await actorInTheSpotlight().attemptsTo(
    Ensure.eventually(TheAccount.teamMemberEmails(), contain(first)),
    Ensure.eventually(TheAccount.teamMemberEmails(), contain(second)),
  );
});

When('{actor} intenta crear un equipo por la API', async (actor: Actor) => {
  await actor.attemptsTo(CallChatwoot.with('post', '/teams', { name: unique('qa-sin-permiso') }));
});

// RF-15 Reportes
When('{actor} abre el reporte de conversaciones', async (actor: Actor) => {
  await actor.attemptsTo(OpenAccountPage.at('/reports/conversation'));
});

When('{actor} consulta el resumen de reportes por la API', async (actor: Actor) => {
  const until = Math.floor(Date.now() / 1000);
  const since = until - 7 * 24 * 60 * 60;
  await actor.attemptsTo(
    CallChatwoot.with('get', `/api/v2/accounts/${environment.accountId}/reports/summary?type=account&since=${since}&until=${until}`),
  );
});
