// Pipeline de pruebas de Chatwoot 4.19.1, proyecto final de Validación y verificación de software.
//
// Alcance: los 15 requisitos del plan de pruebas.
//   RF-01 a RF-05  Conversaciones (Luisa Fernanda Espinal Montoya)
//   RF-06 a RF-10  Contactos (Daniel Ortiz Ortiz)
//   RF-11 a RF-15  Productividad (Juan Pablo Berrío Díaz)
//
// Etapas: verifica la rama proyecto-final, prepara con Docker una red con PostgreSQL y Redis,
// corre RSpec (caja blanca, caja negra, TDD, unitarias y regresión) con SimpleCov, corre Vitest
// con cobertura V8, levanta Chatwoot 4.19.1 con las correcciones del equipo, corre Cypress sobre
// los 15 requisitos, analiza con SonarQube y espera el Quality Gate.
//
// Requisitos en Jenkins:
//   - Jenkins en Docker con el socket de Docker del equipo montado y el volumen jenkins_home.
//   - Servidor SonarQube configurado con el nombre "SonarQube" y la herramienta "SonarScanner".
//   - Herramienta NodeJS llamada "NodeJS 22" (el analizador de JavaScript de SonarQube la necesita).
//   - Credencial "sonar-token-chatwoot" (Secret text) con el token del proyecto Chatwoot.
//   - En SonarQube, un webhook a http://host.docker.internal:8080/sonarqube-webhook/
//
// Los contenedores de pruebas montan el volumen jenkins_home en la misma ruta que usa Jenkins,
// así ven el workspace con la misma ruta y los reportes de cobertura quedan con rutas que el
// scanner de SonarQube reconoce.

pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
    timeout(time: 120, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  parameters {
    choice(
      name: 'INTEGRANTE',
      choices: ['todos', 'luisa', 'daniel', 'juanpablo'],
      description: 'Pruebas de Cypress que se ejecutan: todas o las de un integrante (más la prueba de humo).'
    )
    booleanParam(name: 'EJECUTAR_RSPEC', defaultValue: true, description: 'Pruebas del backend con RSpec y SimpleCov.')
    booleanParam(name: 'EJECUTAR_VITEST', defaultValue: true, description: 'Pruebas del frontend con Vitest y cobertura V8.')
    booleanParam(name: 'EJECUTAR_CYPRESS', defaultValue: true, description: 'Pruebas E2E y de API con Cypress sobre Chatwoot 4.19.1.')
  }

  tools {
    nodejs 'NodeJS 22'
  }

  environment {
    RAMA_ESPERADA = 'proyecto-final'

    SONAR_PROJECT_KEY = 'Chatwoot'
    SONAR_PROJECT_NAME = 'Chatwoot'

    // Volumen de Jenkins que comparten los contenedores de pruebas.
    JENKINS_HOME_VOLUME = 'jenkins_home'

    // Imágenes con las versiones del plan de pruebas.
    IMG_POSTGRES = 'pgvector/pgvector:pg16'
    IMG_REDIS = 'redis:7-alpine'
    IMG_RUBY = 'ruby:3.4.4'
    IMG_NODE = 'node:24'
    IMG_CHATWOOT = 'chatwoot/chatwoot:v4.19.1'
    IMG_CYPRESS = 'cypress/included:13.17.0'
    IMG_CURL = 'curlimages/curl:8.11.1'
    PNPM = 'pnpm@10.2.0'

    // Nombres únicos por ejecución para no chocar con el entorno de desarrollo.
    CI_NET = "chatwoot-ci-${BUILD_NUMBER}"
    CI_PG = "chatwoot-ci-pg-${BUILD_NUMBER}"
    CI_REDIS = "chatwoot-ci-redis-${BUILD_NUMBER}"
    CI_RAILS = "chatwoot-ci-rails-${BUILD_NUMBER}"
    CI_SIDEKIQ = "chatwoot-ci-sidekiq-${BUILD_NUMBER}"
    CI_PG_PASSWORD = 'ci-postgres-password'

    // Suite de regresión: specs originales de Chatwoot de los modelos, servicios y controladores
    // de los 15 requisitos (incluidos los archivos corregidos por el equipo, D-01 a D-08).
    // Se corren junto con las pruebas del equipo (spec/qa y app/javascript/qa).
    RSPEC_REGRESION = 'spec/models/conversation_spec.rb spec/models/custom_attribute_definition_spec.rb spec/models/custom_filter_spec.rb spec/models/data_import_spec.rb spec/models/label_spec.rb spec/models/macro_spec.rb spec/models/contact_spec.rb spec/models/automation_rule_spec.rb spec/services/automation_rules spec/services/macros/execution_service_spec.rb spec/services/search_service_spec.rb spec/builders/messages/message_builder_spec.rb spec/controllers/api/v1/accounts/conversations/assignments_controller_spec.rb spec/controllers/api/v1/accounts/conversations/messages_controller_spec.rb spec/controllers/api/v1/accounts/conversations_controller_spec.rb spec/controllers/api/v1/accounts/contacts_controller_spec.rb spec/controllers/api/v1/accounts/contacts/notes_controller_spec.rb spec/controllers/api/v1/accounts/custom_filters_controller_spec.rb spec/controllers/api/v1/accounts/custom_attribute_definitions_controller_spec.rb spec/controllers/api/v1/accounts/team_members_controller_spec.rb spec/controllers/api/v1/accounts/teams_controller_spec.rb spec/controllers/api/v1/accounts/canned_responses_controller_spec.rb spec/controllers/api/v1/accounts/labels_controller_spec.rb spec/controllers/api/v1/accounts/automation_rules_controller_spec.rb spec/controllers/api/v1/accounts/macros_controller_spec.rb spec/controllers/api/v1/accounts/search_controller_spec.rb spec/controllers/api/v2/accounts/reports_controller_spec.rb'
    VITEST_REGRESION = 'app/javascript/dashboard/helper/specs/automationHelper.spec.js app/javascript/dashboard/helper/specs/filterQueryGenerator.spec.js app/javascript/dashboard/store/modules/specs/attributes app/javascript/dashboard/store/modules/specs/cannedResponses app/javascript/dashboard/store/modules/specs/contactNotes app/javascript/dashboard/store/modules/specs/contacts app/javascript/dashboard/store/modules/specs/conversations app/javascript/dashboard/store/modules/specs/conversationSearch app/javascript/dashboard/store/modules/specs/labels app/javascript/dashboard/store/modules/specs/teams app/javascript/shared/helpers/specs/ReportsDataHelper.spec.js'

    REPORTES = 'qa/reports'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Verificar rama y entorno') {
      steps {
        script {
          def rama = (env.GIT_BRANCH ?: sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true)).trim()
          echo "Rama: ${rama}"
          if (!rama.endsWith(env.RAMA_ESPERADA)) {
            error("El pipeline debe correr sobre la rama ${env.RAMA_ESPERADA} y se ejecutó sobre ${rama}. Revisa el Branch Specifier del job (*/${env.RAMA_ESPERADA}).")
          }
        }
        sh '''
          set -e
          git log -1 --oneline
          docker --version
          node --version
          java -version 2>&1 | head -1
          docker volume inspect "$JENKINS_HOME_VOLUME" > /dev/null
          rm -rf "$REPORTES"
          mkdir -p "$REPORTES/junit"
        '''
      }
    }

    stage('Preparar entorno con Docker') {
      steps {
        sh '''
          set -e
          docker network create "$CI_NET"
          docker run -d --name "$CI_PG" --network "$CI_NET" \
            -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD="$CI_PG_PASSWORD" \
            --tmpfs /var/lib/postgresql/data \
            "$IMG_POSTGRES"
          docker run -d --name "$CI_REDIS" --network "$CI_NET" "$IMG_REDIS"

          for intento in $(seq 1 30); do
            if docker exec "$CI_PG" pg_isready -U postgres > /dev/null 2>&1; then
              echo "PostgreSQL listo"
              exit 0
            fi
            sleep 2
          done
          echo "PostgreSQL no respondió"
          exit 1
        '''
      }
    }

    stage('Backend: RSpec y SimpleCov') {
      when { expression { params.EJECUTAR_RSPEC } }
      steps {
        // Si fallan pruebas, el build queda inestable y el pipeline sigue hasta SonarQube,
        // para que el reporte muestre los defectos en lugar de cortar el análisis.
        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
          sh '''
            set -e
            docker run --rm --network "$CI_NET" \
              -v "$JENKINS_HOME_VOLUME":/var/jenkins_home \
              -v chatwoot_ci_bundle:/usr/local/bundle \
              -w "$WORKSPACE" \
              -e RAILS_ENV=test -e NODE_ENV=test -e EXECJS_RUNTIME=Disabled \
              -e POSTGRES_HOST="$CI_PG" -e POSTGRES_USERNAME=postgres -e POSTGRES_PASSWORD="$CI_PG_PASSWORD" \
              -e POSTGRES_DATABASE=chatwoot_test \
              -e REDIS_URL="redis://$CI_REDIS:6379" -e REDIS_PASSWORD= \
              -e BUNDLE_WITHOUT= -e BUNDLE_JOBS=4 \
              -e RSPEC_REGRESION="$RSPEC_REGRESION" -e REPORTES="$REPORTES" \
              -e HOST_UID="$(id -u)" -e HOST_GID="$(id -g)" \
              "$IMG_RUBY" bash -c '
                set -e
                trap "chown -R $HOST_UID:$HOST_GID $REPORTES log tmp 2>/dev/null || true" EXIT
                bundle install --quiet
                bundle exec rails db:create db:schema:load
                bundle exec rspec -r ./qa/simplecov_qa.rb spec/qa $RSPEC_REGRESION \
                  --format progress \
                  --format RspecJunitFormatter --out $REPORTES/junit/rspec.xml
              '
          '''
        }
      }
    }

    stage('Frontend: Vitest y cobertura') {
      when { expression { params.EJECUTAR_VITEST } }
      steps {
        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
          sh '''
            set -e
            docker run --rm \
              --user "$(id -u):$(id -g)" -e HOME=/tmp \
              -v "$JENKINS_HOME_VOLUME":/var/jenkins_home \
              -w "$WORKSPACE" \
              -e TZ=UTC -e CI=true \
              "$IMG_NODE" sh -c "
                set -e
                npx --yes $PNPM install --frozen-lockfile --store-dir $WORKSPACE/.pnpm-store
                npx vitest --no-watch --no-cache app/javascript/qa $VITEST_REGRESION \
                  --reporter=default --reporter=junit --outputFile=$REPORTES/junit/vitest.xml \
                  --coverage --coverage.reportsDirectory=$REPORTES/coverage-front \
                  --coverage.reporter=lcov --coverage.reporter=text-summary
              "
          '''
        }
      }
    }

    stage('Levantar Chatwoot 4.19.1 para E2E') {
      when { expression { params.EJECUTAR_CYPRESS } }
      steps {
        sh '''
          set -e
          # set +x: Jenkins muestra cada comando en la consola; así la clave no queda en el log.
          set +x
          SECRET="$(head -c 64 /dev/urandom | od -An -tx1 | tr -d ' \\n')"

          # Variables comunes de rails y sidekiq (misma configuración que qa/docker-compose.e2e.yaml).
          cat > ci-chatwoot.env <<EOF
SECRET_KEY_BASE=$SECRET
FRONTEND_URL=http://$CI_RAILS:3000
RAILS_ENV=production
NODE_ENV=production
INSTALLATION_ENV=docker
POSTGRES_HOST=$CI_PG
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=$CI_PG_PASSWORD
POSTGRES_DATABASE=chatwoot_production
REDIS_URL=redis://$CI_REDIS:6379
REDIS_PASSWORD=
ENABLE_RACK_ATTACK=false
MAX_USER_SESSIONS=500
RAILS_LOG_TO_STDOUT=true
EOF
          set -x

          docker run --rm --network "$CI_NET" --env-file ci-chatwoot.env \
            --entrypoint docker/entrypoints/rails.sh \
            "$IMG_CHATWOOT" bundle exec rails db:chatwoot_prepare

          docker create --name "$CI_RAILS" --network "$CI_NET" --env-file ci-chatwoot.env \
            --entrypoint docker/entrypoints/rails.sh \
            "$IMG_CHATWOOT" bundle exec rails s -p 3000 -b 0.0.0.0
          docker create --name "$CI_SIDEKIQ" --network "$CI_NET" --env-file ci-chatwoot.env \
            "$IMG_CHATWOOT" bundle exec sidekiq -C config/sidekiq.yml

          # Correcciones del backend hechas por el equipo (D-01 a D-04, D-06 y D-08): se copian
          # sobre la imagen publicada de 4.19.1, igual que los volúmenes de qa/docker-compose.e2e.yaml.
          for contenedor in "$CI_RAILS" "$CI_SIDEKIQ"; do
            for archivo in \
              app/models/conversation.rb \
              app/models/custom_attribute_definition.rb \
              app/models/custom_filter.rb \
              app/controllers/api/v1/accounts/conversations/assignments_controller.rb \
              app/controllers/api/v1/accounts/custom_filters_controller.rb \
              app/controllers/api/v1/accounts/team_members_controller.rb \
              config/locales/en.yml; do
              docker cp "$archivo" "$contenedor:/app/$archivo"
            done
          done

          docker start "$CI_RAILS" "$CI_SIDEKIQ"

          docker run --rm --network "$CI_NET" "$IMG_CURL" sh -c "
            for intento in \\$(seq 1 60); do
              codigo=\\$(curl -s -o /dev/null -w '%{http_code}' http://$CI_RAILS:3000/api)
              if [ \\"\\$codigo\\" = 200 ]; then echo 'Chatwoot listo'; exit 0; fi
              sleep 5
            done
            echo 'Chatwoot no respondió'; exit 1
          " || { docker logs --tail 80 "$CI_RAILS"; exit 1; }
        '''
      }
    }

    stage('Datos de prueba E2E') {
      when { expression { params.EJECUTAR_CYPRESS } }
      steps {
        sh '''
          set -e
          # La base de E2E vive solo durante la ejecución, así que la contraseña de los usuarios
          # de prueba se genera en cada build y no se guarda en el repositorio. set +x evita que
          # la contraseña y los tokens aparezcan en la consola de Jenkins.
          set +x
          echo "Creando la cuenta y los usuarios de prueba"
          QA_PASSWORD="Qa!$(head -c 12 /dev/urandom | od -An -tx1 | tr -d ' \\n')Z9"

          docker cp qa/scripts/create_qa_data.rb "$CI_RAILS:/tmp/create_qa_data.rb"
          docker exec -e QA_PASSWORD="$QA_PASSWORD" -e RAILS_LOG_TO_STDOUT= "$CI_RAILS" \
            bundle exec rails runner /tmp/create_qa_data.rb > ci-qa-data.txt

          # Una instalación nueva en producción redirige /app/login a /installation/onboarding hasta
          # que alguien crea el super administrador. La cuenta de pruebas ya existe, así que se
          # quita esa marca de Redis para que Cypress vea la pantalla de inicio de sesión.
          docker exec "$CI_RAILS" bundle exec rails runner \
            'Redis::Alfred.delete(Redis::Alfred::CHATWOOT_INSTALLATION_ONBOARDING)'

          # cypress.env.json = IDs y tokens que imprime el script + correos y contraseña de prueba.
          QA_PASSWORD="$QA_PASSWORD" node -e '
            const fs = require("fs");
            const salida = fs.readFileSync("ci-qa-data.txt", "utf8");
            // Antes del JSON, Rails y Sidekiq pueden imprimir líneas de log que también tienen
            // llaves; el JSON de JSON.pretty_generate empieza en una línea que solo tiene "{".
            const inicio = salida.search(/^\\{\\s*$/m);
            if (inicio < 0) { console.error(salida); throw new Error("create_qa_data.rb no imprimió el JSON esperado"); }
            const datos = JSON.parse(salida.slice(inicio, salida.lastIndexOf("}") + 1));
            const clave = process.env.QA_PASSWORD;
            Object.assign(datos, {
              adminEmail: "qa.admin@chatwoot.test", adminPassword: clave,
              agentEmail: "qa.agent@chatwoot.test", agentPassword: clave,
              agent2Email: "qa.agent2@chatwoot.test", agent2Password: clave,
            });
            fs.writeFileSync("qa/cypress.env.json", JSON.stringify(datos, null, 2));
            console.log("cypress.env.json listo para la cuenta", datos.accountId);
          '
          rm -f ci-qa-data.txt
        '''
      }
    }

    stage('E2E y API: Cypress (RF-01 a RF-15)') {
      when { expression { params.EJECUTAR_CYPRESS } }
      steps {
        script {
          def specs = [
            todos    : 'cypress/e2e/**/*.cy.js',
            luisa    : 'cypress/e2e/smoke/**/*.cy.js,cypress/e2e/luisa/**/*.cy.js',
            daniel   : 'cypress/e2e/smoke/**/*.cy.js,cypress/e2e/daniel/**/*.cy.js',
            juanpablo: 'cypress/e2e/smoke/**/*.cy.js,cypress/e2e/juanpablo/**/*.cy.js',
          ]
          env.CYPRESS_SPECS = specs[params.INTEGRANTE]
        }
        catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
          sh '''
            set -e
            docker run --rm --network "$CI_NET" \
              -v "$JENKINS_HOME_VOLUME":/var/jenkins_home \
              -w "$WORKSPACE/qa" \
              -e CYPRESS_BASE_URL="http://$CI_RAILS:3000" \
              -e CYPRESS_INSTALL_BINARY=0 \
              -e CYPRESS_SPECS="$CYPRESS_SPECS" \
              -e HOST_UID="$(id -u)" -e HOST_GID="$(id -g)" \
              --entrypoint bash \
              "$IMG_CYPRESS" -c '
                set -e
                trap "chown -R $HOST_UID:$HOST_GID . 2>/dev/null || true" EXIT
                npm install --no-audit --no-fund
                npx cypress run --browser electron --spec "$CYPRESS_SPECS"
              '
          '''
        }
      }
    }

    stage('SonarQube Analysis') {
      steps {
        script {
          def scannerHome = tool(name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation')
          withSonarQubeEnv('SonarQube') {
            withCredentials([string(credentialsId: 'sonar-token-chatwoot', variable: 'SONAR_TOKEN_CHATWOOT')]) {
              sh """
                set -e
                "${scannerHome}/bin/sonar-scanner" \
                  -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                  -Dsonar.projectName=${SONAR_PROJECT_NAME} \
                  -Dsonar.projectVersion=4.19.1-build-${BUILD_NUMBER} \
                  -Dsonar.token=\$SONAR_TOKEN_CHATWOOT
              """
            }
          }
        }
      }
    }

    stage('Quality Gate') {
      steps {
        timeout(time: 10, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'qa/reports/junit/*.xml'
      archiveArtifacts(
        artifacts: 'qa/reports/**/*',
        excludes: 'qa/reports/**/*.tmp',
        fingerprint: true,
        allowEmptyArchive: true
      )
      sh '''
        docker logs --tail 200 "$CI_RAILS" > qa-rails.log 2>&1 || true
        docker rm -f "$CI_RAILS" "$CI_SIDEKIQ" "$CI_PG" "$CI_REDIS" > /dev/null 2>&1 || true
        docker network rm "$CI_NET" > /dev/null 2>&1 || true
        rm -f ci-chatwoot.env ci-qa-data.txt qa/cypress.env.json
      '''
      archiveArtifacts artifacts: 'qa-rails.log', allowEmptyArchive: true
    }

    success {
      echo 'Pipeline de Chatwoot terminado: pruebas ejecutadas y Quality Gate aprobado.'
    }

    unstable {
      echo 'Hay pruebas fallidas: revisa los reportes JUnit y los artefactos en qa/reports.'
    }
  }
}
