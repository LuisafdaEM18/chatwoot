import { Given, Then, When } from '@cucumber/cucumber';
import { equals, Ensure, includes, isTrue } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight, Duration } from '@serenity-js/core';

import { CallChatwoot } from '../../src/interactions';
import { TheConversation, TheLastResponse, TheScreen } from '../../src/questions';
import { OpenTheConversation, StartConversation } from '../../src/tasks/Conversations';
import { SignIn } from '../../src/tasks/Session';

/** Pasos que comparten los tres integrantes. */

Given('que {actor} inició sesión en Chatwoot', async (actor: Actor) => {
  await actor.attemptsTo(SignIn.asThemselves());
});

Given('que {actor} recibió una conversación con el mensaje {string}', async (actor: Actor, message: string) => {
  await actor.attemptsTo(StartConversation.withMessage(message));
});

When('{actor} abre la conversación', async (actor: Actor) => {
  await actor.attemptsTo(OpenTheConversation());
});

Then('{actor} ve el aviso {string}', async (actor: Actor, text: string) => {
  await actor.attemptsTo(Ensure.eventually(TheScreen.shows(text), isTrue()).timeoutAfter(Duration.ofSeconds(30)));
});

Then('la conversación queda en estado {string}', async (status: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheConversation.status(), equals(status)));
});

Then('la API responde {int}', async (status: number) => {
  await actorInTheSpotlight().attemptsTo(Ensure.that(TheLastResponse.status(), equals(status)));
});

Then('el error de la API menciona {string}', async (text: string) => {
  await actorInTheSpotlight().attemptsTo(
    Ensure.that(TheLastResponse.body().describedAs('el error de la última respuesta').as(body => JSON.stringify(body)), includes(text)),
  );
});

When('{actor} llama a la API con {word} {string}', async (actor: Actor, method: string, path: string) => {
  await actor.attemptsTo(CallChatwoot.with(method.toLowerCase() as 'get', path));
});
