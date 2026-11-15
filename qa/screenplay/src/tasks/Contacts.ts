import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';

import { goToAccountPage, OnPage, OpenAccountPage } from '../interactions';
import { recall } from '../support/notes';
import { ConversationScreen, SettingsScreen } from '../ui/Screens';

const openContactsMenu = OnPage('abre el menú de contactos', async page => {
  await goToAccountPage(page, '/contacts?page=1');
  await page.locator('button:has(.i-lucide-ellipsis-vertical)').first().click();
});

const dialogField = (placeholder: string) => `dialog[open] input[placeholder="${placeholder}"]`;

/** RF-06: crea un contacto desde el formulario "Add contact". */
export const CreateContact = {
  named: (firstName: string, lastName: string) => ({
    withEmail: (email: string) => ({
      andPhone: (localPhone?: string) =>
        Task.where(`#actor crea el contacto ${firstName} ${lastName}`,
          openContactsMenu,
          OnPage('llena y guarda el formulario del contacto', async page => {
            await page.getByText('Add contact').click();
            await page.locator(dialogField('Enter the first name')).fill(firstName);
            await page.locator(dialogField('Enter the last name')).fill(lastName);
            await page.locator(dialogField('Enter the email address')).fill(email);
            if (localPhone) {
              await page.locator(dialogField('Enter the phone number')).fill(localPhone);
            }
            await page.locator('dialog[open] button', { hasText: 'Save contact' }).click();
          }),
        ),
    }),
  }),
};

/** RF-07: importa un CSV desde "Import contacts". */
export const ImportContacts = {
  fromCsv: (fileName: string, contents: string) =>
    Task.where(`#actor importa el archivo ${fileName}`,
      openContactsMenu,
      OnPage('sube el CSV e inicia la importación', async page => {
        // El texto aparece en el menú y en el diálogo (oculto hasta abrirlo): se elige el visible.
        await page.getByText('Import contacts').filter({ visible: true }).first().click();
        await page.locator('input[type="file"]').setInputFiles({ name: fileName, mimeType: 'text/csv', buffer: Buffer.from(contents) });
        await page.getByRole('button', { name: 'Import', exact: true }).click();
      }),
    ),
};

/** RF-08: notas del contacto anotado. */
const openNotesOfTheContact = OnPage('abre las notas del contacto', async (page, actor) => {
  await goToAccountPage(page, `/contacts/${recall(actor, 'contactId')}`);
  await page.getByRole('button', { name: 'Notes' }).click();
});

export const AddContactNote = (text: string) =>
  Task.where(`#actor agrega la nota "${text}" al contacto`,
    openNotesOfTheContact,
    OnPage('escribe y guarda la nota', async page => {
      await page.locator('.ProseMirror').first().fill(text);
      await page.getByRole('button', { name: 'Save note' }).click();
    }),
  );

export const DeleteContactNote = (text: string) =>
  Task.where(`#actor elimina la nota "${text}"`,
    openNotesOfTheContact,
    OnPage('hace clic en la papelera de la nota', page =>
      page.locator('p', { hasText: text }).locator('xpath=../..').locator('button:has(.i-lucide-trash)').click()),
  );

/** RF-09: crea un atributo personalizado de contacto. */
export const CreateContactAttribute = {
  named: (displayName: string, key: string) => ({
    ofType: (type: string) =>
      Task.where(`#actor crea el atributo de contacto "${displayName}" de tipo ${type}`,
        OpenAccountPage.at('/settings/custom-attributes/list'),
        Click.on(ConversationScreen.button('Add Custom Attribute')),
        OnPage('elige el modelo Contact', page => page.locator('select').first().selectOption({ label: 'Contact' })),
        Enter.theValue(displayName).into(SettingsScreen.attributeName()),
        OnPage('escribe la clave del atributo', page => page.getByPlaceholder('Enter custom attribute key').fill(key)),
        Enter.theValue('Atributo creado por Screenplay').into(SettingsScreen.attributeDescription()),
        OnPage(`elige el tipo ${type}`, page => page.locator('select').nth(1).selectOption({ label: type })),
        Click.on(ConversationScreen.button('Create')),
      ),
  }),
};

/** RF-10: filtra contactos por nombre desde el panel de filtros. */
export const FilterContacts = {
  byName: (name: string) =>
    Task.where(`#actor filtra los contactos por el nombre ${name}`,
      OnPage('abre el panel de filtros y aplica el filtro', async page => {
        await goToAccountPage(page, '/contacts?page=1');
        await page.locator('button:has(.i-lucide-list-filter)').first().click();
        await page.getByPlaceholder('Enter value').fill(name);
        await page.getByRole('button', { name: 'Apply filters' }).click();
      }),
    ),
};
