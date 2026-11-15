import { defineParameterType } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';

/**
 * {actor}: el nombre de una persona (Andrea, Carlos, Bruno, Elena) o "ella"/"él" para referirse
 * al último actor nombrado. Ver src/support/actors.ts.
 */
defineParameterType({
  name: 'actor',
  regexp: /Andrea|Carlos|Bruno|Elena|ella|él/,
  transformer: (name: string) => (name === 'ella' || name === 'él' ? actorInTheSpotlight() : actorCalled(name)),
});
