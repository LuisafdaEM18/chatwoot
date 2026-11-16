# ReportPortal — Daniel (RF-06 a RF-10), criterio 14

**Herramienta de IA (trabajada en clase):** ReportPortal y su **Auto-Analysis**.

ReportPortal recibe los resultados de las pruebas y aplica un modelo de aprendizaje automático
(sobre OpenSearch) que:

- **Auto-Analysis:** compara cada fallo nuevo con el histórico y propone la causa (defecto de
  producto, problema del automatizador o del entorno), marcando los fallos ya conocidos.
- **Pattern/Unique Error Analysis:** agrupa fallos por patrones de log.

Es la pieza de IA que **analiza y mantiene** las pruebas de contactos de Daniel.

## Se ejecutó en vivo

1. **Levantar la pila** (compose oficial v5.15, 11 servicios):

```bash
cd qa/ia/herramientas/daniel_reportportal
docker compose -f docker-compose.oficial.yml -p reportportal up -d
# UI: http://localhost:8080  (superadmin / erebus)
```

2. **Generar los resultados** de las pruebas de contactos en JUnit:

```bash
cd qa
npx cypress run --spec "cypress/e2e/daniel/**/*.cy.js" \
  --reporter junit --reporter-options "mochaFile=reports/junit/daniel-[hash].xml"
```

3. **Crear el launch y lanzar el Auto-Analysis** (por la API de RP):

```bash
node qa/ia/herramientas/daniel_reportportal/push_junit.mjs
```

Resultado real: los 11 servicios quedaron *healthy* (incluido `analyzer`, la IA); se creó el launch
**daniel_contactos (Cypress RF-06..10)** con **15/15** casos y se disparó el Auto-Analysis
(`autoAnalyzer analysis for launch ID='1' started`). Evidencia en
`qa/evidencias/ia/reportportal_envivo.txt` y la captura `reportportal_launches.jpg`.

Como la suite de Daniel está en verde, el Auto-Analysis se ejecuta pero no tiene fallos que clasificar
(classifica *fallos*; con 15/15 no hay ninguno).

## Archivos

| Archivo | Qué es |
|---|---|
| `docker-compose.oficial.yml` | Pila completa de ReportPortal (traefik, postgres, rabbitmq, opensearch, api, uat, index, jobs, ui y **analyzer**) |
| `push_junit.mjs` | Crea el launch en vivo desde los JUnit de Cypress y dispara el Auto-Analysis |
| `importar.sh` | Alternativa: empaqueta los JUnit (la importación por ZIP depende de la versión de RP) |

## Notas

- RP pide ~4 GB de RAM; en este equipo se detuvo Ollama antes de levantarlo.
- `importar.sh` (import por ZIP vía UI/API) quedó como alternativa; en RP 5.15 esa ruta responde 405,
  por eso el camino usado fue la API de launch (`push_junit.mjs`).
- Credenciales por defecto de RP: superadmin / erebus (cámbialas en un entorno real).
