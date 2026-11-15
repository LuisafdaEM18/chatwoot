import { includes } from '@serenity-js/assertions';
import { Actor, Duration, Question, Task, Wait } from '@serenity-js/core';
import { Click, Enter, Navigate, Page } from '@serenity-js/web';

import { personaOf } from '../support/actors';
import { LoginScreen } from '../ui/Screens';

/** Credenciales de la persona del actor, como preguntas que se responden al ejecutar la tarea. */
const TheirEmail = Question.about('su correo', actor => personaOf(actor as Actor).email);
const TheirPassword = Question.about('su contraseña', actor => personaOf(actor as Actor).password);

/** Inicia sesión por la interfaz con las credenciales de la persona del actor. */
export const SignIn = {
  asThemselves: () =>
    Task.where(`#actor inicia sesión en Chatwoot`,
      Navigate.to('/app/login'),
      Enter.theValue(TheirEmail).into(LoginScreen.email()),
      Enter.theValue(TheirPassword).into(LoginScreen.password()),
      Click.on(LoginScreen.submit()),
      Wait.upTo(Duration.ofSeconds(30)).until(Page.current().url().href, includes('/app/accounts/')),
    ),
};
