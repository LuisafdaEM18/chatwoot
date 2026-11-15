# Criterio 8 — Lenguaje Gherkin, BDD, E2E y Screenplay

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Los requisitos del alcance se describieron en Gherkin (español, `# language: es`) con la estructura Dado–Cuando–Entonces y se automatizaron como pruebas E2E ejecutables con Cucumber y el patrón Screenplay de Serenity/JS sobre Playwright, la misma combinación que el equipo usó en Athletia.

| Integrante | Requisitos | Escenarios | Resultado |
|---|---|---|---|
| Luisa | RF-01 a RF-05 | 10 | 10 aprobados |
| Daniel | RF-06 a RF-10 | 10 | 10 aprobados |
| Juan Pablo | RF-11 a RF-15 | 10 (9 escenarios y 1 esquema con 4 ejemplos) | 13 ejecuciones aprobadas |
| **Total** | 15 requisitos | **30 escenarios, 33 ejecuciones** | **33 de 33 aprobadas** |

Cucumber cuenta 33 ejecuciones porque el esquema de RF-13 corre una vez por ejemplo. El reporte de Serenity/JS agrupa el esquema y muestra 30 escenarios, todos aprobados (tasa de aprobación 100 %).

## 2. Dónde está cada cosa

| Elemento | Ubicación |
|---|---|
| Proyecto Screenplay | `qa/screenplay/` |
| Escenarios Gherkin | `qa/screenplay/features/{luisa,daniel,juanpablo}/rfXX_*.feature` |
| Definiciones de pasos | `qa/screenplay/features/step-definitions/` (`comunes`, `luisa`, `daniel`, `juanpablo`, `parameter`) |
| Configuración de Serenity/JS | `qa/screenplay/features/support/serenity.config.ts` |
| Actores y habilidades | `qa/screenplay/src/support/actors.ts` |
| Interacciones | `qa/screenplay/src/interactions/index.ts` |
| Tareas | `qa/screenplay/src/tasks/` (`Session`, `Conversations`, `Settings`, `Contacts`) |
| Preguntas | `qa/screenplay/src/questions/index.ts` |
| Elementos de pantalla | `qa/screenplay/src/ui/Screens.ts` |
| Salida de la corrida completa | `qa/evidencias/screenplay/screenplay_run_completo.txt` |
| Reporte HTML de Serenity/JS | `qa/evidencias/screenplay/reporte_serenity/index.html` |

## 3. Entorno

| Elemento | Valor |
|---|---|
| Aplicación | Imagen `chatwoot/chatwoot:v4.19.1` con `qa/docker-compose.e2e.yaml` (las correcciones del backend montadas, Rack::Attack desactivado), el mismo entorno de Cypress |
| Datos | `qa/scripts/create_qa_data.rb`; los IDs, credenciales y tokens se leen de `qa/cypress.env.json` (no se sube al repositorio), compartido con Cypress |
| Herramientas | Cucumber 13.3, Serenity/JS 3.48 (`core`, `cucumber`, `web`, `playwright`, `rest`, `assertions`, `console-reporter`, `html-reporter`), Playwright 1.63 con Google Chrome, TypeScript 5.9 |
| Navegador | Chrome sin interfaz, 1366×768, idioma `en-US`, zona horaria `America/Bogota` |

## 4. Gherkin y BDD

- Cada requisito tiene una **Característica** con su historia de usuario (Como… Quiero… Para…), las etiquetas del integrante y del requisito (`@LuisaEspinal @RF04`) y **Antecedentes** con el inicio de sesión.
- Cada **Escenario** lleva el ID del caso de la matriz de trazabilidad en el nombre y como etiqueta (`@CP-04-01`), de modo que el reporte se cruza directo con la matriz. Los casos que verifican un defecto corregido también llevan su etiqueta (`@D-01`, `@D-02`, `@D-03`).
- Por requisito hay un escenario **exitoso** y uno **alternativo o de error**.
- RF-13 usa un **Esquema del escenario** con una tabla de **Ejemplos** para los valores límite del retraso de las automatizaciones (9, 10, 43 200 y 43 201 minutos).
- Los pasos se escribieron en el lenguaje del negocio y se reutilizan entre requisitos: `Dado que Andrea inició sesión en Chatwoot`, `Cuando ella abre la conversación`, `Entonces ella ve el aviso "..."`, `Entonces la API responde 422`.

Ejemplo (`features/luisa/rf02_asignacion.feature`):

```gherkin
# language: es
@LuisaEspinal @RF02
Característica: [Luisa Espinal] RF-02 Asignación de una conversación
  Como administradora de la cuenta
  Quiero asignar cada conversación a un agente
  Para que haya un responsable de responderla

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea recibió una conversación con el mensaje "Necesito hablar con un agente"

  @CP-02-01
  Escenario: [CP-02-01] Asignar la conversación a un agente de la bandeja
    Cuando ella abre la conversación
    Y ella asigna la conversación a "QA Agente"
    Entonces ella ve el aviso "Conversation Assignee changed"
    Y el agente asignado es "QA Agente"
```

## 5. Patrón Screenplay

| Elemento | Implementación |
|---|---|
| **Actores** | Personas con nombre y rol: Andrea (administradora de la cuenta QA), Carlos (agente), Bruno (segundo agente) y Elena (administradora de otra cuenta). El parámetro `{actor}` de Cucumber acepta el nombre o "ella" para el último actor nombrado. |
| **Habilidades** | `BrowseTheWebWithPlaywright` (navegar), `CallAnApi` (llamar a la API con el token de su persona) y `TakeNotes` (anotar los IDs que crea en el escenario). Se asignan en `ChatwootCast`. |
| **Interacciones** | Las de Serenity/JS (`Navigate`, `Enter`, `Click`, `Press`, `Wait`) y propias: `OpenAccountPage` (abre una página borrando la caché de IndexedDB de Chatwoot), `CallChatwoot` (llamada a la API que anota el código y el cuerpo de la respuesta) y `OnPage` (localizadores de Playwright para la interfaz que no tiene `data-testid`). |
| **Tareas** | Agrupan interacciones en acciones del negocio: `SignIn`, `StartConversation`, `OpenTheConversation`, `ResolveTheConversation`, `AssignTheConversation.toAgent`, `Reply.publicly`, `Reply.withPrivateNote`, `CreateLabel`, `ApplyLabel`, `SearchFor`, `CreateContact`, `ImportContacts`, `AddContactNote`, `DeleteContactNote`, `CreateContactAttribute`, `FilterContacts`, `CreateCannedResponse`, `InsertCannedResponse`, `ExecuteMacro`, `CreateTeam`. |
| **Preguntas** | Lo que el actor consulta para verificar: en el servidor (`TheConversation.status()`, `.assigneeName()`, `.labels()`, `.lastMessage()`, `TheContacts.withEmail()`, `TheContacts.notes()`, `TheAccount.teamMemberEmails()`, `TheLastResponse.status()`) y en la pantalla (`TheScreen.shows(texto)`, `TheScreen.editorText()`, `TheScreen.dialogIsOpen()`). |
| **Verificaciones** | `Ensure.that` y `Ensure.eventually` de `@serenity-js/assertions` con `equals`, `contain`, `includes`, `isTrue`, `property`. `Ensure.eventually` espera lo que Chatwoot procesa en segundo plano (Sidekiq), como la importación de contactos y las automatizaciones. |

Así se lee un paso en el código:

```ts
When('{actor} asigna la conversación a {string}', async (actor: Actor, agentName: string) => {
  await actor.attemptsTo(AssignTheConversation.toAgent(agentName));
});

Then('el agente asignado es {string}', async (agentName: string) => {
  await actorInTheSpotlight().attemptsTo(Ensure.eventually(TheConversation.assigneeName(), equals(agentName)));
});
```

Cada escenario prepara sus datos por API (contacto, conversación, etiqueta, macro) con nombres únicos, actúa por la interfaz como lo haría la persona y verifica tanto en la pantalla como en el servidor. Por eso los escenarios son independientes y se pueden repetir sin limpiar la base.

## 6. Escenarios por integrante

### 6.1 Luisa — conversaciones

| Caso | Escenario | Tipo | Resultado |
|---|---|---|---|
| CP-01-01 | Resolver una conversación abierta | Exitoso | Aprobado |
| CP-01-03 | Un estado que no existe se rechaza y la conversación sigue abierta (D-01) | Error | Aprobado |
| CP-02-01 | Asignar la conversación a un agente de la bandeja | Exitoso | Aprobado |
| CP-02-03 | Un agente de otra cuenta se rechaza y se conserva el asignado (D-02) | Error | Aprobado |
| CP-03-01 | Enviar una respuesta pública al cliente | Exitoso | Aprobado |
| CP-03-02 | Agregar una nota privada que solo ven los agentes | Alternativo | Aprobado |
| CP-04-01 | Crear una etiqueta y aplicarla a una conversación | Exitoso | Aprobado |
| CP-04-03 | Una etiqueta con símbolos se rechaza | Error | Aprobado |
| CP-05-01 | Encontrar una conversación por el texto de un mensaje | Exitoso | Aprobado |
| CP-05-03 | Un término inexistente no devuelve resultados | Error | Aprobado |

### 6.2 Daniel — contactos

| Caso | Escenario | Tipo | Resultado |
|---|---|---|---|
| CP-06-01 | Crear un contacto con correo y teléfono válidos | Exitoso | Aprobado |
| CP-06-03 | Un correo repetido, aunque cambien las mayúsculas, no se acepta | Error | Aprobado |
| CP-07-01 | Importar un CSV con tres contactos válidos | Exitoso | Aprobado |
| CP-07-03 | Una importación sin archivo se rechaza | Error | Aprobado |
| CP-08-01 | Agregar una nota al contacto | Exitoso | Aprobado |
| CP-08-02 | Eliminar una nota existente | Alternativo | Aprobado |
| CP-09-01 | Crear un atributo de contacto de tipo número | Exitoso | Aprobado |
| CP-09-03 | Un tipo de atributo que no existe se rechaza (D-03) | Error | Aprobado |
| CP-10-01 | Filtrar los contactos por nombre | Exitoso | Aprobado |
| CP-10-03 | Un filtro con un operador inválido se rechaza | Error | Aprobado |

### 6.3 Juan Pablo — productividad

| Caso | Escenario | Tipo | Resultado |
|---|---|---|---|
| CP-11-01 | Crear una respuesta predefinida e insertarla en el chat | Exitoso | Aprobado |
| CP-11-03 | Un código corto repetido se rechaza | Error | Aprobado |
| CP-12-01 | Ejecutar una macro que etiqueta, asigna un equipo y resuelve | Exitoso | Aprobado |
| CP-12-02 | Una macro personal no la ve otro agente; la global sí | Alternativo | Aprobado |
| CP-13-01 | La regla etiqueta la conversación cuando llega un mensaje con "factura" | Exitoso | Aprobado |
| CP-13-03 | El retraso de ejecución solo acepta de 10 a 43 200 minutos (esquema: 9, 10, 43 200 y 43 201) | Error (valores límite) | 4 de 4 aprobados |
| CP-14-01 | Crear un equipo y agregarle dos agentes | Exitoso | Aprobado |
| CP-14-03 | Un agente sin rol de administrador no puede crear equipos | Error | Aprobado |
| CP-15-01 | Ver las métricas de conversaciones de los últimos 7 días | Exitoso | Aprobado |
| CP-15-03 | Un agente sin permisos no puede consultar los reportes | Error | Aprobado |

## 7. Resultados

Corrida completa del 15 de noviembre de 2026 (`screenplay_run_completo.txt`): 33 ejecuciones, 33 aprobadas, en 4 minutos. El escenario más lento es CP-07-01 (cerca de 2 minutos), porque la importación de contactos la procesa Sidekiq en segundo plano y el escenario espera a que los tres contactos existan.

Durante la automatización se ajustaron tres localizadores, sin cambios en la aplicación:

- El selector de agente del panel: el XPath relativo se evaluaba desde la raíz del documento; se reemplazó por un localizador acotado al bloque "Assigned Agent".
- "Import contacts" aparece en el menú y en el diálogo oculto; se elige el elemento visible.
- La ejecución de la macro: con muchas macros de corridas anteriores, la nueva quedaba fuera de la vista del panel y la tarea cerraba la sección en lugar de desplazarse. Ahora revisa si la sección está desplegada y lleva la macro a la vista antes de ejecutarla. El escenario pasó de forma estable en corridas repetidas.

## 8. Cómo reproducirlo

```bash
# Desde la raíz del repositorio: Chatwoot 4.19.1 con las correcciones y los datos de prueba (ver qa/README.md)
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d

cd qa/screenplay
npm install
npm test               # los 33
npm run test:luisa     # RF-01 a RF-05
npm run test:daniel    # RF-06 a RF-10
npm run test:juanpablo # RF-11 a RF-15
npm run test:gherkin   # verifica que todos los pasos tengan definición, sin ejecutar
npm run test:report    # abre el reporte HTML de Serenity/JS
```

Para ver el navegador mientras corre: `HEADLESS=false npm test`.
