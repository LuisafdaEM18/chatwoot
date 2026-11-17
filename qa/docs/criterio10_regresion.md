# Criterio 10 — Pruebas de regresión

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

La regresión verifica que lo que ya funcionaba se conserva después de corregir los defectos D-01 a D-08, el ajuste de D-02 para asistentes Captain, la mejora M-01 y el refactor H-01 (detalle en `qa/docs/criterio6_tdd_pruebas_unitarias.md`). Tiene dos partes:

| Parte | Qué es | Dónde |
|---|---|---|
| **Suites del equipo por integrante** | 3 archivos por capa (backend, frontend y E2E), uno por integrante, con casos que protegen el comportamiento existente alrededor de cada corrección | `spec/qa/regresion/`, `app/javascript/qa/regresion/`, `qa/cypress/e2e/regresion/` |
| **Specs originales de Chatwoot** | Las pruebas que ya trae el proyecto sobre los modelos, servicios y controladores de los 15 requisitos, incluidos los archivos corregidos | Listas `RSPEC_REGRESION` (27 entradas) y `VITEST_REGRESION` (11 entradas) del `Jenkinsfile` |

Ambas partes corren juntas en el pipeline del criterio 9 (`spec/qa` incluye `spec/qa/regresion`; `cypress/e2e/**` incluye `regresion/` con `INTEGRANTE=todos`). Las suites del equipo se escribieron para pasar **antes y después** de los cambios: no prueban el defecto, prueban lo que no debe romperse.

Hechos que conviene tener presentes antes de leer los resultados:

- Las ejecuciones de qa/evidencias/tdd/ (back_1 a back_10) son de la regresión acotada y completa con los specs originales y de las suites TDD. Las tres suites regresion/ del equipo se ejecutaron en el criterio 15 sobre el código final: RSpec 31/31, Vitest (dentro de 95/95) y Cypress 30/30 (sección 5.6).
- La suite regresion/ de Cypress se corrió también contra la imagen original v4.19.1 (28/30) y contra la final (30/30). Las de RSpec y Vitest no tienen corrida sobre el código original; para ellas, la comparación antes/después (sección 5) se apoya en las suites TDD, los specs originales y las pruebas de tiempo.

## 2. Criterios de selección

1. **Funcionalidad vecina a la corrección.** Para cada defecto se eligió el camino exitoso del mismo requisito que usa el código modificado (por ejemplo, tras D-01, que el estado sin parámetro siga alternando abierta/resuelta).
2. **Comportamiento que debía quedar igual.** Rechazos que ya existían y que la corrección no debe aflojar (el filtro 1001 se sigue rechazando; un teléfono sin `+`; una etiqueta con símbolos).
3. **Los 5 requisitos de cada integrante.** Cada archivo cubre RF-01 a RF-05, RF-06 a RF-10 o RF-11 a RF-15, aunque el requisito no tenga defecto, porque el código compartido (modelos, store, filtros) pudo cambiar.
4. **Las tres capas.** Backend (API con RSpec), frontend (acciones del store y helpers con Vitest) y E2E (Cypress sobre la aplicación en ejecución).
5. **Archivos corregidos completos.** Se corren los specs originales de Chatwoot de los archivos modificados (`conversation_spec.rb`, `custom_filter_spec.rb`, `custom_attribute_definition_spec.rb`, `assignments_controller_spec.rb`, `custom_filters_controller_spec.rb`, `team_members_controller_spec.rb`, entre otros), no solo los casos nuevos.
6. **Costo.** La regresión completa de `conversation_spec.rb` tardó 71 min 36 s en Docker sobre Windows (`back_6_regresion_completa.txt`), por eso existe además una regresión **acotada** (169 ejemplos, 9 min 49 s) con lo que tocan los cambios.

## 3. Catálogo de casos por integrante

Los conteos salen de leer el código fuente (RSpec: bloques `it`, con el ciclo de 8 tipos de RF-09 contado como 8; Vitest: `it`, con `it.each` contado por fila; Cypress: bloques `it`), no de una ejecución.

| Integrante | RSpec | Vitest | Cypress | Total |
|---|---|---|---|---|
| Luisa | 11 | 7 | 10 | 28 |
| Daniel | 14 | 5 | 10 | 29 |
| Juan Pablo | 6 | 9 | 10 | 25 |
| **Total** | **31** | **21** | **30** | **82** |

### 3.1 Luisa — RF-01 a RF-05 (protege D-01, D-02, D-07 y H-01)

| Capa | Caso | Defecto o funcionalidad protegida | Archivo |
|---|---|---|---|
| RSpec | Sin estado alterna de abierta a resuelta y de vuelta a abierta | H-01 (refactor de `toggle_status`) | `spec/qa/regresion/luisa_regresion_spec.rb` |
| RSpec | Sigue aceptando el estado pendiente | D-01 (enum con `validate: true`) | ídem |
| RSpec | Sigue posponiendo con fecha de reactivación | D-01 / H-01 | ídem |
| RSpec | Un agente con acceso a la bandeja sigue pudiendo resolver | RF-01, permisos | ídem |
| RSpec | Sigue asignando un agente de la cuenta | D-02 | ídem |
| RSpec | Sigue quitando el agente con `assignee_id` nulo | D-02 | ídem |
| RSpec | Sigue asignando un bot de la cuenta | D-02 (ajuste `assignee_type`) | ídem |
| RSpec | Sigue asignando y quitando un equipo | D-02 | ídem |
| RSpec | Sigue guardando mensajes públicos y notas privadas | RF-03 | ídem |
| RSpec | Sigue creando etiquetas y reemplazando las de una conversación | RF-04 | ídem |
| RSpec | Sigue encontrando un contacto por su correo | RF-05 | ídem |
| Vitest | Resolver guarda el estado que devuelve la API; posponer guarda la fecha de reactivación (2 casos) | D-07 (camino exitoso de `toggleStatus`) | `app/javascript/qa/regresion/luisa_regresion.spec.js` |
| Vitest | Asignar agente y asignar equipo actualizan la conversación (2 casos) | RF-02 | ídem |
| Vitest | Un mensaje nuevo pasa de "en progreso" a "enviado" | RF-03 | ídem |
| Vitest | Crear una etiqueta la agrega al store | RF-04 | ídem |
| Vitest | La búsqueda global consulta los cuatro grupos | RF-05 | ídem |
| Cypress | Resolver y volver a abrir desde la conversación | D-01 / H-01 / D-07 | `qa/cypress/e2e/regresion/luisa.cy.js` |
| Cypress | Un estado inexistente se rechaza y la conversación sigue abierta | D-01 | ídem |
| Cypress | Asignar un agente desde el panel | D-02 | ídem |
| Cypress | Quitar el agente con `assignee_id` nulo; un agente ajeno se rechaza | D-02 | ídem |
| Cypress | Responder al cliente guarda un mensaje público; una nota privada se guarda como privada (2 casos) | RF-03 | ídem |
| Cypress | Crear una etiqueta válida; una etiqueta con símbolos se rechaza (2 casos) | RF-04 | ídem |
| Cypress | Buscar el texto de un mensaje encuentra la conversación; un término inexistente muestra que no hay resultados (2 casos) | RF-05 | ídem |

### 3.2 Daniel — RF-06 a RF-10 (protege D-03, D-04, D-05 y D-06)

| Capa | Caso | Defecto o funcionalidad protegida | Archivo |
|---|---|---|---|
| RSpec | Sigue creando, editando y eliminando un contacto | RF-06 | `spec/qa/regresion/daniel_regresion_spec.rb` |
| RSpec | Sigue aceptando un archivo y registrando la importación | RF-07 | ídem |
| RSpec | Sigue creando y eliminando notas | RF-08 | ídem |
| RSpec | Sigue aceptando cada uno de los 8 tipos (`text`, `number`, `currency`, `percent`, `link`, `date`, `list`, `checkbox`) | D-03 (enum con `validate: true`) | ídem |
| RSpec | Sigue permitiendo cambiar el nombre visible de un atributo | D-03 | ídem |
| RSpec | Sigue creando, editando y eliminando un filtro lejos del límite | D-04 / D-06 | ídem |
| RSpec | Sigue rechazando filtros cuando ya hay 1000 | D-04 / D-06 (el límite se conserva) | ídem |
| Vitest | Crear un contacto lo guarda en el store (datos en snake_case) | RF-06 | `app/javascript/qa/regresion/daniel_regresion.spec.js` |
| Vitest | Una importación exitosa termina sin error y apaga el indicador | D-05 (camino exitoso de `import`) | ídem |
| Vitest | Crear una nota la agrega al contacto | RF-08 | ídem |
| Vitest | Crear un atributo lo agrega al store | RF-09 | ídem |
| Vitest | El generador de filtros arma el payload (opciones a IDs, último filtro sin `query_operator`) | RF-10 | ídem |
| Cypress | Editar el teléfono desde la ficha; un teléfono sin `+` se rechaza (2 casos) | RF-06 | `qa/cypress/e2e/regresion/daniel.cy.js` |
| Cypress | La importación muestra el aviso de que empezó; sin archivo se rechaza (2 casos) | D-05 / RF-07 | ídem |
| Cypress | Agregar una nota desde la ficha; una nota vacía se rechaza (2 casos) | RF-08 | ídem |
| Cypress | Los ocho tipos válidos se aceptan; una clave con espacios bloquea el formulario (2 casos) | D-03 / RF-09 | ídem |
| Cypress | Filtrar contactos por nombre; guardar, renombrar y borrar un segmento (2 casos) | D-04 / D-06 / RF-10 | ídem |

### 3.3 Juan Pablo — RF-11 a RF-15 (protege D-08 y M-01)

| Capa | Caso | Defecto o funcionalidad protegida | Archivo |
|---|---|---|---|
| RSpec | Sigue creando, editando y buscando respuestas | RF-11 | `spec/qa/regresion/juanpablo_regresion_spec.rb` |
| RSpec | Sigue ejecutando una macro sobre una conversación | RF-12 | ídem |
| RSpec | Sigue creando una regla sin retraso y permite desactivarla | RF-13 | ídem |
| RSpec | Sigue creando el equipo en minúsculas | RF-14 | ídem |
| RSpec | Sigue agregando, reemplazando y quitando miembros | D-08 (`team_members_controller`, con `user_ids` presente) | ídem |
| RSpec | El administrador sigue consultando el resumen del periodo | RF-15 | ídem |
| Vitest | Las respuestas se recargan cuando cambia la clave de caché | RF-11 | `app/javascript/qa/regresion/juanpablo_regresion.spec.js` |
| Vitest | El nombre del adjunto de una acción `send_attachment` | RF-12 | ídem |
| Vitest | El retraso se muestra en días, horas o minutos (5 filas: 10m, 90m, 1h, 1d, 30d) | RF-13 | ídem |
| Vitest | Crear un equipo con éxito lo guarda, lo devuelve y apaga el indicador | M-01 (camino exitoso de `create`) | ídem |
| Vitest | Los reportes conservan el inicio y descartan el fin del rango | RF-15 | ídem |
| Cypress | Buscar una respuesta en la configuración; una respuesta sin contenido se rechaza (2 casos) | RF-11 | `qa/cypress/e2e/regresion/juanpablo.cy.js` |
| Cypress | Una macro global aparece en la configuración; una acción inexistente se rechaza (2 casos) | RF-12 | ídem |
| Cypress | Una regla creada aparece en la lista; un retraso de 9 minutos se rechaza (2 casos) | RF-13 | ídem |
| Cypress | Crear un equipo lleva al paso de agentes; agregar y quitar miembros por la API (2 casos) | M-01 / D-08 | ídem |
| Cypress | El reporte de conversaciones muestra sus métricas; un agente sin permisos no puede consultarlo (2 casos) | RF-15 | ídem |

### 3.4 Specs originales de Chatwoot que se corren como regresión

Definidos en `RSPEC_REGRESION` y `VITEST_REGRESION` del `Jenkinsfile`:

- **RSpec (27 entradas):** modelos (`conversation`, `custom_attribute_definition`, `custom_filter`, `data_import`, `label`, `macro`, `contact`, `automation_rule`), servicios (`automation_rules`, `macros/execution_service`, `search_service`), `messages/message_builder` y 16 controladores de los 15 requisitos (asignaciones, mensajes, conversaciones, contactos, notas, filtros, atributos, miembros y equipos, respuestas, etiquetas, automatizaciones, macros, búsqueda y reportes v2).
- **Vitest (11 entradas):** `automationHelper`, `filterQueryGenerator` y los módulos de store `attributes`, `cannedResponses`, `contactNotes`, `contacts`, `conversations`, `conversationSearch`, `labels`, `teams` más `ReportsDataHelper`.

## 4. Cómo se ejecuta

Cada comando es de `qa/README.md` y de los criterios 6 y 7, con la carpeta de regresión como objetivo.

```bash
# Backend: suite del equipo (desde la raíz; requiere .env, postgres y redis)
docker compose -f docker-compose.production.yaml up -d postgres redis
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rails db:create db:schema:load
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec spec/qa/regresion

# Backend: más los specs originales (regresión acotada, por archivo)
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec spec/qa/regresion spec/models/custom_filter_spec.rb spec/models/custom_attribute_definition_spec.rb spec/controllers/api/v1/accounts/conversations/assignments_controller_spec.rb spec/controllers/api/v1/accounts/custom_filters_controller_spec.rb spec/controllers/api/v1/accounts/team_members_controller_spec.rb

# Frontend
TZ=UTC npx vitest --no-watch app/javascript/qa/regresion

# E2E (con Chatwoot 4.19.1 levantado y qa/cypress.env.json, ver qa/README.md secciones 1 a 3)
cd qa && npm run cy:regresion
```

Regresión completa, tal como la corre el pipeline: `spec/qa` más `$RSPEC_REGRESION` y `app/javascript/qa` más `$VITEST_REGRESION` (etapas 4 y 5 del criterio 9, `qa/docs/criterio9_pipeline.md`). Para correr la fase "antes", se revierte la corrección de un archivo (por ejemplo `git stash` sobre `app/models/conversation.rb`) y se repite el mismo comando; `qa/docker-compose.e2e.yaml` explica cómo levantar Chatwoot sin las correcciones (comentar los volúmenes de `./app` y `./config`).

Tiempos de referencia (Docker sobre Windows): la regresión acotada del backend tarda unos 10 minutos y la completa más de una hora; Vitest tarda de 24 a 42 s.

## 5. Resultados de las ejecuciones guardadas

Todas las cifras salen de los archivos de `qa/evidencias/tdd/`.

### 5.1 Ejecuciones

| Evidencia | Qué se corrió | Resultado |
|---|---|---|
| `back_3_refactor_regresion.txt` | Regresión acotada del backend tras el refactor (equipo + originales, RuboCop incluido) | **169 ejemplos, 0 fallos**, 9 min 49 s |
| `back_6_regresion_completa.txt` | Regresión amplia: `spec/qa/tdd`, `spec/qa/caja_blanca` y completos `conversation_spec.rb`, `custom_attribute_definition_spec.rb`, `custom_filter_spec.rb`, `assignments_controller_spec.rb`, `custom_filters_controller_spec.rb` y `custom_attribute_definitions_controller_spec.rb` | **255 ejemplos, 4 fallos**, 71 min 36 s. 251 aprobados; los 4 fallos son pruebas de tiempos (5.3) |
| `back_10_captain_verde_y_regresion.txt` | Ajuste de D-02 con el `assignments_controller_spec.rb` original | **18 ejemplos, 0 fallos**, 3 min 34 s |
| `front_3_regresion.txt` | Frontend: suites del equipo y originales de Chatwoot (con D-05, D-07 y M-01 ya corregidos) | **23 archivos, 405 pruebas, 0 fallos**, 41,86 s |
| `front_4_refactor_regresion.txt` | Lo mismo, tras el refactor | **23 archivos, 405 pruebas, 0 fallos**, 23,93 s |
| `qa/evidencias/cypress/cypress_run_completo.txt` | Cypress sobre Chatwoot con correcciones (criterio 7): 15 archivos de RF y la prueba de humo | **48 de 48 pruebas aprobadas**, 5 min 26 s. Es anterior a `qa/cypress/e2e/regresion/` y no incluye esos archivos |

### 5.2 Comparativa antes (código original) y después (corregido)

Solo se comparan fases que tienen salida guardada. Donde no hay corrida del código original, se dice.

| Suite | Antes (código original) | Después (con correcciones) | Evidencia |
|---|---|---|---|
| TDD backend (`spec/qa/tdd`) | 17 ejemplos, **10 fallan** (D-01, D-02, D-03, D-04, D-06 y D-08) | 17 ejemplos, **0 fallan** | `back_1_rojo.txt` / `back_2_verde.txt` |
| TDD frontend (`app/javascript/qa/tdd`) | 8 pruebas, **4 fallan** (D-05, D-07 y M-01) | 8 pruebas, **0 fallan** | `front_1_rojo.txt` / `front_2_verde.txt` |
| D-02 con asistentes Captain (`luisa_tdd_spec.rb:65`) | **1 falla** (422 en lugar de llegar al servicio) | `assignments_controller_spec.rb` original: 18 ejemplos, **0 fallan** | `back_9_captain_rojo.txt` / `back_10_captain_verde_y_regresion.txt` |
| Regresión acotada del backend | Sin corrida guardada | 169 ejemplos, 0 fallos | `back_3_refactor_regresion.txt` |
| Regresión del frontend | Sin corrida guardada | 405 pruebas, 0 fallos | `front_3_regresion.txt`, `front_4_refactor_regresion.txt` |
| Regresión completa del backend | Sin corrida guardada (solo las 4 pruebas de tiempo, ver 5.3) | 255 ejemplos, 4 fallos (los de tiempo) | `back_6_regresion_completa.txt` |
| Pruebas originales de tiempo de `conversation_spec.rb` | 4 de 4 fallan | 4 de 4 fallan | `back_8_...codigo_original.txt` / `back_7_...con_correcciones.txt` |
| Suites regresion/ del equipo (RSpec, Vitest y Cypress) | Cypress 28/30 (las 2 fallas son D-01 y D-02); RSpec y Vitest sin corrida | RSpec 31/31, Vitest dentro de 95/95, Cypress 30/30 | Sección 5.6 |

Los 10 fallos del TDD backend en rojo, por defecto: D-03 (2), D-04 y D-06 (1 cada uno), D-08 (3: POST, PATCH y DELETE sin `user_ids`), D-01 (2) y D-02 (1). El criterio 6 (sección 5.3) además indica que las 4 pruebas de caja negra que fallaban por D-01 a D-04 pasan con las correcciones; la salida de esa corrida de caja negra no está guardada.

### 5.3 Las 4 pruebas de tiempo: no son una regresión

Los 4 fallos de la regresión completa son pruebas originales de `conversation_spec.rb` (líneas 1163, 1191, 1243 y 1266). Esperan un tiempo de 3600 s y obtienen unos 3700 s porque calculan con `X.hours.ago` sin congelar el reloj y cada una tarda minutos en Docker sobre Windows. Se corrieron aparte sobre el código original (copia del repositorio en el commit `aeff105f5`, según el criterio 6) y con las correcciones:

| Prueba (`conversation_spec.rb`) | Código original (`back_8`) | Con correcciones (`back_7`) | Dentro de la regresión completa (`back_6`) |
|---|---|---|---|
| Línea 1163, primer tiempo de respuesta | 3777 s | 3771 s | 3805 s |
| Línea 1191, tiempo de respuesta siguiente | 3731 s | 3723 s | 3739 s |
| Línea 1243, tras respuesta del bot | 3727 s | 3725 s | 3794 s |
| Línea 1266, varias respuestas del bot | 3726 s | 3724 s | 3804 s |
| Resultado | 4 ejemplos, 4 fallos (35 min 40 s) | 4 ejemplos, 4 fallos (34 min 2 s) | parte de 255 ejemplos, 4 fallos |

Fallan igual con y sin las correcciones y con valores casi idénticos, así que no los causa ningún cambio del equipo. Es una limitación del entorno local; en Jenkins sobre Linux deberían pasar, pero eso no está comprobado con una ejecución guardada (sección 6).

### 5.4 Cobertura del código corregido bajo la regresión

La regresión acotada se midió con SimpleCov y V8 (`back_5_cobertura_seleccion.txt`, `front_5_cobertura.txt`; tablas en el criterio 6, sección 5.2): los métodos corregidos (`toggle_status`, `set_agent`, `invalid_assignee?`, `validate_number_of_filters`, `team_members_controller`) llegan al 100 % de líneas y las funciones de frontend corregidas (`import`, `toggleStatus`, `create`, `createTeam`) también.

### 5.5 Un ajuste que salió de la regresión

El commit `9ae953589` cambió `qa/cypress/e2e/luisa/rf01_cambio_estado.cy.js`: la comprobación de "posponer" consultaba la conversación antes de que terminara `toggle_status` y leía `open`. Se reemplazó `cy.api` por `cy.apiShould`, que reintenta la consulta. Fue un problema de la prueba (sincronización), no del código de Chatwoot.

### 5.6 Regresión E2E y de frontend antes y después (criterio 15)

En el criterio 15 se corrió la misma selección de Cypress contra la imagen original `chatwoot/chatwoot:v4.19.1` y contra la imagen final `chatwoot-qa:final`, que trae todas las correcciones horneadas (`qa/deploy/comparar_versiones.sh`). La selección incluye las suites de regresión:

| Suite | Original (v4.19.1) | Final | Diferencia |
|---|---|---|---|
| `qa/cypress/e2e/regresion/luisa.cy.js` | 8/10 | 10/10 | Las 2 que fallan en el original prueban D-01 y D-02 |
| `qa/cypress/e2e/regresion/daniel.cy.js` | 10/10 | 10/10 | — |
| `qa/cypress/e2e/regresion/juanpablo.cy.js` | 10/10 | 10/10 | — |
| Cypress RF-01..15 + regresión + frontend corregido | 69/81 | 81/81 | 11 por los defectos corregidos y 1 inestable (rf03, que pasa en el reintento) |
| Vitest `app/javascript/qa` (incluye `regresion/`) | — | 95/95 | Corrida sobre el código final |
| RSpec `spec/qa/regresion` (3 archivos, uno por integrante) | — | 31/31 | Corrida sobre el código final: 13 min 51 s (más 2 min 41 s de carga) en el contenedor `ruby:3.4.4` de `qa/docker-compose.qa.yaml` |

Evidencias: `qa/evidencias/despliegue/cypress_antes_v4.19.1.txt`, `cypress_despues_final.txt`, `cypress_antes_rf03_reintento.txt`, `vitest_qa_final.txt` y `qa/evidencias/tdd/back_11_regresion_por_integrante.txt` (RSpec). El análisis está en `qa/docs/criterio15_refactorizacion_despliegue.md`, sección 4.

## 6. Pendientes (sin evidencia en el repositorio)

| Pendiente | Detalle |
|---|---|
| Comparativa de RSpec `regresion/` sobre el código original | La de Cypress está hecha (sección 5.6: 28/30 en el original y 30/30 en el final). La de RSpec sigue sin una corrida guardada sobre el código original |
| Regresión de caja negra antes de las correcciones | El criterio 6 indica que 4 pruebas de caja negra fallaban por D-01 a D-04, pero no hay archivo de esa corrida |
| Cypress de regresión en Jenkins | No hay consola de un build del pipeline (ver `qa/docs/criterio9_pipeline.md`, sección 8); no se sabe cuántas de las 30 pruebas pasaron allí |
| Pruebas de tiempo en Linux | La afirmación de que pasan en Jenkins no tiene ejecución guardada |
| Regresión sobre el refactor completo | Resuelto: spec/qa/regresion se corrió sobre el código final (31/31, back_11_regresion_por_integrante.txt) |
