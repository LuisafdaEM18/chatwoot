import { AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { configure, Duration } from '@serenity-js/core';
import { Browser, chromium } from 'playwright';

import { ChatwootCast } from '../../src/support/actors';

let browser: Browser;

// La importación de contactos y las automatizaciones se procesan en segundo plano (Sidekiq).
setDefaultTimeout(240_000);

BeforeAll(async () => {
  browser = await chromium.launch({
    channel: 'chrome',
    headless: process.env.HEADLESS !== 'false',
  });

  configure({
    actors: new ChatwootCast(browser),
    interactionTimeout: Duration.ofSeconds(30),
    crew: [
      '@serenity-js/console-reporter',
      ['@serenity-js/html-reporter', { specDirectory: './features', outputDirectory: './reports/serenity-js' }],
    ],
  });
});

AfterAll(async () => {
  await browser?.close();
});
