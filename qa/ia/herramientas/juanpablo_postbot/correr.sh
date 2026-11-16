#!/usr/bin/env bash
# Ejecuta la colección de Postman con newman. El token y la cuenta se leen de
# qa/cypress.env.json (gitignored); no se guardan aquí ni se imprimen.
set -euo pipefail
cd "$(dirname "$0")"
ENV_JSON="$(cd ../../.. && pwd)/cypress.env.json"
TOKEN=$(node -e "console.log(require(process.argv[1]).adminToken)" "$ENV_JSON")
ACCOUNT=$(node -e "console.log(require(process.argv[1]).accountId)" "$ENV_JSON")
BASE="${QA_BASE_URL:-http://localhost:3000}"

npx -y newman run coleccion_rf11.postman_collection.json \
  --env-var "token=$TOKEN" \
  --env-var "accountId=$ACCOUNT" \
  --env-var "baseUrl=$BASE" \
  --reporters cli
