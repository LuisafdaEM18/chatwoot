# Criterio 6 — TDD y pruebas unitarias automatizadas

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

| Integrante | Ciclo TDD (defecto o mejora) | Capa | Pruebas TDD | Pruebas unitarias con dobles |
|---|---|---|---|---|
| Luisa | D-01 estado inexistente, D-02 agente de otra cuenta, H-01 código muerto | Backend | 8 (RSpec) | 6 (RSpec) |
| Luisa | D-07 falso "estado cambiado" cuando falla la API | Frontend | 2 (Vitest) | — |
| Daniel | D-03 tipo de atributo inexistente, D-04 filtro 1000, D-06 edición en el límite | Backend | 5 (RSpec) | 6 (RSpec) |
| Daniel | D-05 falsa "importación exitosa" con error de red | Frontend | 3 (Vitest) | — |
| Juan Pablo | D-08 `team_members` sin `user_ids` responde 500 | Backend | 4 (RSpec) | 4 (RSpec) |
| Juan Pablo | M-01 el error al crear equipo muestra el mensaje del servidor | Frontend | 4 (Vitest) | — |
| **Total** | 8 defectos o mejoras | | **26** | **16** |

Las pruebas TDD del frontend también usan dobles (stubs y mocks de la API, del store, de `useAlert` y del router), así que cuentan como pruebas unitarias del frontend.

## 2. Dónde está cada cosa

| Elemento | Ubicación |
|---|---|
| TDD backend | `spec/qa/tdd/{luisa,daniel,juanpablo}_tdd_spec.rb` |
| TDD frontend | `app/javascript/qa/tdd/{luisa,daniel,juanpablo}_tdd_front.spec.js` |
| Unitarias backend con dobles | `spec/qa/unitarias/{luisa,daniel,juanpablo}_unitarias_spec.rb` |
| Evidencias (salidas de consola) | `qa/evidencias/tdd/` |
| Cobertura backend (SimpleCov, HTML y JSON) | `qa/reports/coverage/` (se genera, no se sube) |
| Cobertura frontend (V8, HTML y lcov) | `qa/reports/coverage-front/` (se genera, no se sube) |

| Evidencia | Fase |
|---|---|
| `back_1_rojo.txt` | Backend rojo: 17 ejemplos, 10 fallan |
| `back_2_verde.txt` | Backend verde: 17 ejemplos, 0 fallan |
| `back_3_refactor_regresion.txt` | Backend tras refactor: RuboCop y regresión corta con cobertura, 169 ejemplos, 0 fallan |
| `back_4_unitarias.txt` | Unitarias backend: 16 ejemplos, 0 fallan |
| `back_5_cobertura_seleccion.txt` | Cobertura de líneas y ramas de los métodos corregidos |
| `front_1_rojo.txt` | Frontend rojo: 8 pruebas, 4 fallan |
| `front_2_verde.txt` | Frontend verde: 8 pruebas, 0 fallan |
| `front_3_regresion.txt` | Frontend verde + regresión (suites del equipo y originales de Chatwoot) |
| `front_4_refactor_regresion.txt` | Frontend tras refactor: 405 pruebas, 0 fallan |
| `front_5_cobertura.txt` | Cobertura del frontend |

## 3. Ciclo TDD por integrante

En todos los casos se escribió primero la prueba, se ejecutó y falló por la razón esperada (rojo). Luego se hizo el cambio mínimo para que pasara (verde) y después se mejoró el código sin cambiar el comportamiento, volviendo a correr todo (refactor).

### 3.1 Luisa — RF-01 y RF-02

**D-01. Estado inexistente en `toggle_status` respondía 500**

- Rojo: `luisa_tdd_spec.rb` espera que `conversation.status = 'cerrada'` deje un error de validación y que la API responda 422. Falló con `ArgumentError: 'cerrada' is not a valid status` y con `500 Internal Server Error`.
- Verde: `app/models/conversation.rb`, `enum :status, {...}, validate: true`. El valor inválido ahora es un error de validación, `save!` lanza `RecordInvalid` y el manejador global responde 422.

**D-02. Asignar un agente de otra cuenta respondía 200 y dejaba la conversación sin asignado**

- Rojo: se espera 422 con el mensaje `errors.conversations.invalid_assignee` y que el asignado anterior se conserve. Respondía 200. Otra prueba protege que `assignee_id: nil` siga sirviendo para quitar el asignado.
- Verde: `assignments_controller.rb` rechaza el `assignee_id` si no es un usuario de la cuenta (`invalid_assignee?`), con el mensaje nuevo en `config/locales/en.yml`.

**H-01. Código muerto en `Conversation#toggle_status` (refactor)**

- Las 4 pruebas de transición (abierta→resuelta, resuelta/pendiente/pospuesta→abierta) se escribieron antes de tocar el código y pasaron en rojo, verde y refactor: son la red de seguridad.
- Refactor: se eliminó `self.status = :open if pending? || snoozed?`, que nunca podía ejecutarse (ver caja blanca RF-01). V(G) baja de 4 a 2.

**D-07 (frontend). Si falla el cambio de estado, la interfaz decía "Estado de la conversación cambiado"**

- Rojo: `luisa_tdd_front.spec.js` espera que la acción `toggleStatus` rechace la promesa cuando la API falla y no haga el commit `CHANGE_CONVERSATION_STATUS`. Falló con `promise resolved "undefined" instead of rejecting`.
- Verde: el `catch` de `toggleStatus` relanza el error. `ResolveAction.vue`, `ChatList.vue` y `CmdBarConversationSnooze.vue` muestran `CONVERSATION.CHANGE_STATUS_FAILED` (el texto ya existía) y `ResolveAction` apaga el indicador de carga también al fallar.
- Refactor: ESLint marcó el `try/catch` que solo relanzaba (`no-useless-catch`) y se quitó.

### 3.2 Daniel — RF-07, RF-09 y RF-10

**D-03. Tipo de atributo inexistente respondía 500**

- Rojo: `daniel_tdd_spec.rb` espera un error de validación en el modelo y 422 sin crear el atributo. Falló con `ArgumentError` y 500.
- Verde: `custom_attribute_definition.rb`, `enum :attribute_display_type, {...}, validate: true`.

**D-04. El filtro número 1000 se guardaba pero la API respondía 422**

- Rojo: con 999 filtros, crear uno más debe responder éxito con el filtro creado. Respondía 422 aunque el registro quedaba guardado.
- Verde: se quitó de `custom_filters_controller.rb` la segunda validación (`valid?` después de `create!`), que volvía a contar los filtros cuando ya eran 1000.

**D-06. Con 1000 filtros no se podía editar ninguno**

- Se encontró al escribir las pruebas de D-04: la validación del límite también corría al actualizar.
- Rojo: con 1000 filtros, renombrar uno debe responder éxito. Respondía 422.
- Verde: `custom_filter.rb`, `validate :validate_number_of_filters, on: :create`. Otra prueba confirma que el filtro 1001 se sigue rechazando.

**D-05 (frontend). Una importación fallida por error de red mostraba "importación exitosa"**

- Rojo: `daniel_tdd_front.spec.js` espera que la acción `import` rechace la promesa ante un error de red. La promesa resolvía.
- Verde: `store/modules/contacts/actions.js`, `throw error` después del caso con mensaje del servidor.

### 3.3 Juan Pablo — RF-14

**D-08. `team_members` sin `user_ids` respondía 500**

- Rojo: `juanpablo_tdd_spec.rb` envía POST, PATCH y DELETE sin `user_ids` y espera 422 con un mensaje que nombre el parámetro, sin cambiar los miembros. Respondía 500 (`NoMethodError: undefined method 'map' for nil`).
- Verde: `team_members_controller.rb` lee el parámetro con `params.fetch(:user_ids)`. Si falta, lanza `ParameterMissing` y el manejador global responde 422. Una lista vacía sigue siendo válida (PATCH con `[]` quita a todos).
- Refactor: los cuatro usos de `params[:user_ids]` pasaron a un método privado `user_ids`.

**M-01 (frontend). El error al crear un equipo no decía por qué**

- Rojo: `juanpablo_tdd_front.spec.js` espera que la acción `teams/create` lance un error con el mensaje del servidor y que `CreateTeam.vue` lo muestre. El mensaje llegaba como `[object Object]` y la vista siempre mostraba el texto genérico.
- Verde: la acción lanza `new Error(error?.response?.data?.message)`, igual que `labels.js`, y la vista muestra `error.message` o, si no hay mensaje, el texto genérico (igual que `AddLabel.vue`).

## 4. AAA, FIRST, aserciones fluidas y dobles de prueba

**AAA.** Cada prueba tiene los bloques `# Arrange`, `# Act` y `# Assert` (o `// Arrange` en Vitest). Cuando la acción y la verificación son una sola expresión (`expect { ... }.not_to change`) se marca `# Act / Assert`.

**FIRST.**

| Principio | Cómo se cumple |
|---|---|
| Fast | Las unitarias del backend no tocan la base: `build_stubbed` y dobles. El límite de 1000 filtros se prueba con un doble que devuelve 999 o 1000, sin crear registros. En las pruebas de API se usa `insert_all` (una consulta) en lugar de 999 creaciones. |
| Independent | Cada ejemplo crea sus datos. RSpec limpia la base por transacción y Vitest limpia los mocks en `beforeEach` (`vi.clearAllMocks`). Se pueden correr en cualquier orden. |
| Repeatable | No dependen de la hora, la red ni servicios externos. La API del frontend siempre es un stub. |
| Self-validating | Todas terminan en aserciones; ninguna requiere revisar la salida a mano. |
| Timely | Se escribieron antes de la corrección (TDD) o antes del refactor (H-01). |

**Aserciones fluidas.** RSpec: `expect(conversation).to be_open.and have_attributes(status: 'open')`, `contain_exactly`, `have_http_status(:unprocessable_entity)`, `expect { ... }.not_to change(CustomAttributeDefinition, :count)`. Vitest: `await expect(result).rejects.toBeInstanceOf(ExceptionWithMessage)`, `rejects.toHaveProperty('data', ...)`, `toHaveBeenCalledExactlyOnceWith`, `not.toHaveBeenCalledWith(..., expect.anything())`.

**Dobles de prueba.**

| Tipo | Dónde | Para qué |
|---|---|---|
| Fake | `build_stubbed(:conversation)`, `build_stubbed(:custom_filter)`, `build_stubbed(:team)`; el router falso en `juanpablo_tdd_front.spec.js` | Objetos en memoria que se comportan como los reales sin base de datos ni rutas |
| Stub | `allow(conversation).to receive(:save).and_return(false)`; `ContactAPI.importContacts.mockRejectedValue(...)` | Respuestas programadas para llevar el código a un camino |
| Mock | `expect(conversation).to receive(:save).once`; `expect(all_filters).to receive(:where).with(user_id: 7)`; `expect(members).to receive(:create).with([...])`; `expect(team).to receive(:update_account_cache)`; `commit` y `useAlert` con `vi.fn()` | Verifican que la unidad llama a su colaborador con los argumentos correctos |
| Spy | `allow(filter).to receive(:validate_number_of_filters)` + `expect(filter).not_to have_received(...)` | Verifican después de actuar (D-06: el límite no se revisa al actualizar) |
| Doble verificado | `instance_double(Account)`, `instance_double(ActiveRecord::Relation)`, `instance_double(TeamMember)` | Fallan si se les pide un método que la clase real no tiene |

## 5. Resultados y cobertura

### 5.1 Ejecuciones

| Suite | Rojo | Verde | Tras refactor |
|---|---|---|---|
| TDD backend (`spec/qa/tdd`) | 17 ejemplos, 10 fallan | 17 / 17 | 17 / 17 |
| TDD frontend (`app/javascript/qa/tdd`) | 8 pruebas, 4 fallan | 8 / 8 | 9 / 9 (se agregó el camino exitoso de `CreateTeam`) |
| Unitarias backend (`spec/qa/unitarias`) | — | 16 / 16 | 16 / 16 |
| Regresión backend corta (equipo + originales de Chatwoot, ver 5.3) | — | — | 169 / 169 (9 min 49 s) |
| Regresión frontend (equipo + originales de Chatwoot) | — | 405 / 405 | 405 / 405 |

### 5.2 Cobertura del código seleccionado

Frontend (V8). Se mide por función, porque los archivos de store tienen decenas de acciones fuera del alcance:

| Función | Líneas | Ramas |
|---|---|---|
| `contacts/actions.js` `import` (D-05) | 13 / 13 (100 %) | 5 / 5 |
| `conversations/actions.js` `toggleStatus` (D-07) | 33 / 33 (100 %) | 3 / 3 |
| `teams/actions.js` `create` (M-01) | 13 / 13 (100 %) | 3 / 4 |
| `CreateTeam.vue` `createTeam` (M-01) | 18 / 18 (100 %) | 4 / 4 |

La rama que falta en `teams/actions.js` es el caso `error === null` del encadenamiento opcional `error?.response`, que Axios nunca produce.

Backend (SimpleCov, líneas y ramas, sobre la regresión corta). Detalle en `qa/evidencias/tdd/back_5_cobertura_seleccion.txt`.

| Método | Defecto | Líneas | Ramas |
|---|---|---|---|
| `Conversation#toggle_status` | D-01, H-01 | 3 / 3 | 2 / 2 |
| `AssignmentsController#set_agent` | D-02 | 4 / 4 | 2 / 2 |
| `AssignmentsController#invalid_assignee?` | D-02 | 3 / 3 | 2 / 2 |
| `CustomFiltersController#create` y `#update` | D-04 | 4 / 4 | — |
| `CustomFilter#validate_number_of_filters` | D-04, D-06 | 3 / 3 | 2 / 2 |
| `TeamMembersController` `create`, `update`, `destroy`, `validate_member_id_params` y `user_ids` | D-08 | 18 / 18 | 2 / 2 |

Por archivo: `custom_filter.rb` 100 % de líneas, `custom_attribute_definition.rb` 100 % (D-03), `team_members_controller.rb` 100 %, `assignments_controller.rb` 97 %, `custom_filters_controller.rb` 97 %. `conversation.rb` queda en 88 % porque el modelo tiene muchos métodos fuera del alcance. La cifra global de SimpleCov (11 %) mide todo Chatwoot y no es representativa del código seleccionado.

### 5.3 Regresión del backend

La regresión completa (todos los archivos de Chatwoot de conversaciones, más la caja negra completa) pasaba de 20 minutos en Docker sobre Windows, así que se acotó a lo que tocan los cambios:

- `spec/qa/tdd`, `spec/qa/unitarias` y `spec/qa/caja_blanca` completos.
- Caja negra: los casos de D-01, D-02, D-03, D-04 y RF-14 (`luisa_conversaciones_spec.rb:38:64`, `daniel_contactos_spec.rb:142:161`, `juanpablo_productividad_spec.rb:91`). Las 4 pruebas que fallaban antes por D-01 a D-04 ahora pasan.
- Originales de Chatwoot: el bloque `toggle_status` de `conversations_controller_spec.rb`, y completos `assignments_controller_spec.rb`, `custom_filters_controller_spec.rb`, `team_members_controller_spec.rb`, `custom_filter_spec.rb` y `custom_attribute_definition_spec.rb`.

Resultado: 169 ejemplos, 0 fallos. RuboCop sobre los 6 archivos de la aplicación modificados no reporta ofensas, salvo `Layout/EndOfLine`, que aparece porque Git en Windows deja los archivos con CRLF y se normaliza a LF al hacer commit. En los specs del equipo hay advertencias de estilo (`RSpec/ContextWording` por los contextos en español, `RSpec/SpecFilePathFormat` por la carpeta `spec/qa` y `RSpec/SubjectStub`, que es intencional en las unitarias con dobles parciales).

## 6. Cómo reproducirlo

```bash
# Backend (desde la raíz; requiere .env y los servicios postgres y redis)
docker compose -f docker-compose.production.yaml up -d postgres redis
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec spec/qa/tdd spec/qa/unitarias
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa

# Frontend
TZ=UTC npx vitest --no-watch app/javascript/qa/tdd
TZ=UTC npx vitest --no-watch app/javascript/qa --coverage --coverage.reportsDirectory=qa/reports/coverage-front
```

Para ver la fase roja, se revierte la corrección de un defecto (por ejemplo, `git stash` sobre `app/models/conversation.rb`) y se vuelve a correr su archivo de prueba.
