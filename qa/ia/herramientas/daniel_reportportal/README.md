# ReportPortal — Daniel (RF-06 a RF-10), criterio 14

**Herramienta de IA (trabajada en clase):** ReportPortal y su **Auto-Analysis**.

ReportPortal es un panel que recibe los resultados de las pruebas y aplica un modelo de
aprendizaje automático (sobre OpenSearch) que:

- **Auto-Analysis:** compara cada fallo nuevo con el histórico y propone la causa
  (defecto de producto, problema del automatizador o del entorno), marcando los fallos ya
  conocidos para no re-analizarlos a mano.
- **Pattern Analysis / sugerencias:** agrupa fallos por patrones de log y sugiere la
  etiqueta del defecto.

Es la pieza de IA que **analiza y mantiene** las pruebas de contactos de Daniel.

## Qué se le envía

Los resultados de las pruebas de contactos (Cypress RF-06 a RF-10, `qa/cypress/e2e/daniel/`)
en formato JUnit. Cypress los genera con el reporter `junit`:

```bash
cd qa
npx cypress run --spec "cypress/e2e/daniel/**/*.cy.js" \
  --reporter junit --reporter-options "mochaFile=reports/junit/daniel-[hash].xml"
```

Esos XML se cargan a ReportPortal con el agente o por importación directa (menú *Import* del
proyecto, que acepta un ZIP de archivos JUnit).

Para una integración nativa (que crea el *launch* y envía los pasos en vivo) se usa el agente
`@reportportal/agent-js-cypress` con esta configuración (`reporterOptions`):

```js
// cypress.config.js (extracto)
reporter: '@reportportal/agent-js-cypress',
reporterOptions: {
  endpoint: 'http://localhost:8080/api/v1',
  apiKey: '<API key del perfil de ReportPortal>',
  project: 'qa_chatwoot',
  launch: 'daniel_contactos',
}
```

## Ejecución

La pila de ReportPortal (PostgreSQL, RabbitMQ, OpenSearch, API, UAT, index, **analyzer** (la IA),
UI y gateway) pide ~4 GB de RAM. En el equipo de pruebas, con Ollama (criterio 14) y Chatwoot ya
ocupando la memoria disponible, **no se levantó en vivo a la vez**; `docker-compose.reportportal.yml`
deja listas las dependencias de datos y el README apunta al compose oficial fijado a la versión 5
para los servicios de aplicación:

```bash
docker compose -f docker-compose.reportportal.yml up -d   # dependencias de datos
# + servicios de aplicación del compose oficial v5 (api, uat, index, analyzer, ui, gateway)
```

UI: http://localhost:8080 (superadmin / erebus). Tras cargar los JUnit, en el *launch*
`daniel_contactos` se ejecuta **Auto-Analysis** desde el menú del launch.

## Límite

Por la RAM del equipo, esta herramienta se entrega **configurada y documentada**, no ejecutada en
vivo junto al resto del criterio. La integración (reporter + import) y el uso del Auto-Analysis
quedan descritos para reproducirla en una máquina con memoria suficiente.
