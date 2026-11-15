import { Given, Then, When } from '@cucumber/cucumber';
import { contain, equals, Ensure, not } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight, Interaction } from '@serenity-js/core';

import { apiRequest, CallChatwoot } from '../../src/interactions';
import { TheAccount, TheConversation } from '../../src/questions';
import { AssignTheConversation, Reply, ResolveTheConversation, StartConversation } from '../../src/tasks/Conversations';
import { ApplyLabel, CreateLabel, SearchFor } from '../../src/tasks/Settings';
import { environment, unique } from '../../src/support/environment';
import { recall, remember } from '../../src/support/notes';

/** Luisa Fernanda Espinal Montoya — RF-01 a RF-05 (conversaciones). */

// RF-01 Cambio de estado
When('{actor} resuelve la conversación', async (actor: Actor) => {
  await actor.attemptsTo(ResolveTheConversation());
});

When('{actor} intenta cambiar el estado de la conversación a {string} por la API', async (actor: Actor, status: string) => {
  await actor.attemptsTo(CallChatwoot.with('post', a => `/conversations/${recall(a, 'conversationId')}/toggle_status`, { status }));
});

// RF-02 Asignación
Given('que la conversación está asignada a Carlos', async () => {
  await actorInTheSpotlight().attemptsTo(
    Interaction.where('#actor asigna la conversación a Carlos por la API', async actor => {
      await apiRequest(actor, 'post', `/conversations/${recall(actor, 'conversationId')}/assignments`, { assignee_id: environment.agentId });
    }),
  );
});

When('{actor} asigna la conversación a {string}', async (actor: Actor, agentName: string) => {
  await actor.attemptsTo(AssignTheConversation.toAgent(agentName));
});

When('{actor} intenta asignar la conversación a un agente de otra cuenta', async (actor: Actor) => {
  await actor.attemptsTo(
    CallChatwoot.with('post', a => `/conversations/${recall(a, 'conversationId')}/assignments`, { assignee_id: environment.otherUserId }),
  );
});

Then('el agente asignado es {string}', async (agentName: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheConversation.assigneeName(), equals(agentName)));
});

// RF-03 Mensajes y notas privadas
When('{actor} responde {string}', async (actor: Actor, text: string) => {
  await actor.attemptsTo(Reply.publicly(text));
});

When('{actor} agrega la nota privada {string}', async (actor: Actor, text: string) => {
  await actor.attemptsTo(Reply.withPrivateNote(text));
});

Then('el último mensaje de la conversación es {string} y es {word}', async (text: string, visibility: string) => {
  await actorInTheSpotlight().attemptsTo(
    Ensure.eventually(TheConversation.lastMessage(), equals({ content: text, private: visibility === 'privado' })),
  );
});

// RF-04 Etiquetas
When('{actor} crea una etiqueta nueva que empieza por {string}', async (actor: Actor, prefix: string) => {
  const title = unique(prefix);
  await actor.attemptsTo(
    Interaction.where(`#actor anota la etiqueta ${title}`, a => remember(a, 'label', title)),
    CreateLabel.titled(title),
  );
});

When('{actor} aplica esa etiqueta a la conversación', async (actor: Actor) => {
  await actor.attemptsTo(ApplyLabel.toTheConversation(recall(actor, 'label')));
});

When('{actor} intenta crear la etiqueta {string}', async (actor: Actor, title: string) => {
  await actor.attemptsTo(CreateLabel.titled(title));
});

Then('la conversación tiene esa etiqueta', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(Ensure.eventually(TheConversation.labels(), contain(recall(actor, 'label'))));
});

Then('la etiqueta {string} no existe en la cuenta', async (title: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.that(TheAccount.labelTitles(), not(contain(title))));
});

// RF-05 Búsqueda
Given('que {actor} recibió una conversación con una palabra única en el mensaje', async (actor: Actor) => {
  const word = `reembolso${Date.now()}`;
  await actor.attemptsTo(
    Interaction.where(`#actor anota la palabra ${word}`, a => remember(a, 'searchTerm', word)),
    StartConversation.withMessage(`Quiero un ${word} de mi compra`, 'Cliente Búsqueda'),
  );
});

When('{actor} busca esa palabra', async (actor: Actor) => {
  await actor.attemptsTo(SearchFor(recall(actor, 'searchTerm')));
});

When('{actor} busca {string}', async (actor: Actor, term: string) => {
  await actor.attemptsTo(SearchFor(term));
});
