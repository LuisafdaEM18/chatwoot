# Criterio 7 — Pruebas automatizadas con Cypress y otras herramientas

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Cada integrante automatizó con Cypress los tres casos de cada uno de sus cinco requisitos (CP-XX-01 exitoso, CP-XX-02 alternativo y CP-XX-03 de error), con los mismos IDs de la matriz de trazabilidad. Los casos mezclan interfaz y API: la interfaz se recorre como lo haría un agente y el resultado se comprueba también en el servidor con `cy.request`.

| Integrante | Archivos | Casos | Resultado |
|---|---|---|---|
| Luisa | `qa/cypress/e2e/luisa/rf01` a `rf05` | 16 (RF-01 tiene dos casos de error: otra cuenta y D-01) | 16 / 16 |
| Daniel | `qa/cypress/e2e/daniel/rf06` a `rf10` | 15 | 15 / 15 |
| Juan Pablo | `qa/cypress/e2e/juanpablo/rf11` a `rf15` | 15 | 15 / 15 |
| Humo | `qa/cypress/e2e/smoke` | 2 | 2 / 2 |
| **Total** | 16 archivos | **48** | **48 / 48** |

Complementan a Cypress las herramientas ya usadas en el proyecto para el lenguaje de cada capa:

| Herramienta | Capa | Pruebas | Criterio |
|---|---|---|---|
| RSpec (request specs) | API del backend en Ruby | 78 de caja negra + 17 de TDD | 5 y 6 |
| Vitest | Store y componentes Vue | 57 de caja blanca + 9 de TDD | 5 y 6 |
| Cypress `cy.request` | API REST de la aplicación desplegada | Dentro de los 48 casos (setup, verificación y casos de error) | 7 |

## 2. Entorno

| Elemento | Valor |
|---|---|
| Aplicación | Imagen `chatwoot/chatwoot:v4.19.1` con `qa/docker-compose.e2e.yaml` |
| Correcciones del equipo | Los 6 archivos del backend corregidos (D-01 a D-04, D-06, D-08) se montan sobre la imagen. Son idénticos en la etiqueta v4.19.1 y en la base de la rama, así que el resto del código es el de 4.19.1. Las correcciones del frontend (D-05, D-07, M-01) necesitan recompilar los assets y se prueban con Vitest. |
| Base de datos | PostgreSQL 16 (pgvector) y Redis de `docker-compose.production.yaml` |
| Datos | `qa/scripts/create_qa_data.rb`: cuenta "QA Chatwoot" con administrador, dos agentes y bandeja API; cuenta ajena "QA Otra Cuenta" con su propia conversación; función `delayed_automations` activa |
| Cypress | 13.17.0, Electron 118, 1366×768, reporte `cypress-mochawesome-reporter` en `qa/reports/cypress/index.html` |
| Rack::Attack | Desactivado en el entorno E2E (`ENABLE_RACK_ATTACK=false`), porque limita el inicio de sesión a 5 por IP cada 5 minutos. Se reactiva con `QA_ENABLE_RACK_ATTACK=true`. |

## 3. Diseño de la suite

- **Un archivo por RF y un `it` por caso de la matriz.** El nombre del `it` empieza con el ID (`CP-04-03 (error): ...`), así el reporte se cruza directo con la matriz.
- **Datos propios en cada prueba.** Cada caso crea por API su contacto, conversación, etiqueta o equipo con un nombre único (`Date.now()`), así que las pruebas son independientes y se pueden repetir sin limpiar la base.
- **Comandos comunes** en `qa/cypress/support/commands.js`:

| Comando | Para qué |
|---|---|
| `cy.loginAs(rol)` | Inicia sesión por la interfaz y guarda la sesión (`cy.session`) |
| `cy.visitAccount(ruta)` | Abre una página de la cuenta y borra antes la caché local de Chatwoot (IndexedDB `cw-store-<cuenta>`), para que la interfaz vea lo que la prueba creó por API |
| `cy.api(método, ruta, cuerpo, rol)` | Llama la API con el token del rol (`api_access_token`), sin fallar por el código de estado |
| `cy.apiShould(ruta, aserción)` | Reintenta la consulta hasta que la aserción se cumple; sirve para lo que el servidor procesa en segundo plano |
| `cy.createConversation()` | Crea contacto, conversación y mensaje entrante |
| `cy.openConversation()`, `cy.openConversationActions()`, `cy.chooseInDropdown()` | Navegación de la vista de conversación |

- **Errores del propio Chatwoot que se ignoran** (`support/e2e.js`): el aviso `ResizeObserver loop` y los `ConstraintError`/`AbortError` de IndexedDB que aparecen al borrar la caché entre páginas.

## 4. Casos por integrante

### 4.1 Luisa — conversaciones

| Caso | Tipo | Qué hace la prueba | Verificación |
|---|---|---|---|
| CP-01-01 | Exitoso | Resuelve la conversación con el botón Resolve | Toast "Conversation status changed", botón Reopen, estado `resolved` en la API y fuera de la lista de abiertas |
| CP-01-02 | Alternativo | Pospone hasta mañana desde el menú (barra de comandos con shadow DOM) y vuelve a abrir | Estado `snoozed` con fecha futura y luego `open` |
| CP-01-03 | Error | Cambia por API el estado de una conversación de otra cuenta | 401 y la conversación ajena sigue abierta |
| CP-01-03 (D-01) | Error | Envía un estado que no existe | 422 y la conversación sigue abierta |
| CP-02-01 | Exitoso | Asigna "QA Agente" desde el selector del panel | Toast y asignado en la API |
| CP-02-02 | Alternativo | Asigna un equipo desde el panel y luego quita agente y equipo | Equipo en la API y después sin asignado ni equipo |
| CP-02-03 (D-02) | Error | Asigna por API un agente de otra cuenta | 422 con mensaje y se conserva el asignado |
| CP-03-01 | Exitoso | Escribe y envía una respuesta | Mensaje visible, `private: false`, saliente |
| CP-03-02 | Alternativo | Envía una nota privada (Add Note) | Nota visible y `private: true` |
| CP-03-03 | Error | Llega un mensaje con `<img onerror>` y `<script>` | El HTML se muestra como texto, no hay `<img>` y el script no se ejecuta |
| CP-04-01 | Exitoso | Crea la etiqueta en Ajustes y la aplica desde el panel | Toast, chip en la conversación y etiqueta en la API |
| CP-04-02 | Alternativo | Quita la etiqueta desde el chip | Chip eliminado y filtro por etiqueta vacío |
| CP-04-03 | Error | Etiqueta con espacios, con símbolos y repetida | Campo en error y Create desactivado; "Title is invalid" del servidor; 422 al repetir |
| CP-05-01 | Exitoso | Busca el texto de un mensaje | "Messages (1)" con el remitente |
| CP-05-02 | Alternativo | Busca el correo de un contacto | El contacto aparece y la API lo devuelve |
| CP-05-03 | Error | Busca `' OR 1=1 --` y un término inexistente | 200 con listas vacías y mensaje "No results found" |

### 4.2 Daniel — contactos

| Caso | Tipo | Qué hace la prueba | Verificación |
|---|---|---|---|
| CP-06-01 | Exitoso | Crea un contacto con nombre, correo y teléfono +57300XXXXXXX | El diálogo se cierra y la API devuelve nombre, correo y teléfono E.164 |
| CP-06-02 | Alternativo | Edita el teléfono desde el detalle y elimina el contacto | Teléfono nuevo en la API y luego 404 |
| CP-06-03 | Error | Teléfono sin +, de 16 dígitos, correo repetido (en mayúsculas) y correo sin @ | 422 por API; 422 desde el diálogo con el atributo `email`; botón Save desactivado |
| CP-07-01 | Exitoso | Importa un CSV de tres contactos desde la interfaz | Mensaje de importación y los tres contactos en la API |
| CP-07-02 | Alternativo | Importa un CSV con un contacto ya existente | El nuevo se crea y el existente no se duplica |
| CP-07-03 | Error | Importa sin archivo y con columnas desconocidas | 422 sin archivo; ningún contacto creado con columnas malas |
| CP-08-01 | Exitoso | Escribe y guarda una nota en el detalle del contacto | Nota visible y en la API |
| CP-08-02 | Alternativo | Borra una nota con la papelera | La nota desaparece y la API queda vacía |
| CP-08-03 | Error | Nota vacía y de solo espacios | 422 por API y botón Save note desactivado |
| CP-09-01 | Exitoso | Crea en Ajustes un atributo de contacto de tipo número | Toast y el contacto muestra el valor 150 |
| CP-09-02 | Alternativo | Atributo de tipo lista con la opción Premium | El contacto muestra "Premium" |
| CP-09-03 (D-03) | Error | Clave con espacios en el formulario; clave con símbolos, repetida y tipo inexistente por API | Campo en error y Create desactivado; 422 en los tres casos de API |
| CP-10-01 | Exitoso | Filtra por nombre desde el panel de filtros y guarda el segmento | Un solo contacto y segmento guardado con la condición |
| CP-10-02 | Alternativo | Dos condiciones con O, y luego con Y | O devuelve ambos contactos; Y ninguno |
| CP-10-03 | Error | Operador inválido y atributo inexistente | 422 con "Invalid operator" e "Invalid attribute key" |

La importación de CSV tarda: Chatwoot procesa el archivo un minuto después de subirlo (`DataImportJob.set(wait: 1.minute)`), así que esas pruebas consultan la API hasta 100 segundos.

### 4.3 Juan Pablo — productividad

| Caso | Tipo | Qué hace la prueba | Verificación |
|---|---|---|---|
| CP-11-01 | Exitoso | Crea la respuesta en Ajustes y la inserta escribiendo `/código` en el chat | El editor contiene el texto de la respuesta |
| CP-11-02 | Alternativo | Edita una respuesta y la busca por parte del código | Aparece primero en la API y en la lista |
| CP-11-03 | Error | Código repetido y respuesta sin contenido | 422 por API y Submit desactivado sin mensaje |
| CP-12-01 | Exitoso | Ejecuta desde el panel una macro que etiqueta, asigna equipo y resuelve | Toast y conversación resuelta, etiquetada y con el equipo |
| CP-12-02 | Alternativo | Macro personal del administrador y macro global | El agente ve la global y no la personal |
| CP-12-03 | Error | Macro con la acción inexistente `borrar_todo` | 422 "borrar_todo not supported" |
| CP-13-01 | Exitoso | Regla "mensaje contiene factura → etiqueta" y llega un mensaje con la palabra | La conversación recibe la etiqueta |
| CP-13-02 | Alternativo | Desactiva la regla desde la interfaz (con confirmación) | Regla inactiva y la conversación no recibe la etiqueta |
| CP-13-03 | Error | Retraso de 9 y 43 201 minutos, y 10 como control | 422, 422 y 200 |
| CP-14-01 | Exitoso | Crea el equipo desde Ajustes y le agrega dos agentes | Los dos agentes son miembros |
| CP-14-02 | Alternativo | Equipo "QA-Soporte-…" y retiro de un miembro | Nombre en minúsculas y solo queda un miembro (también en la interfaz) |
| CP-14-03 (D-08) | Error | Un agente intenta crear un equipo; petición de miembros sin `user_ids` | 401 y 422 |
| CP-15-01 | Exitoso | Abre el reporte de conversaciones de los últimos 7 días | Métricas presentes y `conversations_count` mayor que 0 en la API |
| CP-15-02 | Alternativo | Reporte de agentes con rango personalizado y descarga | La descarga responde 200 con el rango pedido |
| CP-15-03 | Error | Un agente consulta los reportes por API | 401 |

## 5. Hallazgos de la automatización

| ID | RF | Hallazgo | Estado |
|---|---|---|---|
| D-09 | RF-04 | En el formulario de etiquetas el campo se marca en rojo pero el mensaje de error nunca aparece. `getLabelTitleErrorMessage` (`settings/labels/validations.js`) pregunta `!validation.title.required`; con Vuelidate 2 eso es un objeto, nunca falso, así que devuelve un texto vacío. Además, el frontend solo valida espacios: "qa!" pasa y lo rechaza el servidor. | Corregido en el criterio 15 |
| D-10 | RF-09 | En el formulario de atributos, una clave con espacios muestra "Key is required" en lugar de "Invalid key". `keyErrorMessage` (`AddAttribute.vue`) compara `!this.v$.attributeKey.isKey`, que también es un objeto. | Corregido en el criterio 15 |
| O-01 | RF-07 | La importación de CSV siempre tarda un minuto en procesarse, aunque el archivo esté en disco local (`DataImportJob.set(wait: 1.minute)`). No es un defecto, pero el usuario no recibe aviso en la interfaz cuando termina (solo por correo). | Observación |

Las pruebas E2E comprueban lo que sí funciona en 4.19.1 (campo marcado en error y botón desactivado). Los mensajes correctos se podrán verificar cuando se corrijan D-09 y D-10 y se reconstruya la imagen (criterio 15). **Actualización:** D-09 y D-10 se corrigieron en el criterio 15 (TDD en `app/javascript/qa/tdd/criterio15_d09_d10_tdd_front.spec.js`) y sus mensajes se verifican contra la imagen final en `qa/cypress/e2e/despliegue/frontend_corregido.cy.js` (ver `qa/docs/criterio15_refactorizacion_despliegue.md`).

## 6. Resultados

Corrida completa del 14 de noviembre de 2026 (`npm run cy:run`), salida en `qa/evidencias/cypress/cypress_run_completo.txt` y reporte HTML en `qa/reports/cypress/index.html` (se genera, no se sube):

| Archivo | Casos | Aprobados | Duración |
|---|---|---|---|
| luisa/rf01_cambio_estado | 4 | 4 | 8 s |
| luisa/rf02_asignacion | 3 | 3 | 8 s |
| luisa/rf03_mensajes_notas | 3 | 3 | 11 s |
| luisa/rf04_etiquetas | 3 | 3 | 10 s |
| luisa/rf05_busqueda | 3 | 3 | 7 s |
| daniel/rf06_contactos | 3 | 3 | 11 s |
| daniel/rf07_importacion_csv | 3 | 3 | 3 min 29 s |
| daniel/rf08_notas_contacto | 3 | 3 | 5 s |
| daniel/rf09_atributos | 3 | 3 | 7 s |
| daniel/rf10_filtros_segmentos | 3 | 3 | 4 s |
| juanpablo/rf11_respuestas_predefinidas | 3 | 3 | 9 s |
| juanpablo/rf12_macros | 3 | 3 | 5 s |
| juanpablo/rf13_automatizacion | 3 | 3 | 14 s |
| juanpablo/rf14_equipos | 3 | 3 | 4 s |
| juanpablo/rf15_reportes | 3 | 3 | 3 s |
| smoke/dashboard | 2 | 2 | 2 s |
| **Total** | **48** | **48** | **5 min 26 s** |

Los casos de error de D-01, D-02, D-03, D-04 y D-08 pasan contra la aplicación desplegada con las correcciones del backend, lo que confirma las correcciones de extremo a extremo y no solo en RSpec.

**Diferencias entre lo planeado y lo ejecutado**

| Caso | Planeado | Ejecutado | Motivo |
|---|---|---|---|
| CP-02-03 | Agente que no pertenece a la bandeja | Agente de otra cuenta | Chatwoot permite asignar a cualquier agente de la cuenta aunque no esté en la bandeja; el caso de rechazo real es el de otra cuenta (D-02) |
| CP-03-01 y CP-03-02 | Verificar en el widget del cliente | Verificar el campo `private` y el tipo del mensaje | La bandeja de pruebas es de tipo API y no tiene widget |
| CP-06-01 | Teléfono +573001234567 | +57300 y 7 dígitos que cambian | El teléfono es único por cuenta; con un número fijo la prueba solo pasa una vez |
| CP-09-01 y CP-09-02 | Asignar el valor desde la interfaz | Valor por API y verificación en la interfaz | El editor de atributos del contacto no tiene selectores estables; lo que se prueba del RF es crear el atributo y mostrar el valor |
| CP-10-02, CP-12-02, CP-12-03, CP-13-03, CP-15-03 | Cypress | Cypress con `cy.request` | Son reglas del servidor (operadores, permisos, validaciones) |

**Problemas del entorno resueltos durante la ejecución**

| Problema | Solución |
|---|---|
| Rack::Attack bloqueaba el inicio de sesión después de 5 intentos en 5 minutos | `ENABLE_RACK_ATTACK=false` en el entorno E2E |
| Después de muchas corridas, el inicio de sesión respondía 409 (límite de 25 sesiones por usuario) | `create_qa_data.rb` cierra las sesiones de los usuarios de prueba y el entorno E2E usa `MAX_USER_SESSIONS=500` |
| La interfaz no mostraba etiquetas o equipos recién creados por API | `cy.visitAccount` borra la caché IndexedDB de Chatwoot antes de cargar la página |

## 7. Cómo reproducirlo

```bash
# Desde la raíz del repositorio
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml run --rm rails bundle exec rails db:chatwoot_prepare
docker compose -f docker-compose.production.yaml cp qa/scripts/create_qa_data.rb rails:/tmp/create_qa_data.rb
MSYS_NO_PATHCONV=1 docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD='<contraseña>' rails bundle exec rails runner /tmp/create_qa_data.rb
# Copiar la salida en qa/cypress.env.json (ver qa/cypress.env.example.json)

cd qa
npm install
npm run cy:run        # o cy:luisa, cy:daniel, cy:juanpablo
```

El reporte HTML queda en `qa/reports/cypress/index.html` y las capturas de los fallos en `qa/cypress/screenshots`.
