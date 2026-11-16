#!/usr/bin/env bash
# Criterio 15: corre la misma suite de Cypress contra la versión anterior (imagen publicada
# chatwoot/chatwoot:v4.19.1, sin correcciones) y contra la versión final (chatwoot-qa:final).
# Deja la salida de cada corrida en qa/evidencias/despliegue/.
#
# Uso (desde la raíz del repositorio, con .env y qa/cypress.env.json listos):
#   bash qa/deploy/comparar_versiones.sh
set -u
cd "$(dirname "$0")/../.."
OUT=qa/evidencias/despliegue
mkdir -p "$OUT"
COMPOSE="docker compose -f docker-compose.production.yaml -f qa/deploy/docker-compose.final.yaml"
SPECS="cypress/e2e/luisa/**/*.cy.js,cypress/e2e/daniel/**/*.cy.js,cypress/e2e/juanpablo/**/*.cy.js,cypress/e2e/regresion/**/*.cy.js,cypress/e2e/despliegue/**/*.cy.js"

desplegar() {
  QA_IMAGE="$1" $COMPOSE up -d --force-recreate rails sidekiq
  for _ in $(seq 1 90); do
    curl -sf -o /dev/null http://localhost:3000/api && return 0
    sleep 5
  done
  echo "Chatwoot no respondió con $1" >&2
  return 1
}

correr() {
  local nombre="$1" imagen="$2"
  desplegar "$imagen" || return 1
  { echo "Imagen: $imagen"; docker inspect "$imagen" --format 'Id: {{.Id}}'; date -u +"Fecha: %Y-%m-%dT%H:%M:%SZ"; echo; } > "$OUT/cypress_$nombre.txt"
  (cd qa && npx cypress run --spec "$SPECS" 2>&1) | sed -E 's/\x1b\[[0-9;]*m//g' >> "$OUT/cypress_$nombre.txt"
}

correr antes_v4.19.1 chatwoot/chatwoot:v4.19.1
correr despues_final chatwoot-qa:final
grep -E "Tests:|Passing:|Failing:|All specs passed|failed \(" "$OUT"/cypress_antes_v4.19.1.txt "$OUT"/cypress_despues_final.txt | tail -20
