import { By, PageElement } from '@serenity-js/web';

/** Elementos de las pantallas de Chatwoot que usan las tareas (los "targets" del patrón Screenplay). */
export const LoginScreen = {
  email: () => PageElement.located(By.css('[data-testid="email_input"]')).describedAs('el campo de correo'),
  password: () => PageElement.located(By.css('[data-testid="password_input"]')).describedAs('el campo de contraseña'),
  submit: () => PageElement.located(By.css('[data-testid="submit_button"]')).describedAs('el botón de iniciar sesión'),
};

export const ConversationScreen = {
  editor: () => PageElement.located(By.css('.ProseMirror')).describedAs('el editor de respuesta'),
  button: (text: string) => PageElement.located(By.cssContainingText('button', text)).describedAs(`el botón ${text}`),
};

export const SettingsScreen = {
  labelName: () => PageElement.located(By.css('input[placeholder="Label name"]')).describedAs('el nombre de la etiqueta'),
  shortCode: () => PageElement.located(By.css('input[placeholder="Please enter a short code."]')).describedAs('el código corto'),
  teamName: () => PageElement.located(By.css('input[placeholder="Example: Sales, Customer Support"]')).describedAs('el nombre del equipo'),
  attributeName: () =>
    PageElement.located(By.css('input[placeholder="Enter custom attribute display name"]')).describedAs('el nombre del atributo'),
  attributeKey: () => PageElement.located(By.css('input[placeholder="Enter custom attribute key"]')).describedAs('la clave del atributo'),
  attributeDescription: () =>
    PageElement.located(By.css('textarea[placeholder="Enter custom attribute description"]')).describedAs('la descripción del atributo'),
};

export const SearchScreen = {
  input: () =>
    PageElement.located(By.css('input[placeholder="Type 3 or more characters to search"]')).describedAs('el buscador global'),
};
