# Criterio 4 — Ejecución del plan de pruebas

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

Este documento consolida la ejecución del plan: qué se ejecutó, en qué entorno, con qué datos, con qué resultados, qué defectos aparecieron, cuánto se cubrió y en qué se diferenció lo ejecutado de lo planeado. El detalle de cada tipo de prueba está en los documentos de los criterios 6, 7, 8, 11, 13 y 14 (`qa/docs/`); aquí solo se resumen sus cifras.

| Documento en Drive (carpeta CHATWOOT) | Enlace |
|---|---|
| `Plan_de_Pruebas_Chatwoot` | https://docs.google.com/document/d/1-I2laX04DPaGoWnMko-7PxZCrpS2Lqb6-c0ZSuErIG8/edit |
| `Chatwoot_Matriz_Trazabilidad` | https://docs.google.com/spreadsheets/d/1sNa-VHkeyxcQ2F8Spd9-8p-tksm3csdeBhx3PlWsA6I/edit |

El plan y la matriz viven en Drive y no se pueden leer desde el repositorio; las comparaciones con "lo planeado" de este documento se basan en la estructura de la matriz que describen el `README` y los documentos de los criterios (casos CP-XX-01, CP-XX-02 y CP-XX-03 por requisito).

## 1. Alcance ejecutado

Se ejecutaron los **15 requisitos funcionales**, cinco por integrante, sin dejar ninguno fuera.

| Integrante | RF | Requisitos | Prueba de caja blanca (`spec/qa/caja_blanca/`) |
|---|---|---|---|
| Luisa | RF-01 | Cambio de estado de una conversación | `rf01_toggle_status_spec.rb` |
| | RF-02 | Asignación | `rf02_assignment_service_spec.rb` |
| | RF-03 | Mensajes y notas privadas | `rf03_message_builder_spec.rb` |
| | RF-04 | Etiquetas | `rf04_add_labels_spec.rb` |
| | RF-05 | Búsqueda | `rf05_search_service_spec.rb` |
| Daniel | RF-06 | Gestión de contactos | `rf06_contact_attributes_spec.rb` |
| | RF-07 | Importación de contactos por CSV | `rf07_contact_manager_spec.rb` |
| | RF-08 | Notas de contacto | `rf08_note_spec.rb` |
| | RF-09 | Atributos personalizados | `rf09_custom_attribute_spec.rb` |
| | RF-10 | Filtros y segmentos | `rf10_filter_operation_spec.rb` |
| Juan Pablo | RF-11 | Respuestas predefinidas | `rf11_canned_response_search_spec.rb` |
| | RF-12 | Macros | `rf12_macro_execution_spec.rb` |
| | RF-13 | Reglas de automatización | `rf13_automation_delay_spec.rb` |
| | RF-14 | Equipos | `rf14_team_members_spec.rb` |
| | RF-15 | Reportes | `rf15_drilldown_validator_spec.rb` |

Fuera del alcance (no se probaron como requisito): Captain y el resto de Chatwoot, salvo lo que tocan los 15 RF. El widget de chat se analizó solo de forma estática (hallazgo S-06 del criterio 13).

## 2. Entorno

| Elemento | Valor |
|---|---|
| Aplicación bajo prueba | Imagen `chatwoot/chatwoot:v4.19.1` con `qa/docker-compose.e2e.yaml` (se levanta junto con `docker-compose.production.yaml`) |
| Correcciones del backend | Seis archivos montados sobre la imagen (`conversation.rb`, `custom_attribute_definition.rb`, `custom_filter.rb`, `assignments_controller.rb`, `custom_filters_controller.rb`, `team_members_controller.rb`) más `config/locales/en.yml`. Son idénticos en la etiqueta v4.19.1 y en la base de la rama, así que el resto del código es el de 4.19.1 |
| Base de datos y caché | PostgreSQL 16 (`pgvector/pgvector:pg16`) y Redis (`redis:alpine`) de `docker-compose.production.yaml` |
| Variables del entorno E2E | `ENABLE_RACK_ATTACK=false` (por defecto; `QA_ENABLE_RACK_ATTACK=true` lo reactiva) y `MAX_USER_SESSIONS=500` |
| RSpec | Contenedor `ruby:3.4.4` (`qa/docker-compose.qa.yaml`, perfil `qa`), `RAILS_ENV=test`, base `chatwoot_test`; cobertura con SimpleCov (`qa/simplecov_qa.rb`) |
| Vitest | Desde la raíz con `TZ=UTC`, cobertura V8 |
| E2E | Cypress 13.17.0 con Electron 118 (sin interfaz, Node v22.19.0); Cucumber 13.3 + Serenity/JS 3.48 + Playwright 1.63 con Google Chrome (1366×768) |
| Accesibilidad | axe-core 4.10.2 con cypress-axe 1.5.0 |
| Seguridad | Brakeman 8.0.5, bundle-audit, `pnpm audit`, SonarQube 26.9 Community |
| IA | Ollama en Docker con `llama3.1:8b` y `qwen2.5:7b`; Stagehand, DeepEval, Postbot/newman, Playwright MCP, ReportPortal |
| Integración continua | `Jenkinsfile` en la raíz (RSpec, Vitest, Cypress y SonarQube con Quality Gate) |
| Sistema anfitrión | Windows con Docker (las corridas de RSpec son lentas por eso, ver sección 9) |

## 3. Datos de prueba

| Dato | Origen |
|---|---|
| Cuenta "QA Chatwoot" con administrador (`qa.admin@chatwoot.test`), agente (`qa.agent@…`) y segundo agente (`qa.agent2@…`, sin acceso a la bandeja) | `qa/scripts/create_qa_data.rb` (idempotente; lee `QA_PASSWORD`) |
| Bandeja API "QA API" | Mismo script |
| Cuenta ajena "QA Otra Cuenta" con administrador, bandeja, contacto y conversación propios | Mismo script; sirve de atacante y de objetivo en los casos de error y de seguridad |
| Función `delayed_automations` activa | Mismo script (RF-13) |
| IDs y tokens de API | El script los imprime en JSON y se copian a `qa/cypress.env.json` (no se sube al repositorio; plantilla `qa/cypress.env.example.json`) |
| Datos por caso | Cada prueba crea por API su contacto, conversación, etiqueta o equipo con nombre único (`Date.now()`), así son independientes y repetibles sin limpiar la base |
| RSpec | Fábricas de Chatwoot, `build_stubbed` y dobles; los 999 filtros del límite se crean con `insert_all` |
| Archivo CSV | Se genera dentro de las pruebas de RF-07 (tres contactos; uno ya existente en el caso alternativo) |
| Pruebas con usuarios (criterio 12) | Tareas, participantes, SUS, tiempos y errores en [`Chatwoot_Criterio12_Usabilidad`](https://docs.google.com/document/d/1-Dx2kZ0vw6gABLmvIT4rk_J3lILsoYXO6WszKECckMo/edit) y [`Chatwoot_Usabilidad_Resultados`](https://docs.google.com/spreadsheets/d/1ZPGHADNQtWdL5dTVQOX-i6DFj5nh44o1C9wZgBT6dwk/edit) en Drive |

## 4. Procedimiento

Orden de ejecución, de lo más interno a lo más externo:

| Paso | Qué se ejecuta | Comando |
|---|---|---|
| 1 | Levantar la aplicación y preparar la base | `docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d` y `... run --rm rails bundle exec rails db:chatwoot_prepare` |
| 2 | Crear los datos de prueba | `docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD=... rails bundle exec rails runner /tmp/create_qa_data.rb` |
| 3 | Caja blanca, caja negra, TDD, unitarias y regresión del backend | `docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa` |
| 4 | Frontend (caja blanca, TDD, regresión) con cobertura | `TZ=UTC npx vitest --no-watch app/javascript/qa --coverage --coverage.reportsDirectory=qa/reports/coverage-front` |
| 5 | Humo y E2E de los 15 RF | `cd qa && npm run cy:smoke` y `npm run cy:run` (o `cy:luisa`, `cy:daniel`, `cy:juanpablo`) |
| 6 | Gherkin y Screenplay | `cd qa/screenplay && npm test` |
| 7 | Accesibilidad | `cd qa && npm run cy:accesibilidad` |
| 8 | Seguridad dinámica | `cd qa && npm run cy:seguridad`; fuerza bruta con Rack::Attack activo: `QA_ENABLE_RACK_ATTACK=true docker compose ... up -d rails` y `npm run cy:seguridad:rack` |
| 9 | Seguridad estática y dependencias | Brakeman, `bundle-audit check --update`, `pnpm audit --prod`, SonarQube |
| 10 | IA aplicada a testing | Stagehand, DeepEval, Postbot/newman, Playwright MCP y ReportPortal (`qa/ia/README.md`) |

El ciclo de TDD (rojo, verde, refactor) se corrió por defecto corregido antes de los pasos 5 a 10, y las correcciones del backend entraron al entorno E2E montadas como volúmenes. La fase roja de un defecto se reproduce revirtiendo su corrección y corriendo su archivo de prueba (criterio 6, sección 6).

## 5. Resultados por nivel y tipo de prueba

Todas las cifras salen de las evidencias indicadas.

| Nivel | Tipo | Herramienta | Casos | Pasan | Fallan | Evidencia |
|---|---|---|---|---|---|---|
| Unitaria | TDD backend (corrección verde) | RSpec | 17 | 17 | 0 (rojo: 10) | `qa/evidencias/tdd/back_1_rojo.txt`, `back_2_verde.txt` |
| Unitaria | TDD backend, ajuste D-02 para Captain | RSpec | 18 (con el spec original de asignaciones) | 18 | 0 (rojo: 1) | `back_9_captain_rojo.txt`, `back_10_captain_verde_y_regresion.txt` |
| Unitaria | Unitarias con dobles | RSpec | 16 | 16 | 0 | `back_4_unitarias.txt` |
| Unitaria | TDD frontend (tras el refactor) | Vitest | 9 | 9 | 0 (rojo: 4 de 8) | `front_1_rojo.txt`, `front_2_verde.txt`, `front_4_refactor_regresion.txt` |
| Caja blanca | Backend, una función por RF | RSpec | 60 `it` en 15 archivos (conteo estático) | Dentro de la regresión de 169 y de 255 | 0 | `spec/qa/caja_blanca`, `back_3_refactor_regresion.txt` |
| Caja blanca | Frontend (store y componentes) | Vitest | 57 | 57 | 0 | `app/javascript/qa/caja_blanca`; criterio 7, sección 1 |
| Caja negra | API del backend | RSpec | 78 (49 bloques `it`, varios dentro de bucles) | Dentro de la regresión | 0 | `spec/qa/caja_negra`; criterio 7, sección 1 |
| Regresión | Backend acotada (equipo + originales de Chatwoot) | RSpec | 169 | 169 | 0 | `back_3_refactor_regresion.txt` (9 min 49 s) |
| Regresión | Backend completa de conversaciones | RSpec | 255 | 251 | 4 | `back_6_regresion_completa.txt`; las 4 son pruebas de tiempo originales de Chatwoot que fallan igual sin las correcciones (`back_7_...txt`, `back_8_...txt`) |
| Regresión | Frontend (suites del equipo + originales) | Vitest | 405 en 23 archivos | 405 | 0 | `front_3_regresion.txt`, `front_4_refactor_regresion.txt` |
| E2E | Humo + 15 RF (CP-XX-01/02/03) | Cypress | 48 en 16 archivos | 48 | 0 | `qa/evidencias/cypress/cypress_run_completo.txt` (14 nov 2026, 5 min 26 s) |
| E2E | Gherkin, BDD, Screenplay | Cucumber + Serenity/JS + Playwright | 33 ejecuciones (30 escenarios) | 33 | 0 | `qa/evidencias/screenplay/screenplay_run_completo.txt`, `reporte_serenity/summary.json` (30 aprobados, 4 min 2 s) |
| No funcional | Accesibilidad (axe, WCAG 2.0 y 2.1 A y AA) | Cypress + axe | 14 pantallas | 14 (declaran 19 barreras conocidas) | 0 | `qa/cypress/e2e/accesibilidad`, criterio 11 |
| No funcional | Seguridad dinámica OWASP | Cypress | 28 (25 + 3 de fuerza bruta) | 28 | 0 | `qa/evidencias/seguridad/cypress_seguridad.txt`, `cypress_fuerza_bruta.txt`, `rails_log_fuerza_bruta.txt` |
| No funcional | Seguridad estática y dependencias | Brakeman, SonarQube, bundle-audit, pnpm audit | Brakeman: 40 advertencias; SonarQube: 0 vulnerabilidades en los 15 RF | 6 advertencias de RF: falsos positivos | 6 hallazgos (S-01 a S-06) | `qa/evidencias/seguridad/` |
| IA | Stagehand (un flujo por integrante) | Stagehand + qwen2.5:7b | 3 | 3 | 0 | `qa/evidencias/ia/stagehand_run.txt` |
| IA | DeepEval (métricas del componente de IA) | DeepEval + llama3.1:8b | 38 métricas | 31 | 7 | `qa/evidencias/ia/deepeval_*.txt` |
| IA | Postbot | newman | 7 aserciones | 7 | 0 | `postbot_newman_juanpablo.txt` |
| IA | Playwright MCP + Copilot | Playwright | 2 | 2 | 0 | `playwright_mcp_luisa.xml` |
| IA | ReportPortal | ReportPortal 11 servicios | 1 launch con 15 pruebas | 15 | 0 | `reportportal_envivo.txt`, `reportportal_launches.jpg` |

Notas sobre las cifras:

- **Caja blanca y caja negra del backend**: los conteos de 60 y 49 son estáticos (bloques `it` en los archivos). La cifra de 78 de caja negra es la del criterio 7 y cuenta los casos que se generan en bucles `each`. Esas pruebas se ejecutaron dentro de las corridas de regresión; no hay una salida separada que dé su resultado solo.
- **Cypress por integrante** (criterio 7): Luisa 16 de 16 (RF-01 tiene dos casos de error), Daniel 15 de 15, Juan Pablo 15 de 15 y humo 2 de 2. Hay 46 casos de matriz (45 más el caso extra de D-01) y 2 de humo.
- **Screenplay**: Cucumber cuenta 33 ejecuciones porque el esquema de RF-13 corre una vez por cada uno de sus 4 ejemplos; el reporte de Serenity/JS muestra 30 escenarios.
- **DeepEval** por integrante: Luisa 11 de 15, Daniel 5 de 8, Juan Pablo 15 de 15.

## 6. Defectos

| ID | Integrante | RF | Defecto | Severidad estimada | Justificación | Detectado por | Estado |
|---|---|---|---|---|---|---|---|
| D-01 | Luisa | RF-01 | Un estado inexistente en `toggle_status` respondía 500 | Media | Error de servidor por entrada inválida; no pierde datos y la conversación sigue abierta | Caja negra backend (`luisa_conversaciones_spec.rb`); TDD `luisa_tdd_spec.rb` | Corregido y verificado (TDD, Cypress CP-01-03 D-01) |
| D-02 | Luisa | RF-02 | Asignar un agente de otra cuenta respondía 200 y dejaba la conversación sin asignado | Alta | Rompe el aislamiento entre cuentas y deja la conversación sin responsable sin avisar | Caja negra backend; TDD `luisa_tdd_spec.rb` | Corregido y verificado (TDD, Cypress CP-02-03; ajuste para asistentes Captain con regresión de 18 ejemplos) |
| D-03 | Daniel | RF-09 | Un tipo de atributo inexistente respondía 500 | Media | Error de servidor por entrada inválida, sin pérdida de datos | Caja negra backend (`daniel_contactos_spec.rb`); TDD `daniel_tdd_spec.rb` | Corregido y verificado (TDD, Cypress CP-09-03) |
| D-04 | Daniel | RF-10 | El filtro número 1000 se guardaba pero la API respondía 422 | Media | El usuario ve un error aunque el registro se creó; puede reintentar y confundirse | Caja negra backend; TDD `daniel_tdd_spec.rb` | Corregido y verificado (TDD, regresión) |
| D-05 | Daniel | RF-07 | Una importación fallida por error de red mostraba "importación exitosa" | Alta | Información falsa: el usuario cree que importó contactos que no existen | Caja blanca frontend (`daniel_contactos_front.spec.js`); TDD `daniel_tdd_front.spec.js` | Corregido y verificado con Vitest y con Cypress contra la imagen final (criterio 15) |
| D-06 | Daniel | RF-10 | Con 1000 filtros no se podía editar ninguno | Media | Bloquea una función (editar) solo al llegar al límite; el caso es poco frecuente | TDD de D-04 (al escribir `daniel_tdd_spec.rb`) | Corregido y verificado (TDD) |
| D-07 | Luisa | RF-01 | Si fallaba el cambio de estado, la interfaz decía "Estado de la conversación cambiado" | Alta | Información falsa sobre el estado de una conversación que sigue sin cambiar | Caja blanca frontend (`luisa_conversaciones_front.spec.js`); TDD `luisa_tdd_front.spec.js` | Corregido y verificado con Vitest y con Cypress contra la imagen final (criterio 15) |
| D-08 | Juan Pablo | RF-14 | `team_members` sin `user_ids` respondía 500 | Media | Error de servidor por parámetro faltante en POST, PATCH y DELETE | Caja negra backend (`juanpablo_productividad_spec.rb`); TDD `juanpablo_tdd_spec.rb` | Corregido y verificado (TDD, Cypress CP-14-03) |
| M-01 | Juan Pablo | RF-14 | El error al crear un equipo no mostraba el mensaje del servidor (`[object Object]`) | Baja | Mejora de usabilidad; el error se ve, pero sin la causa | Caja blanca frontend (`juanpablo_productividad_front.spec.js`); TDD `juanpablo_tdd_front.spec.js` | Corregido y verificado con Vitest y con Cypress contra la imagen final (criterio 15) |
| H-01 | Luisa | RF-01 | Código muerto en `Conversation#toggle_status` (rama que nunca se ejecuta) | Baja | No cambia el comportamiento; solo complejidad (V(G) de 4 a 2) | Caja blanca (`rf01_toggle_status_spec.rb`, cobertura de ramas de SimpleCov) | Corregido (refactor) y verificado con las 4 pruebas de transición |

Severidad: **alta** (el usuario recibe información falsa o se rompe el aislamiento entre cuentas), **media** (error del servidor o función bloqueada en un caso límite), **baja** (mejora o código muerto). Es una estimación del equipo; el plan no fija una escala (ver sección 9).

Detalle de cada defecto, con su rojo y su verde: criterio 6, sección 3.

### 6.1 Otros hallazgos

| ID | Origen | Hallazgo | Estado |
|---|---|---|---|
| D-09 | Cypress (criterio 7) | El formulario de etiquetas marca el campo en rojo pero no muestra el mensaje de error (RF-04) | Corregido en el criterio 15 |
| D-10 | Cypress (criterio 7) | El formulario de atributos muestra "Key is required" en lugar de "Invalid key" (RF-09) | Corregido en el criterio 15 |
| O-01 | Cypress (criterio 7) | La importación tarda un minuto y no avisa en pantalla al terminar (RF-07) | Observación |
| B-01 a B-19 | axe y revisión manual (criterio 11) | 19 barreras de accesibilidad (14 de nivel A y 5 de AA) | Documentadas, sin corregir |
| S-01 a S-06 | Seguridad (criterio 13) | 2 altos (Rails y paquetes desactualizados), 2 medios, 2 bajos | Documentados, sin corregir |

## 7. Cobertura

### 7.1 Cobertura de requisitos

| Medida | Valor |
|---|---|
| Requisitos con al menos un caso Cypress y un escenario Screenplay | 15 de 15 |
| Casos CP-XX-01 (exitoso), CP-XX-02 (alternativo) y CP-XX-03 (error) por requisito | 3 por RF; ejecutados 46 en Cypress (incluye el caso extra de D-01) |
| Requisitos con una función de caja blanca analizada (un archivo por RF) | 15 de 15 |
| Requisitos con pantalla revisada en accesibilidad | 15 de 15 (14 pantallas) |
| Requisitos con ataque de seguridad dinámico | 14 de 15 (todos salvo RF-07, importación CSV) |

### 7.2 Cobertura de código

| Alcance | Líneas | Ramas | Fuente |
|---|---|---|---|
| Backend, regresión acotada (169 ejemplos), todo Chatwoot | 11,02 % (5 363 de 48 671) | — | `back_3_refactor_regresion.txt` |
| Backend, regresión completa (255 ejemplos), todo Chatwoot | 13,42 % (6 509 de 48 486) | — | `back_6_regresion_completa.txt` |
| Backend, último reporte local de SimpleCov | 11,01 % | 16,45 % | `qa/reports/coverage/.last_run.json` |
| Backend, métodos corregidos (ver tabla de abajo) | 100 % en los métodos de la tabla | 100 % | `back_5_cobertura_seleccion.txt` |
| Frontend, 6 archivos de código bajo prueba (66 pruebas) | 38,68 % (429 de 1 109) | 88 % (44 de 50); funciones 14,94 % | `front_5_cobertura.txt`, `qa/reports/coverage-front/lcov.info` |

La cifra global del backend mide todo Chatwoot (48 mil líneas) y no es representativa del código seleccionado. Por archivo (criterio 6, sección 5.2): `custom_filter.rb`, `custom_attribute_definition.rb` y `team_members_controller.rb` al 100 %; `assignments_controller.rb` y `custom_filters_controller.rb` al 97 %; `conversation.rb` al 88 %.

Por método corregido:

| Método | Defecto | Líneas | Ramas |
|---|---|---|---|
| `Conversation#toggle_status` | D-01, H-01 | 3 / 3 | 2 / 2 |
| `AssignmentsController#set_agent` e `invalid_assignee?` | D-02 | 4 / 4 y 3 / 3 | 2 / 2 y 2 / 2 |
| `CustomFilter#validate_number_of_filters` | D-04, D-06 | 3 / 3 | 2 / 2 |
| `TeamMembersController` (cinco métodos) | D-08 | 18 / 18 | 2 / 2 |
| Frontend `contacts/actions.js` `import` | D-05 | 13 / 13 | 5 / 5 |
| Frontend `conversations/actions.js` `toggleStatus` | D-07 | 33 / 33 | 3 / 3 |
| Frontend `teams/actions.js` `create` | M-01 | 13 / 13 | 3 / 4 |
| Frontend `CreateTeam.vue` `createTeam` | M-01 | 18 / 18 | 4 / 4 |

La rama que falta en `teams/actions.js` es `error === null`, que Axios nunca produce.

Análisis estático: SonarQube sobre el código de los 15 RF (6 339 líneas) dio 0 vulnerabilidades, 0 security hotspots, calificación de seguridad A y Quality Gate OK; sobre todo `app/` y `lib/` del navegador (57 324 líneas) marcó 3 vulnerabilidades críticas del widget (S-06).

## 8. Métricas

Calculadas con las cifras de las secciones 5, 6 y 7.

| Métrica | Cálculo | Valor |
|---|---|---|
| Tasa de éxito de las suites propias del equipo | (Cypress 48 + Screenplay 33 + TDD backend 17 + TDD frontend 9 + unitarias 16 + accesibilidad 14 + seguridad 28 + Stagehand 3 + Postbot 7 + Playwright MCP 2) = 177 casos, 177 aprobados | 100 % |
| Tasa de éxito E2E (Cypress y Screenplay) | 81 de 81 | 100 % |
| Tasa de éxito de la regresión del backend | 251 de 255 (las 4 fallas son de tiempo y originales de Chatwoot) | 98,4 % |
| Tasa de éxito de la regresión del frontend | 405 de 405 | 100 % |
| Tasa de éxito de DeepEval | 31 de 38 métricas | 81,6 % |
| Defectos corregidos en código (D-01 a D-08) | 8, todos corregidos y verificados | 100 % |
| Defectos y mejoras totales (D-01 a D-08, M-01, H-01) | 10 | 10 |
| Densidad de defectos por RF | 8 defectos / 15 RF (10 con M-01 y H-01: 0,67) | 0,53 |
| Densidad por integrante | Luisa 3 (D-01, D-02, D-07) / 5 RF = 0,6; Daniel 4 (D-03 a D-06) / 5 = 0,8; Juan Pablo 1 (D-08) / 5 = 0,2 | 0,6 / 0,8 / 0,2 |
| Defectos por capa | Backend: D-01, D-02, D-03, D-04, D-06, D-08 (6); frontend: D-05, D-07 (2) | 75 % / 25 % |
| Defectos por severidad estimada | Alta: D-02, D-05, D-07 (3); media: D-01, D-03, D-04, D-06, D-08 (5); baja: M-01, H-01 (2) | 30 % / 50 % / 20 % |
| Fase roja del TDD | Backend 10 de 17 ejemplos fallaron; frontend 4 de 8 | 59 % / 50 % |
| Defectos abiertos tras la ejecución | 19 barreras de accesibilidad y 6 hallazgos de seguridad (D-09 y D-10 se corrigieron en el criterio 15) | 19 + 6 |
| Pruebas por requisito (E2E) | 46 casos de matriz / 15 RF | 3,1 |
| Tiempo de ejecución de las corridas completas | Cypress 5 min 26 s; Screenplay 4 min 2 s; regresión backend acotada 9 min 49 s | — |

## 9. Planeado frente a ejecutado

| Tema | Lo planeado | Lo ejecutado y por qué |
|---|---|---|
| Alcance | 15 RF con casos exitoso, alternativo y de error | Se ejecutaron los 15 RF. RF-01 tiene un caso de error adicional (D-01), así que son 46 casos de matriz en Cypress |
| Componente de IA | Evaluar Captain con DeepEval | Captain no se pudo ejercitar: exige una clave de OpenAI de pago (`CAPTAIN_OPEN_AI_API_KEY`, sin configurar) y la Responses API, que Ollama no implementa. Se evaluó un componente incorporado (`qa/ia/componente/asistente_soporte.py`) que reproduce tres tareas de Captain |
| Modelos de IA | Modelos comerciales | Modelos locales (`llama3.1:8b`, `qwen2.5:7b`) para no usar claves de pago; juzgan peor que GPT-4, y varias de las 7 métricas fallidas de DeepEval reflejan al juez, no el componente |
| Correcciones del frontend | Verificar con E2E | Durante la ejecución del plan, D-05, D-07 y M-01 se probaron solo con Vitest, porque había que recompilar los assets de Chatwoot. En el criterio 15 se construyó la imagen `chatwoot-qa:final` con el frontend recompilado, y `qa/cypress/e2e/despliegue/frontend_corregido.cy.js` los verifica en el navegador (5/5 en la versión final, 0/5 en la original, incluidos D-09 y D-10) |
| Correcciones del backend | Imagen propia | Se montan seis archivos como volúmenes sobre la imagen oficial (`qa/docker-compose.e2e.yaml`), lo que mantiene idéntico el resto del código; comentando esas líneas se prueba la versión original |
| Rack::Attack | Entorno como producción | Desactivado en el E2E: limita el inicio de sesión a 5 por IP cada 5 minutos y Cypress inicia sesión por archivo. La fuerza bruta se probó aparte (3 pruebas, `npm run cy:seguridad:rack`) con Rails reiniciado y la limitación activa |
| Accesibilidad | Cero violaciones | Chatwoot es de terceros y ya trae barreras, así que cada prueba declara las barreras conocidas y falla solo ante una nueva. Pasan 14 de 14 con 19 barreras documentadas; es una prueba de regresión de accesibilidad, no de cumplimiento |
| Seguridad | Probar y corregir | Los 6 hallazgos (S-01 a S-06) se documentaron sin corregir y las dependencias se validaron por versión, sin explotarlas. La prueba de SSRF (S-04) documenta el comportamiento actual, que acepta la URL al guardar |
| Regresión del backend | Regresión completa tras cada corrección | Pasaba de 20 minutos en Docker sobre Windows, así que se acotó a lo que tocan los cambios (169 ejemplos). La corrida completa de conversaciones (255) tuvo 4 fallas de tiempo originales de Chatwoot, que fallan igual sin las correcciones: limitación del entorno local, no regresión |
| Cobertura | Una cifra global | La cobertura global del backend es de 11 a 13 % porque mide todo Chatwoot; el equipo reporta la cobertura por método y archivo corregido (100 % en los métodos de los defectos) |
| Importación CSV (RF-07) | Prueba rápida | Chatwoot procesa el archivo un minuto después de subirlo, así que esas pruebas consultan la API hasta 100 segundos y duran 3 min 29 s, casi dos tercios de la corrida de Cypress |
| ReportPortal | Analizar fallos | Se ejecutó en vivo, pero la suite de Daniel está en verde (15/15), así que el Auto-Analysis corrió sin fallos que clasificar |
| Pruebas de tiempo | Pasan | 4 pruebas originales de `conversation_spec.rb` (líneas 1163, 1191, 1243 y 1266) fallan en este entorno con y sin las correcciones; en Linux deberían pasar |
| Severidad | Escala del plan | No se pudo comprobar en el plan (está en Drive); la de la sección 6 es una estimación del equipo |
| Máquina de ejecución | Una sola | Las corridas vienen de equipos distintos (la salida de Screenplay muestra una ruta de la máquina de Luisa), así que los tiempos no son comparables entre sí |

## 10. Pendientes sin evidencia

| Pendiente | Situación |
|---|---|
| Ejecución del pipeline de Jenkins y su Quality Gate | Existen `Jenkinsfile` y `sonar-project.properties`, pero no hay salida del pipeline en el repositorio. Solo hay evidencia de SonarQube dentro del criterio 13 |
| Reporte HTML de Cypress (`qa/reports/cypress/index.html`) | No está en `qa/reports/` (se genera y no se sube); solo queda la salida de consola y los JUnit de Daniel en `qa/reports/junit/` |
| Resultados por caso en la matriz de trazabilidad de Drive | No se puede verificar desde el repositorio que la matriz ya refleje estas ejecuciones |
| Corrección de D-09 y D-10 y despliegue del frontend corregido | Resuelto en el criterio 15 (`qa/docs/criterio15_refactorizacion_despliegue.md`): imagen `chatwoot-qa:final` y Cypress 81/81 contra ella |
| Verificación E2E de D-05, D-07 y M-01 | Hecha en el criterio 15: `qa/cypress/e2e/despliegue/frontend_corregido.cy.js` pasa 5/5 contra la imagen final y 0/5 contra la original |
| Corrección de las 19 barreras de accesibilidad y los 6 hallazgos de seguridad | Solo documentados |
| Captain evaluado en vivo | Requiere clave de pago; solo se probó el componente incorporado |
| Prueba de las 4 pruebas de tiempo en Linux | No se corrió fuera de Windows/Docker; la afirmación de que pasan es una expectativa |
| Pruebas de rendimiento y carga | No hay pruebas ni evidencias en el repositorio |
