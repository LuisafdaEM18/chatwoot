# Pruebas del equipo — Chatwoot 4.19.1

Esta carpeta guarda todo lo que aporta el equipo de pruebas, separado de las pruebas que ya trae Chatwoot (RSpec en `spec/`, Vitest en `app/javascript/**/specs` y Playwright en `tests/playwright`).

| Carpeta / archivo | Contenido |
|---|---|
| `cypress/` | Pruebas E2E, de API y de accesibilidad con Cypress |
| `scripts/create_qa_data.rb` | Crea la cuenta y los usuarios de prueba |
| `docker-compose.qa.yaml` | Contenedor liviano de Ruby para correr RSpec |
| `cypress.env.example.json` | Plantilla de las variables de Cypress |

## 1. Levantar Chatwoot

Desde la raíz del repositorio:

```bash
docker compose -f docker-compose.production.yaml up -d
```

Chatwoot queda en http://localhost:3000.

## 2. Crear los datos de prueba

Elegir una contraseña de prueba (mínimo una mayúscula, una minúscula, un número y un carácter especial) y ejecutar:

```bash
docker compose -f docker-compose.production.yaml cp qa/scripts/create_qa_data.rb rails:/tmp/create_qa_data.rb
MSYS_NO_PATHCONV=1 docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD='<contraseña>' rails bundle exec rails runner /tmp/create_qa_data.rb
```

El script imprime `account_id` e `inbox_id`. Copiar `cypress.env.example.json` como `cypress.env.json` y poner esos valores y la contraseña. `cypress.env.json` no se sube al repositorio.

En Git Bash de Windows hace falta `MSYS_NO_PATHCONV=1` para que no convierta `/tmp/...` en una ruta de Windows.

## 3. Cypress

```bash
cd qa
npm install
npm run cy:smoke      # prueba de humo
npm run cy:run        # todas las pruebas
npm run cy:open       # modo interactivo
```

El reporte HTML queda en `qa/reports/cypress/index.html`.

## 4. RSpec (backend)

```bash
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle install
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rails db:create db:schema:load
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec spec/models/label_spec.rb
```

## 5. Vitest (frontend)

Desde la raíz del repositorio:

```bash
npx pnpm@10.2.0 install
TZ=UTC npx vitest --no-watch app/javascript/qa
```

Las pruebas de caja blanca del frontend están en `app/javascript/qa/caja_blanca` (un archivo por integrante). Para medir la cobertura se agrega `--coverage`.

## Dónde está cada prueba

| Prueba | Ubicación |
|---|---|
| Caja blanca backend (RSpec) | `spec/qa/caja_blanca` |
| Caja negra backend (RSpec, API) | `spec/qa/caja_negra` |
| Caja blanca frontend (Vitest) | `app/javascript/qa/caja_blanca` |
| TDD backend (RSpec) | `spec/qa/tdd` |
| Unitarias backend con dobles (RSpec) | `spec/qa/unitarias` |
| TDD frontend (Vitest) | `app/javascript/qa/tdd` |
| Evidencias del ciclo TDD | `qa/evidencias/tdd` |
| Documento del criterio 6 | `qa/docs/criterio6_tdd_pruebas_unitarias.md` |
| E2E (Cypress) | `qa/cypress` |

Los diagramas de flujo y los grafos están en Drive (carpeta CHATWOOT, `Chatwoot_Caja_Blanca_Diagramas.drawio`).
