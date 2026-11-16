# Pruebas del equipo — Chatwoot 4.19.1

Esta carpeta guarda todo lo que aporta el equipo de pruebas, separado de las pruebas que ya trae Chatwoot (RSpec en `spec/`, Vitest en `app/javascript/**/specs` y Playwright en `tests/playwright`).

| Carpeta / archivo | Contenido |
|---|---|
| `cypress/` | Pruebas E2E, de API y de accesibilidad con Cypress |
| `scripts/create_qa_data.rb` | Crea la cuenta y los usuarios de prueba |
| `scripts/create_usability_data.rb` | Prepara (y reinicia antes de cada sesión) la cuenta en español de las pruebas con usuarios |
| `usabilidad/` | Archivo CSV para la tarea de importación de las pruebas con usuarios |
| `docker-compose.qa.yaml` | Contenedor liviano de Ruby para correr RSpec |
| `cypress.env.example.json` | Plantilla de las variables de Cypress |

## 1. Levantar Chatwoot

Desde la raíz del repositorio (hace falta un `.env` copiado de `.env.example` con `SECRET_KEY_BASE`, `POSTGRES_PASSWORD`, `POSTGRES_HOST=postgres` y `REDIS_URL=redis://redis:6379`):

```bash
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml run --rm rails bundle exec rails db:chatwoot_prepare
```

`qa/docker-compose.e2e.yaml` fija la imagen `chatwoot/chatwoot:v4.19.1` (la versión evaluada), monta encima los archivos del backend corregidos por el equipo y desactiva Rack::Attack, que solo deja iniciar sesión 5 veces por IP cada 5 minutos. Chatwoot queda en http://localhost:3000.

## 2. Crear los datos de prueba

Elegir una contraseña de prueba (mínimo una mayúscula, una minúscula, un número y un carácter especial) y ejecutar:

```bash
docker compose -f docker-compose.production.yaml cp qa/scripts/create_qa_data.rb rails:/tmp/create_qa_data.rb
MSYS_NO_PATHCONV=1 docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD='<contraseña>' rails bundle exec rails runner /tmp/create_qa_data.rb
```

El script imprime un JSON con los IDs (cuenta, bandeja, agentes, cuenta ajena) y los tokens de API de los usuarios de prueba. Copiar `cypress.env.example.json` como `cypress.env.json`, pegar esos valores y agregar los correos y la contraseña. `cypress.env.json` no se sube al repositorio.

En Git Bash de Windows hace falta `MSYS_NO_PATHCONV=1` para que no convierta `/tmp/...` en una ruta de Windows.

## 3. Cypress

```bash
cd qa
npm install
npm run cy:smoke      # prueba de humo
npm run cy:luisa      # RF-01 a RF-05
npm run cy:daniel     # RF-06 a RF-10
npm run cy:juanpablo  # RF-11 a RF-15
npm run cy:run        # todas las pruebas
npm run cy:open       # modo interactivo
```

Cada archivo `cypress/e2e/<integrante>/rfXX_*.cy.js` tiene los casos CP-XX-01 (exitoso), CP-XX-02 (alternativo) y CP-XX-03 (error) de la matriz de trazabilidad. Los comandos comunes están en `cypress/support/commands.js` (`cy.api` para la API con el token del rol, `cy.createConversation`, `cy.apiShould`, etc.).

El reporte HTML queda en `qa/reports/cypress/index.html`.

## 3.1 Gherkin y Screenplay (Serenity/JS + Cucumber + Playwright)

Usa el mismo entorno y el mismo `qa/cypress.env.json` que Cypress. Necesita Google Chrome instalado.

```bash
cd qa/screenplay
npm install
npm test               # los 33 escenarios
npm run test:luisa     # RF-01 a RF-05 (también test:daniel y test:juanpablo)
npm run test:report    # abre el reporte HTML de Serenity/JS
```

Los escenarios están en `qa/screenplay/features/<integrante>/rfXX_*.feature`; los actores, tareas, interacciones y preguntas, en `qa/screenplay/src/`. Ver `qa/docs/criterio8_gherkin_screenplay.md`.

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
| E2E y API (Cypress) | `qa/cypress/e2e/{luisa,daniel,juanpablo}` |
| Documento del criterio 7 | `qa/docs/criterio7_cypress.md` |
| Gherkin, BDD y Screenplay | `qa/screenplay/features/{luisa,daniel,juanpablo}` y `qa/screenplay/src` |
| Evidencias de Screenplay (salida y reporte HTML) | `qa/evidencias/screenplay` |
| Documento del criterio 8 | `qa/docs/criterio8_gherkin_screenplay.md` |
| Regresión por integrante (RSpec, Vitest y Cypress) | `spec/qa/regresion`, `app/javascript/qa/regresion` y `qa/cypress/e2e/regresion` |
| Accesibilidad con axe (Cypress) | `qa/cypress/e2e/accesibilidad/{luisa,daniel,juanpablo}.cy.js` y `qa/cypress/support/accesibilidad.js` |
| Documento del criterio 11 | `qa/docs/criterio11_accesibilidad.md` |
| Seguridad OWASP por integrante (Cypress) | `qa/cypress/e2e/seguridad/{luisa,daniel,juanpablo}.cy.js` y `fuerza_bruta.cy.js` (`npm run cy:seguridad:rack`, con Rack::Attack activo) |
| Evidencias de seguridad (Brakeman, bundle-audit, pnpm audit, SonarQube, Cypress) | `qa/evidencias/seguridad/` |
| Documento del criterio 13 | `qa/docs/criterio13_seguridad.md` |
| IA aplicada a testing (Stagehand, DeepEval y 3.ª herramienta por integrante) | `qa/ia/` (ver `qa/ia/README.md`) |
| Evidencias de IA (Stagehand, DeepEval, Postbot, Playwright MCP) | `qa/evidencias/ia/` |
| Documento del criterio 14 | `qa/docs/criterio14_ia.md` |

Los diagramas de flujo y los grafos están en Drive (carpeta CHATWOOT, `Chatwoot_Caja_Blanca_Diagramas.drawio`).
