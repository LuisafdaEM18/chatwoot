# Criterio 15 — Refactorización y despliegue final

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

Este documento presenta la versión final de Chatwoot con los cambios que salieron de las pruebas, la compara con la versión anterior (la imagen publicada `chatwoot/chatwoot:v4.19.1`) y muestra el último despliegue con las pruebas que se corrieron después de refactorizar. Como pide la rúbrica, Stagehand queda fuera de este análisis: se evalúa en el criterio 14.

## 1. Resumen

| Elemento | Versión anterior | Versión final |
|---|---|---|
| Imagen | `chatwoot/chatwoot:v4.19.1` (`sha256:a0d571a3…`) | `chatwoot-qa:final` (`sha256:5043f103…`), construida con `qa/deploy/Dockerfile.final` |
| Backend | Código original de 4.19.1 | 4.19.1 + correcciones D-01, D-02, D-03, D-04, D-06, D-08 y H-01 |
| Frontend | Assets originales de 4.19.1 | Assets **recompilados con Vite** con las correcciones D-05, D-07, M-01, D-09 y D-10 |
| Cypress (81 pruebas: RF-01..15, regresión y frontend) | **69/81** (11 por los defectos y 1 inestable) | **81/81** |
| Vitest del equipo (caja blanca, TDD y regresión del frontend) | 5 de las 8 pruebas TDD de D-09/D-10 fallan (rojo) | **95/95** |
| ESLint en los archivos de frontend que se cambiaron | 2 avisos que ya traía Chatwoot | Los mismos 2 avisos, ninguno nuevo |

Antes de este criterio, las correcciones del backend se probaban montando los archivos sobre la imagen original (`qa/docker-compose.e2e.yaml`). Las del frontend solo se probaban con Vitest porque había que recompilar los assets. Ahora las dos quedan dentro de una sola imagen desplegable, que no monta nada del repositorio.

## 2. Cambios derivados de las pruebas

Los cambios de producción están en los commits `e5644e9ba` (D-01..D-08, M-01, H-01) y `c29cc8e66` (el ajuste de D-02 para los asistentes Captain), que detecta, explica y prueba el criterio 6 (`qa/docs/criterio6_tdd_pruebas_unitarias.md`). A ellos se suma la corrección de D-09 y D-10, que el criterio 7 encontró con Cypress y dejó para este criterio (sección 2.3). En total son **17 archivos de producción**. El parche exacto que se aplica sobre 4.19.1 está en `qa/deploy/correcciones_v4.19.1.patch`.

### 2.1 Backend

| Id | Integrante | Archivo | Antes | Después | Prueba que lo detectó |
|---|---|---|---|---|---|
| D-01 | Luisa | `app/models/conversation.rb` | `enum status:` sin validar: un estado inexistente lanzaba `ArgumentError` y respondía **500** | `enum :status, …, validate: true`: responde **422** | CP-01-03, TDD `luisa_tdd_spec.rb` |
| H-01 | Luisa | `app/models/conversation.rb` | `toggle_status` tenía una línea que nunca cambiaba el resultado (código muerto) | Se elimina; V(G) baja de 4 a 2 | Caja blanca RF-01 |
| D-02 | Luisa | `assignments_controller.rb` + `en.yml` | Asignar un agente de **otra cuenta** respondía 200 | `invalid_assignee?` responde **422** con un mensaje traducido. Los bots y los asistentes Captain (`assignee_type`) siguen funcionando (`c29cc8e66`) | CP-02-03, TDD |
| D-03 | Daniel | `app/models/custom_attribute_definition.rb` | Un tipo de atributo inexistente respondía **500** | `enum …, validate: true`: responde **422** | CP-09-03 |
| D-04 / D-06 | Daniel | `custom_filter.rb` + `custom_filters_controller.rb` | La validación del límite de 1000 filtros corría también al **editar**, así que con 1000 filtros no se podía editar ninguno. Además, el controlador repetía una validación que `create!` ya hace | `validate :validate_number_of_filters, on: :create`. Se quita la línea redundante del controlador | Caja negra (valores límite 999/1000/1001) |
| D-08 | Juan Pablo | `team_members_controller.rb` | Sin `user_ids`, `params[:user_ids] - …` sobre `nil` respondía **500** | Un método `user_ids` con `params.fetch` responde **422** y quita cuatro accesos repetidos a `params[:user_ids]` | CP-14-03, TDD |

### 2.2 Frontend

| Id | Integrante | Archivos | Antes | Después |
|---|---|---|---|---|
| D-05 | Daniel | `store/modules/contacts/actions.js` | Si la importación fallaba sin `message` del servidor (red caída, 500 genérico), la acción se tragaba el error y la pantalla anunciaba "You will be notified via email…" | La acción vuelve a lanzar el error y la pantalla muestra el aviso de error |
| D-07 | Luisa | `store/modules/conversations/actions.js`, `ResolveAction.vue`, `ChatList.vue`, `CmdBarConversationSnooze.vue` | `toggleStatus` capturaba el error con un `catch` vacío ("// Handle error"), así que las pantallas mostraban "Conversation status changed" aunque fallara | Se quita el `try/catch` inútil (refactor). Las tres pantallas usan `.catch` / `try…catch` y muestran "Conversation status change failed". `ResolveAction` libera `isLoading` en `finally`, así que el botón ya no se queda cargando |
| M-01 | Juan Pablo | `store/modules/teams/actions.js`, `CreateTeam.vue` | `throw new Error(error)` convertía el error en `[object Object]` y la pantalla mostraba un mensaje genérico | Se propaga `error.response.data.message` y la pantalla muestra el mensaje del servidor |

### 2.3 D-09 y D-10, corregidos con TDD en este criterio

El criterio 7 encontró los dos con Cypress y los dejó abiertos "hasta reconstruir la imagen". Tienen la misma causa: con Vuelidate 2 cada regla es un objeto (`{ $invalid, … }`), y el código la trataba como un booleano. `!objeto` siempre da `false`.

| Id | Integrante | Archivo | Antes | Después |
|---|---|---|---|---|
| D-09 | Luisa (RF-04) | `settings/labels/validations.js` | `!validation.title.required` (y `minLength`, `validLabelCharacters`) nunca era verdadero, así que la etiqueta inválida quedaba en rojo **sin mensaje** | `validation.title.<regla>.$invalid`: muestra "Label name is required", "Minimum length 2 is required" u "Only Alphabets, Numbers, Hyphen and Underscore are allowed" |
| D-10 | Daniel (RF-09) | `settings/attributes/AddAttribute.vue` y `EditAttribute.vue` | `!this.v$.attributeKey.isKey` nunca era verdadero, así que una clave con espacios mostraba **"Key is required"** | `this.v$.attributeKey.isKey.$invalid`: muestra "Invalid key" |

Ciclo TDD:

1. **Rojo:** `app/javascript/qa/tdd/criterio15_d09_d10_tdd_front.spec.js` (8 pruebas, con AAA). D-09 usa Vuelidate real (`useVuelidate` dentro de un `effectScope`), así el objeto de validación tiene la misma forma que recibe la pantalla. D-10 llama al `computed` con un *stub* de `v$` y `$t`. Resultado: **5 fallan y 3 pasan** (`qa/evidencias/tdd/front_6_criterio15_d09_d10_rojo.txt`).
2. **Verde:** con la corrección de 5 líneas pasan las 8, junto con la prueba de Chatwoot `labels/specs/validations.spec.js`: **13/13** (`qa/evidencias/tdd/front_7_criterio15_d09_d10_verde.txt`).
3. **Ajuste de la prueba existente:** `validations.spec.js` de Chatwoot armaba el objeto de validación con **booleanos**, una forma que Vuelidate 2 nunca produce. Por eso pasaba con el defecto presente. Se cambió a objetos `{ $invalid }`, que es la forma real.

### 2.4 Mejoras de calidad del código (refactorización)

- **Menos complejidad:** H-01 baja la complejidad ciclomática de `Conversation#toggle_status` de 4 a 2. El grafo y los caminos están en Drive (`Chatwoot_Caja_Blanca_Tablas_de_Caminos`).
- **Sin duplicación:** D-08 reemplaza cuatro lecturas de `params[:user_ids]` por un solo método memorizado. D-04 quita una validación que el controlador repetía.
- **Errores honestos:** cuatro rutas del frontend (D-05, D-07 ×3) dejaban de informar fallos y tres formularios (D-09, D-10 ×2) mostraban un mensaje vacío o equivocado. Ahora todos informan el resultado real.
- **Validación en el modelo:** D-01 y D-03 usan `validate: true` de Rails 7.1 en vez de dejar que el `enum` lance una excepción, y así responden con un error de validación normal (422).
- **Lint:** los archivos de frontend que se cambiaron no tienen problemas nuevos de ESLint. Los 2 avisos de `ChatList.vue` (`no-dynamic-keys`) ya estaban en 4.19.1.

## 3. Despliegue final

### 3.1 Construcción de la imagen

`qa/deploy/Dockerfile.final` tiene dos etapas:

1. **builder:** parte de `chatwoot/chatwoot:v4.19.1`, toma `npm` de `node:24.22.1-alpine` (la imagen publicada solo trae el binario de `node`) e instala `pnpm@10.2.0`. Luego aplica `correcciones_v4.19.1.patch` con `patch -p1` (se aplica limpio sobre 4.19.1; contiene D-01..D-10, M-01 y H-01), instala las dependencias con `pnpm i --frozen-lockfile` y recompila los assets con `rake assets:precompile`, que ejecuta Vite. El registro muestra `Build with Vite complete: /app/public/vite`.
2. **final:** parte otra vez de `chatwoot/chatwoot:v4.19.1` y copia solo `app/`, `config/locales/en.yml` y los nuevos `public/vite`. Así la imagen final no lleva `node_modules` ni herramientas de compilación.

```bash
docker build -f qa/deploy/Dockerfile.final -t chatwoot-qa:final qa/deploy
```

Evidencia de la construcción: `qa/evidencias/despliegue/build_imagen_final.txt`.

### 3.2 Despliegue

`qa/deploy/docker-compose.final.yaml` reemplaza la imagen de `rails` y `sidekiq` por `chatwoot-qa:final` y no monta ningún archivo del repositorio. Igual que en el entorno E2E, desactiva Rack::Attack y sube `MAX_USER_SESSIONS` para que Cypress pueda iniciar sesión en cada archivo. La variable `QA_IMAGE` despliega cualquier otra imagen con la misma configuración, y así se levanta la versión anterior para comparar.

```bash
# versión final
docker compose -f docker-compose.production.yaml -f qa/deploy/docker-compose.final.yaml up -d
# versión anterior, con la misma base de datos y configuración
QA_IMAGE=chatwoot/chatwoot:v4.19.1 docker compose -f docker-compose.production.yaml -f qa/deploy/docker-compose.final.yaml up -d
```

La base de datos y los datos de prueba (`qa/scripts/create_qa_data.rb`) son los mismos en las dos corridas. Solo cambia la imagen.

## 4. Pruebas posteriores a la refactorización

### 4.1 Suite comparativa

`qa/deploy/comparar_versiones.sh` despliega primero la versión anterior y después la final. Contra cada una corre la misma selección de Cypress: los 15 RF (CP-XX-01/02/03), la regresión por integrante y la nueva `qa/cypress/e2e/despliegue/frontend_corregido.cy.js` (`npm run cy:despliegue`).

```bash
bash qa/deploy/comparar_versiones.sh
```

| Archivo | Pruebas | Anterior (v4.19.1) | Final | Defecto que explica la diferencia |
|---|---|---|---|---|
| `luisa/rf01_cambio_estado.cy.js` | 4 | 3 ✖1 | 4 | D-01 (CP-01-03: 500 en vez de 422) |
| `luisa/rf02_asignacion.cy.js` | 3 | 2 ✖1 | 3 | D-02 (CP-02-03: aceptaba un agente de otra cuenta) |
| `luisa/rf03_mensajes_notas.cy.js` | 3 | 2 ✖1 | 3 | Ninguno: fallo **inestable** de visibilidad (un `<span>` recortado por CSS). En el reintento sobre la misma imagen pasa 3/3 (`cypress_antes_rf03_reintento.txt`) y en las dos corridas comparativas anteriores también pasó |
| `luisa/rf04`, `rf05` | 6 | 6 | 6 | — |
| `daniel/rf06..rf08`, `rf10` | 12 | 12 | 12 | — |
| `daniel/rf09_atributos.cy.js` | 3 | 2 ✖1 | 3 | D-03 (CP-09-03: tipo inexistente da 500) |
| `juanpablo/rf11..rf13`, `rf15` | 12 | 12 | 12 | — |
| `juanpablo/rf14_equipos.cy.js` | 3 | 2 ✖1 | 3 | D-08 (CP-14-03: 500 en vez de 422) |
| `regresion/luisa.cy.js` | 10 | 8 ✖2 | 10 | D-01 y D-02 |
| `regresion/daniel.cy.js` y `juanpablo.cy.js` | 20 | 20 | 20 | — |
| `despliegue/frontend_corregido.cy.js` | 5 | 0 ✖5 | 5 | D-05, D-07, M-01, D-09 y D-10 |
| **Total** | **81** | **69 (85,2 %)** | **81 (100 %)** | 11 pruebas pasan a verde por las correcciones |

Evidencias: `qa/evidencias/despliegue/cypress_antes_v4.19.1.txt`, `qa/evidencias/despliegue/cypress_despues_final.txt` y `qa/evidencias/despliegue/cypress_antes_rf03_reintento.txt`. Cada una registra la imagen, la fecha y la salida completa de Cypress, y las dos primeras también el `Id` de la imagen.

Cómo se leen los resultados:

- **De las 12 fallas de la versión anterior, 11 son exactamente los defectos corregidos.** En esas 11, el login, la navegación y los datos pasan, y lo que falla es la aserción del comportamiento corregido. La número 12 (rf03) es inestable y no tiene que ver con las correcciones: se repitió y pasó. Así se comprueba que las pruebas detectan los defectos y que la versión final los resuelve.
- **Ninguna prueba que ya pasaba deja de pasar (regresión).** Los cambios no rompieron ninguna funcionalidad de los 15 RF.
- **El frontend corregido quedó desplegado de verdad.** Antes solo había evidencia con Vitest. Ahora D-05, D-07, M-01, D-09 y D-10 se verifican en el navegador contra la imagen final, y fallan contra la anterior.

### 4.2 Prueba del frontend en el navegador

`frontend_corregido.cy.js` provoca cada fallo (con `cy.intercept` o escribiendo un valor inválido) y comprueba el mensaje correcto y la ausencia del mensaje falso:

| Prueba | Fallo provocado | Se espera en la versión final |
|---|---|---|
| D-05 | `POST /contacts/import` → 500 sin `message` | Aviso "Request failed with status code 500" (o el genérico), el diálogo sigue abierto y **no** aparece "You will be notified via email…" |
| D-07 | `POST /conversations/:id/toggle_status` → 500 | "Conversation status change failed" y **no** "Conversation status changed" |
| M-01 | `POST /teams` → 422 con un mensaje propio | El aviso muestra ese mensaje del servidor |
| D-09 | Etiqueta `qa soporte` (con espacio) | El campo en rojo, "Only Alphabets, Numbers, Hyphen and Underscore are allowed" visible y el botón desactivado |
| D-10 | Clave de atributo `qa clave` | "Invalid key" visible, **no** aparece "Key is required" y el botón está desactivado |

En D-05 se usó un 500 en lugar de `forceNetworkError`. Con el error de red forzado, el navegador reintenta el POST y la petición no llega a fallar dentro de la aplicación. Un 500 sin `message` pasa por la misma rama del código que tenía el defecto (`error.response?.data?.message` vacío). Además, el diálogo de importación queda abierto en la capa superior del navegador y tapa el aviso, por eso se comprueba que el aviso exista, no que sea visible.

### 4.3 Pruebas unitarias del frontend sobre el código final

`TZ=UTC npx vitest --no-watch app/javascript/qa` da **10 archivos y 95 pruebas, todas en verde**: caja blanca, TDD (incluido el de D-09/D-10) y regresión de los tres integrantes. Evidencia: `qa/evidencias/despliegue/vitest_qa_final.txt`. La regresión del backend (RSpec) sobre el código corregido está en el criterio 10 y en `qa/evidencias/tdd/` (`back_3_refactor_regresion.txt`, `back_6_regresion_completa.txt`, `back_10_captain_verde_y_regresion.txt`).

## 5. Comparación de versiones

| Aspecto | Anterior | Final | Mejora |
|---|---|---|---|
| Respuestas 500 ante entradas inválidas (D-01, D-03, D-08) | 3 rutas | 0 | Errores de validación 422 con mensaje |
| Reglas de negocio violables (D-02 agente ajeno, D-04/D-06 límite de filtros) | 2 | 0 | Integridad entre cuentas y filtros editables |
| Pantallas que anunciaban éxito ante un fallo (D-05, D-07 ×3) | 4 | 0 | La interfaz dice la verdad |
| Formularios con mensaje de validación vacío o equivocado (D-09, D-10 ×2) | 3 | 0 | El usuario sabe qué corregir |
| Mensajes de error sin causa (M-01) | 1 | 0 | Se muestra el motivo del servidor |
| Complejidad ciclomática de `toggle_status` | 4 | 2 | Menos caminos que probar |
| Cypress RF + regresión + frontend | 69/81 | 81/81 | +11 por las correcciones (+1 inestable), 0 regresiones |
| Cómo se despliegan las correcciones | Archivos de backend montados como volumen; frontend sin desplegar | Una imagen inmutable con backend y frontend | Reproducible y lista para producción |

## 6. Límites

- La versión final es 4.19.1 con el parche aplicado. No incorpora los commits posteriores de Chatwoot de la rama `develop`, porque el alcance evaluado es 4.19.1.
- D-09 tiene una parte que no se corrigió: el frontend solo valida espacios y deja pasar símbolos (`qa!`). En ese caso el servidor rechaza la etiqueta y la interfaz muestra su error (criterio 7, CP-04-03).
- La suite comparativa se corrió en una sola máquina con Windows y Electron. El reintento de rf03 muestra que esa máquina puede producir fallos inestables de visibilidad o de memoria del navegador.
- Rack::Attack está desactivado en la suite comparativa para que Cypress pueda iniciar sesión muchas veces. Su comportamiento se prueba aparte en el criterio 13 (`npm run cy:seguridad:rack`).
- La imagen final se construye en local y no se publica en ningún registro.
