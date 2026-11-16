# Criterio 9 — Pipeline reproducible en Jenkins

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

El pipeline está en el `Jenkinsfile` de la raíz del repositorio (declarativo, `agent any`). Hace, en este orden:

1. Verifica que corre sobre la rama `proyecto-final`.
2. Prepara con Docker una red con PostgreSQL (`pgvector/pgvector:pg16`) y Redis (`redis:7-alpine`).
3. Corre **RSpec** con **SimpleCov** (backend) y **Vitest** con cobertura V8 (frontend).
4. Levanta `chatwoot/chatwoot:v4.19.1` con las correcciones del equipo, crea los datos de prueba y corre **Cypress** sobre los 15 requisitos.
5. Analiza con **SonarQube** (`sonar-project.properties`) y espera el **Quality Gate** (`waitForQualityGate abortPipeline: true`).
6. Publica los reportes JUnit, archiva los artefactos y borra los contenedores, la red y el volumen del build.

El historial del pipeline en Git (autor de los cuatro commits: Juan Pablo Berrío):

| Commit | Cambio |
|---|---|
| `6117c81b8` | Primera versión del `Jenkinsfile` y de `sonar-project.properties` |
| `486b8c979` | Corrige la lectura del JSON de `create_qa_data.rb` (los logs de Rails traen llaves) y oculta contraseñas y tokens de la consola con `set +x` |
| `7b32d87fe` | Quita la marca de onboarding de Redis para que Cypress vea el login; cambia la cobertura de Ruby a `coverage.json`; amplía la regresión (`RSPEC_REGRESION`, `VITEST_REGRESION`); excluye de cobertura tres componentes de pantalla |
| `e030f539d` | `TZ=America/Bogota` para Cypress y volumen compartido `/app/storage` entre rails y sidekiq (importación CSV, RF-07) |

## 2. Requisitos en Jenkins

El repositorio **no trae** un `docker-compose` ni un script para levantar Jenkins o SonarQube. Lo que sigue sale del encabezado del `Jenkinsfile` y de los pasos que usa (las listas de plugins son deducidas de esos pasos, no de una instalación documentada).

| Requisito | Detalle | Dónde se usa |
|---|---|---|
| Jenkins con acceso a Docker | Jenkins corre en Docker con el socket de Docker del equipo montado y el volumen `jenkins_home` (la etapa 1 lo comprueba con `docker volume inspect jenkins_home`) | Todas las etapas con `docker run` |
| Volumen compartido | Los contenedores de prueba montan `jenkins_home` en `/var/jenkins_home` y usan `-w "$WORKSPACE"`, así ven el workspace con la misma ruta que Jenkins y las rutas de cobertura coinciden con las del scanner | RSpec, Vitest, Cypress |
| Java y Node en el agente | La etapa 1 ejecuta `java -version` y `node --version` | Verificación del entorno |
| Herramienta NodeJS | Nombre **`NodeJS 22`** (`tools { nodejs 'NodeJS 22' }`); el analizador de JavaScript de SonarQube la necesita | Todo el pipeline |
| Servidor SonarQube | Nombre **`SonarQube`** (`withSonarQubeEnv('SonarQube')`) | Análisis |
| Herramienta SonarScanner | Nombre **`SonarScanner`**, tipo `hudson.plugins.sonar.SonarRunnerInstallation` | Análisis |
| Credencial | ID **`sonar-token-chatwoot`**, tipo *Secret text*, token del proyecto `Chatwoot` en SonarQube; se expone como `SONAR_TOKEN_CHATWOOT` y se pasa como `-Dsonar.token` | Análisis |
| Webhook en SonarQube | `http://host.docker.internal:8080/sonarqube-webhook/` hacia Jenkins; sin él `waitForQualityGate` no recibe el resultado | Quality Gate |
| Job | Branch Specifier `*/proyecto-final` (si la rama es otra, el pipeline falla a propósito en la etapa 1) | Checkout |

Plugins deducidos de los pasos del `Jenkinsfile`: Pipeline, Git, Credentials Binding (`withCredentials`), NodeJS (`tools`), SonarQube Scanner (`withSonarQubeEnv`, `waitForQualityGate`, `SonarRunnerInstallation`), JUnit (`junit`), Timestamper (`timestamps()`) y la acción de archivar artefactos (`archiveArtifacts`).

Imágenes fijadas en `environment` (las del plan de pruebas): `ruby:3.4.4`, `node:24`, `pgvector/pgvector:pg16`, `redis:7-alpine`, `chatwoot/chatwoot:v4.19.1`, `cypress/included:13.17.0`, `curlimages/curl:8.11.1` y `pnpm@10.2.0`.

Opciones del pipeline: `timestamps()`, `disableConcurrentBuilds()`, tiempo máximo de 120 minutos y conservación de los últimos 10 builds.

## 3. Parámetros

| Parámetro | Tipo | Valor por defecto | Efecto |
|---|---|---|---|
| `INTEGRANTE` | choice: `todos`, `luisa`, `daniel`, `juanpablo` | `todos` | Elige los archivos de Cypress: `todos` = `cypress/e2e/**/*.cy.js` (incluye regresión, accesibilidad y seguridad); un integrante = `smoke` + su carpeta |
| `EJECUTAR_RSPEC` | boolean | `true` | Activa la etapa de RSpec y SimpleCov |
| `EJECUTAR_VITEST` | boolean | `true` | Activa la etapa de Vitest y cobertura |
| `EJECUTAR_CYPRESS` | boolean | `true` | Activa las tres etapas de Cypress (levantar Chatwoot, datos, ejecución) |

Las etapas de SonarQube y Quality Gate no tienen `when`: corren siempre.

## 4. Etapas

| # | Etapa | Qué hace | Comando principal | Reporte o salida |
|---|---|---|---|---|
| 1 | Checkout | Descarga el código del job | `checkout scm` | — |
| 2 | Verificar rama y entorno | Falla si la rama no termina en `proyecto-final`; muestra versiones y crea `qa/reports/junit` | `git log -1`, `docker --version`, `node --version`, `java -version`, `docker volume inspect` | — |
| 3 | Preparar entorno con Docker | Crea la red `chatwoot-ci-<build>`, PostgreSQL (con `tmpfs`) y Redis; espera `pg_isready` hasta 30 intentos | `docker network create`, `docker run -d` | — |
| 4 | Backend: RSpec y SimpleCov | En `ruby:3.4.4`: `bundle install`, crea la base de pruebas y corre `spec/qa` + `$RSPEC_REGRESION` (27 archivos o carpetas de specs originales) | `bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa $RSPEC_REGRESION --format RspecJunitFormatter` | `qa/reports/junit/rspec.xml`; `qa/reports/coverage/` (HTML y `coverage.json`) |
| 5 | Frontend: Vitest y cobertura | En `node:24`: instala con pnpm 10.2.0 (`--frozen-lockfile`) y corre `app/javascript/qa` + `$VITEST_REGRESION` | `npx vitest --no-watch --no-cache ... --coverage --coverage.reporter=lcov` | `qa/reports/junit/vitest.xml`; `qa/reports/coverage-front/` (`lcov.info` y HTML) |
| 6 | Levantar Chatwoot 4.19.1 para E2E | Genera `SECRET_KEY_BASE`, prepara la base (`db:chatwoot_prepare`), crea rails y sidekiq con `/app/storage` compartido, copia encima los 7 archivos corregidos (D-01 a D-04, D-06, D-08) y espera `/api` con 200 (hasta 60 intentos) | `docker run ... db:chatwoot_prepare`, `docker cp`, `curl` | Si no responde, imprime las últimas 80 líneas del log de rails |
| 7 | Datos de prueba E2E | Ejecuta `qa/scripts/create_qa_data.rb`, quita la marca de onboarding de Redis y escribe `qa/cypress.env.json` con IDs, tokens y una contraseña aleatoria por build (con `set +x`) | `docker exec ... rails runner`, `node -e` | `qa/cypress.env.json` (se borra al final) |
| 8 | E2E y API: Cypress (RF-01 a RF-15) | En `cypress/included:13.17.0` con `TZ=America/Bogota`: `npm install` y `cypress run` en Electron sobre los specs de `INTEGRANTE` | `npx cypress run --browser electron --spec "$CYPRESS_SPECS"` | Reporte HTML de mochawesome (`qa/cypress.config.js`: `reports/cypress`, relativo a `qa/`) |
| 9 | SonarQube Analysis | Ejecuta `sonar-scanner` con `projectKey=Chatwoot` y versión `4.19.1-build-<n>` | `sonar-scanner -Dsonar.token=$SONAR_TOKEN_CHATWOOT` | Análisis en el servidor SonarQube |
| 10 | Quality Gate | Espera hasta 10 minutos el resultado del webhook; aborta el pipeline si el gate falla | `waitForQualityGate abortPipeline: true` | Estado del gate en Jenkins y en SonarQube |

Si las etapas 4, 5 u 8 fallan, `catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE')` deja el build **inestable** y el pipeline sigue hasta SonarQube, para que el análisis muestre los defectos en lugar de cortarse. Las etapas 4, 5 y 8 se omiten con su parámetro, pero SonarQube corre igual (sin cobertura si faltan los reportes).

Bloque `post { always }`: publica `qa/reports/junit/*.xml` con `junit`, archiva `qa/reports/**/*` (con huella) y `qa-rails.log` (últimas 200 líneas de rails), y elimina los contenedores, la red, el volumen `chatwoot-ci-storage-<n>`, `ci-chatwoot.env` y `qa/cypress.env.json`. Los mensajes `success` y `unstable` explican el resultado en la consola.

### 4.1 Detalles de reproducibilidad

- **Aislamiento:** los nombres de red, contenedores y volumen llevan el número del build (`chatwoot-ci-${BUILD_NUMBER}`), así que no chocan con el entorno de desarrollo; `disableConcurrentBuilds()` evita dos builds a la vez. La base de PostgreSQL vive en `tmpfs`.
- **Versiones fijas:** Chatwoot se prueba sobre la imagen `v4.19.1`, no sobre el código del workspace. Las correcciones del equipo se copian con `docker cp` (misma lista que los volúmenes de `qa/docker-compose.e2e.yaml`).
- **Secretos fuera del repositorio:** la clave de Rails y la contraseña de los usuarios de prueba se generan en cada build; el token de SonarQube viene de la credencial.
- **Rack::Attack desactivado en CI:** `ENABLE_RACK_ATTACK=false` en `ci-chatwoot.env`. Por eso las 3 pruebas de fuerza bruta de `seguridad/fuerza_bruta.cy.js` quedan **omitidas** en Jenkins (necesitan `--env rackAttack=true`, criterio 13).
- **Reporte de Cypress:** no genera JUnit; `junit` solo recoge `rspec.xml` y `vitest.xml`. El resultado de Cypress queda en el reporte mochawesome archivado y en la consola.

## 5. Cobertura y SonarQube

### 5.1 Generación de la cobertura

| Capa | Herramienta | Configuración | Salida | Cómo la lee SonarQube |
|---|---|---|---|---|
| Backend | SimpleCov (líneas y ramas) | `qa/simplecov_qa.rb`: perfil `rails`, `enable_coverage :branch`, directorio `qa/reports/coverage`, formateadores HTML y JSON | `coverage.json` y `index.html` | `sonar.ruby.coverage.reportPaths=qa/reports/coverage/coverage.json` (SonarQube 26 no lee el `.resultset.json` cuando trae cobertura de ramas) |
| Frontend | Vitest con V8 | `vitest.config.ts` (entorno `jsdom`, incluye `app/**/*.js` y `app/**/*.vue`, excluye specs, i18n y rutas); el pipeline fija reportero `lcov` y directorio `qa/reports/coverage-front` | `lcov.info` y HTML | `sonar.javascript.lcov.reportPaths=qa/reports/coverage-front/lcov.info` |
| E2E | Cypress | `qa/cypress.config.js` (mochawesome, sin cobertura) | `reports/cypress` | No aporta cobertura |

### 5.2 Alcance del análisis (`sonar-project.properties`)

- Proyecto `Chatwoot` (clave y nombre). Código fuente: solo los archivos de `app/` que listan `sonar.inclusions` (modelos, controladores, servicios, builders y módulos de Vuex/componentes de los 15 requisitos), según los numerales 5.4 y 15 del plan de pruebas.
- Pruebas: `spec/qa`, `app/javascript/qa` y `qa/cypress` (`sonar.test.inclusions`: `*_spec.rb`, `*.spec.js`, `*.cy.js`).
- `ChatList.vue`, `ResolveAction.vue` y `CmdBarConversationSnooze.vue` se analizan por calidad pero no cuentan para la cobertura (`sonar.coverage.exclusions`): no tienen pruebas unitarias en Chatwoot y se verifican con Cypress.

### 5.3 Quality Gate: resultado en las evidencias

`qa/evidencias/seguridad/sonarqube_quality_gate.json`:

```json
{"projectStatus":{"status":"OK","conditions":[],"ignoredConditions":false,"caycStatus":"compliant"}}
```

| Dato | Valor |
|---|---|
| Estado del gate | **OK** (`caycStatus`: `compliant`, es decir, cumple el modelo "Clean as You Code") |
| Condiciones evaluadas | Ninguna (`conditions: []`): la respuesta de la API no lista condiciones |
| Proyecto | `Chatwoot-Seguridad`, análisis manual del criterio 13 con este mismo `sonar-project.properties` (no es un build de Jenkins) |
| Medidas (`sonarqube_medidas.json`) | 6 339 líneas de código; 0 vulnerabilidades; 0 security hotspots; calificación de seguridad A (1.0); mantenibilidad `sqale_rating` A (1.0); 4 bugs y 54 code smells; calificación de fiabilidad C (3.0) |

Lo que no se puede afirmar con estas evidencias: qué condiciones tiene el gate configurado en el servidor (el JSON las devuelve vacías, así que el repositorio no documenta cuáles son), ni el porcentaje de cobertura que SonarQube calculó (no hay un archivo de medidas con `coverage`). Los análisis ampliados (`sonarqube_amplio_*.json`, proyecto `Chatwoot-Seguridad-Amplio`) pertenecen al criterio 13: 57 324 líneas y 3 vulnerabilidades críticas `javascript:S2819` en el widget, fuera de los 15 requisitos.

## 6. Dónde quedan los reportes

| Reporte | Ruta en el workspace | Cómo se consulta en Jenkins |
|---|---|---|
| JUnit de RSpec | `qa/reports/junit/rspec.xml` | Pestaña de resultados de pruebas del build (`junit`) |
| JUnit de Vitest | `qa/reports/junit/vitest.xml` | Igual |
| Cobertura de backend | `qa/reports/coverage/index.html` y `coverage.json` | Artefactos del build; en SonarQube vía `sonar.ruby.coverage.reportPaths` |
| Cobertura de frontend | `qa/reports/coverage-front/index.html` y `lcov.info` | Artefactos; en SonarQube vía `sonar.javascript.lcov.reportPaths` |
| Reporte de Cypress | `qa/reports/cypress/` (mochawesome) | Artefactos |
| Log de rails | `qa-rails.log` | Artefacto |

`qa/reports/` está en el `.gitignore` de `qa/`: se genera en cada build y no se sube al repositorio. En la copia local del repositorio hay restos de ejecuciones manuales (`qa/reports/coverage`, `coverage-front` y JUnit de Cypress de Daniel), pero no los `rspec.xml` ni `vitest.xml` del pipeline.

## 7. Cómo reproducirlo

### 7.1 Con Jenkins

1. Tener Jenkins con el socket de Docker y el volumen `jenkins_home`, y SonarQube accesible (sección 2).
2. En Jenkins: configurar el servidor `SonarQube`, las herramientas `SonarScanner` y `NodeJS 22`, y la credencial `sonar-token-chatwoot` con el token del proyecto `Chatwoot`.
3. En SonarQube: crear el proyecto `Chatwoot` y el webhook hacia Jenkins (`/sonarqube-webhook/`).
4. Crear un job *Pipeline from SCM* sobre este repositorio con Branch Specifier `*/proyecto-final` y el script `Jenkinsfile`.
5. Ejecutar con *Build with Parameters*. Para una corrida corta: `INTEGRANTE=daniel` y desmarcar RSpec o Vitest.

### 7.2 Sin Jenkins (cada etapa por separado)

Desde la raíz del repositorio; los comandos están en `qa/README.md` y en los criterios 6 y 7.

```bash
# Backend (RSpec + SimpleCov), equivalente a la etapa 4
docker compose -f docker-compose.production.yaml up -d postgres redis
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rails db:create db:schema:load
docker compose -f docker-compose.production.yaml -f qa/docker-compose.qa.yaml run --rm rspec bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa

# Frontend (Vitest + cobertura), equivalente a la etapa 5
TZ=UTC npx vitest --no-watch app/javascript/qa --coverage --coverage.reportsDirectory=qa/reports/coverage-front --coverage.reporter=lcov

# Chatwoot 4.19.1 y Cypress, equivalente a las etapas 6 a 8 (ver qa/README.md, secciones 1 a 3)
docker compose -f docker-compose.production.yaml -f qa/docker-compose.e2e.yaml up -d
cd qa && npm install && npm run cy:run

# SonarQube (con un servidor propio y su token)
sonar-scanner -Dsonar.host.url=<url> -Dsonar.token=<token>
```

## 8. Pendientes (sin evidencia en el repositorio)

| Pendiente | Detalle |
|---|---|
| Ejecución del pipeline en Jenkins | No hay consola de un build, captura de la vista de etapas, número de build ni resultado (`SUCCESS` o `UNSTABLE`) guardados en el repositorio. Los commits `486b8c979` y `7b32d87fe` corrigen fallos que apuntan a que se ejecutó, pero la ejecución no está documentada |
| Quality Gate del proyecto `Chatwoot` | El único JSON del gate es del proyecto `Chatwoot-Seguridad` (análisis manual). Falta el resultado del build de Jenkins para el proyecto `Chatwoot` |
| Condiciones del Quality Gate | La respuesta guardada no lista condiciones; hay que capturar el gate configurado en SonarQube (Quality Gates) |
| Cobertura en SonarQube | No hay captura ni JSON de `coverage` / `line_coverage` del proyecto con los reportes de Jenkins |
| Reportes JUnit del pipeline | No se guardaron `rspec.xml`, `vitest.xml` ni el reporte mochawesome de un build |
| Instrucciones para levantar Jenkins y SonarQube localmente | No existen en el repositorio (ni compose ni README); la sección 2 es una deducción del `Jenkinsfile` |
| Cypress de seguridad con Rack::Attack en CI | Las 3 pruebas de fuerza bruta quedan omitidas en Jenkins; solo hay evidencia de su ejecución local (criterio 13) |
