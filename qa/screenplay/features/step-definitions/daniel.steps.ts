import { Given, Then, When } from '@cucumber/cucumber';
import { contain, equals, Ensure, isTrue, not, property } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight, Duration, Interaction, Wait } from '@serenity-js/core';

import { apiRequest, CallChatwoot } from '../../src/interactions';
import { TheAccount, TheContacts, TheScreen } from '../../src/questions';
import {
  AddContactNote,
  CreateContact,
  CreateContactAttribute,
  DeleteContactNote,
  FilterContacts,
  ImportContacts,
} from '../../src/tasks/Contacts';
import { unique } from '../../src/support/environment';
import { recall, remember } from '../../src/support/notes';

/** Daniel Ortiz Ortiz — RF-06 a RF-10 (contactos). */

const prepareContact = (name: string) =>
  Interaction.where(`#actor prepara el contacto ${name} por la API`, async actor => {
    const email = `${unique('contacto')}@chatwoot.test`;
    const response = await apiRequest(actor, 'post', '/contacts', { name, email });
    remember(actor, 'contactId', response.data.payload.contact.id);
    remember(actor, 'contactEmail', email);
    remember(actor, 'searchTerm', name);
  });

// RF-06 Gestión de contactos
When('{actor} crea el contacto {string} {string} con un correo y un teléfono nuevos', async (actor: Actor, first: string, last: string) => {
  const stamp = String(Date.now());
  const email = `${first.toLowerCase()}.${stamp}@chatwoot.test`;
  const phone = `300${stamp.slice(-7)}`;
  await actor.attemptsTo(
    Interaction.where('#actor anota el correo y el teléfono', a => {
      remember(a, 'contactEmail', email);
      remember(a, 'phone', phone);
    }),
    CreateContact.named(first, last).withEmail(email).andPhone(phone),
  );
});

Then('existe un solo contacto con ese correo, llamado {string} y con el teléfono +57', async (name: string) => {
  const actor = actorInTheSpotlight();
  const email = recall(actor, 'contactEmail');
  await actor.attemptsTo(
    Ensure.eventually(TheContacts.withEmail(email), property('length', equals(1))),
    Ensure.that(TheContacts.nameAndPhoneOf(email), equals({ name, phone: `+57${recall(actor, 'phone')}` })),
  );
});

Given('que {actor} ya registró un contacto con un correo nuevo', async (actor: Actor) => {
  await actor.attemptsTo(prepareContact('Contacto Original'));
});

When('{actor} intenta crear otro contacto con el mismo correo en mayúsculas', async (actor: Actor) => {
  await actor.attemptsTo(CreateContact.named('Copia', 'QA').withEmail(recall(actor, 'contactEmail').toUpperCase()).andPhone());
});

Then('el formulario del contacto sigue abierto', async () => {
  await actorInTheSpotlight().attemptsTo(Wait.for(Duration.ofSeconds(3)), Ensure.that(TheScreen.dialogIsOpen(), isTrue()));
});

Then('sigue existiendo un solo contacto con ese correo', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(Ensure.that(TheContacts.withEmail(recall(actor, 'contactEmail')), property('length', equals(1))));
});

// RF-07 Importación CSV
When('{actor} importa un CSV con {int} contactos nuevos', async (actor: Actor, count: number) => {
  const stamp = Date.now();
  const emails = Array.from({ length: count }, (_, i) => `import${i + 1}.${stamp}@chatwoot.test`);
  const csv = `name,email\n${emails.map((email, i) => `Importado ${i + 1},${email}`).join('\n')}\n`;
  await actor.attemptsTo(
    Interaction.where('#actor anota los correos del CSV', a => remember(a, 'emails', emails)),
    ImportContacts.fromCsv('contactos.csv', csv),
  );
});

Then('los contactos del CSV quedan creados', async () => {
  const actor = actorInTheSpotlight();
  for (const email of recall(actor, 'emails')) {
    await actor.attemptsTo(
      Ensure.eventually(TheContacts.withEmail(email), property('length', equals(1))).timeoutAfter(Duration.ofSeconds(150)),
    );
  }
});

When('{actor} envía la importación sin archivo por la API', async (actor: Actor) => {
  await actor.attemptsTo(CallChatwoot.with('post', '/contacts/import', {}));
});

// RF-08 Notas
Given('que {actor} tiene un contacto nuevo', async (actor: Actor) => {
  await actor.attemptsTo(prepareContact('Contacto con notas'));
});

Given('que el contacto tiene la nota {string}', async (text: string) => {
  await actorInTheSpotlight().attemptsTo(
    Interaction.where(`#actor agrega por la API la nota "${text}"`, async actor => {
      await apiRequest(actor, 'post', `/contacts/${recall(actor, 'contactId')}/notes`, { content: text });
    }),
  );
});

When('{actor} agrega la nota {string} al contacto', async (actor: Actor, text: string) => {
  await actor.attemptsTo(AddContactNote(text));
});

When('{actor} elimina la nota {string}', async (actor: Actor, text: string) => {
  await actor.attemptsTo(DeleteContactNote(text));
});

Then('el contacto tiene la nota {string}', async (text: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheContacts.notes(), contain(text)));
});

Then('el contacto ya no tiene notas', async () => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheContacts.notes(), property('length', equals(0))));
});

// RF-09 Atributos personalizados
When('{actor} crea el atributo de contacto {string} de tipo {string}', async (actor: Actor, name: string, type: string) => {
  const key = `qa_${Date.now()}`;
  await actor.attemptsTo(
    Interaction.where(`#actor anota la clave ${key}`, a => remember(a, 'attributeKey', key)),
    CreateContactAttribute.named(name, key).ofType(type),
  );
});

When('{actor} intenta crear por la API un atributo de contacto de tipo {string}', async (actor: Actor, type: string) => {
  const key = `qa_${Date.now()}`;
  await actor.attemptsTo(
    Interaction.where(`#actor anota la clave ${key}`, a => remember(a, 'attributeKey', key)),
    CallChatwoot.with('post', '/custom_attribute_definitions', {
      custom_attribute_definition: {
        attribute_display_name: 'Atributo QA',
        attribute_key: key,
        attribute_display_type: type,
        attribute_model: 'contact_attribute',
      },
    }),
  );
});

Then('el atributo queda registrado en la cuenta', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(Ensure.eventually(TheAccount.attributeKeys(), contain(recall(actor, 'attributeKey'))));
});

Then('el atributo no queda registrado en la cuenta', async () => {
  const actor = actorInTheSpotlight();
  await actor.attemptsTo(Ensure.that(TheAccount.attributeKeys(), not(contain(recall(actor, 'attributeKey')))));
});

// RF-10 Filtros
Given('que {actor} tiene un contacto con un nombre único', async (actor: Actor) => {
  await actor.attemptsTo(prepareContact(`Segmento ${Date.now()}`));
});

When('{actor} filtra los contactos por ese nombre', async (actor: Actor) => {
  await actor.attemptsTo(FilterContacts.byName(recall(actor, 'searchTerm')));
});

Then('{actor} ve el contacto filtrado', async (actor: Actor) => {
  await actor.attemptsTo(
    Ensure.eventually(TheScreen.shows(recall(actor, 'searchTerm')), isTrue()),
    Ensure.eventually(TheScreen.shows('Showing 1 - 1 of 1 contact'), isTrue()),
  );
});

When('{actor} filtra los contactos por la API con el operador {string}', async (actor: Actor, operator: string) => {
  await actor.attemptsTo(
    CallChatwoot.with('post', '/contacts/filter', {
      payload: [{ attribute_key: 'name', filter_operator: operator, values: ['qa'], query_operator: null }],
    }),
  );
});
