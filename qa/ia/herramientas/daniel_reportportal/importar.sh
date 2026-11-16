#!/usr/bin/env bash
# Importa los resultados JUnit de las pruebas de contactos de Daniel (Cypress RF-06..10)
# a ReportPortal y deja el launch listo para el Auto-Analysis (IA).
# Requiere ReportPortal arriba (docker-compose.oficial.yml) y los XML en qa/reports/junit/.
set -euo pipefail
cd "$(dirname "$0")"
RP="${RP_URL:-http://localhost:8080}"
PROJECT="${RP_PROJECT:-daniel_contactos}"
JUNIT_DIR="$(cd ../../.. && pwd)/reports/junit"

TOK=$(curl -s -X POST "$RP/uat/sso/oauth/token" \
  -H 'Authorization: Basic dWk6dWltYW4=' \
  -d 'grant_type=password&username=superadmin&password=erebus' \
  | node -e "process.stdin.on('data',d=>console.log(JSON.parse(d).access_token))")

ZIP="$JUNIT_DIR/daniel_junit.zip"
# zip no viene en Git Bash; se usa Compress-Archive de PowerShell.
powershell.exe -NoProfile -Command "Compress-Archive -Force -Path '$(cygpath -w "$JUNIT_DIR")\\*.xml' -DestinationPath '$(cygpath -w "$ZIP")'"
echo "Importando resultados a $PROJECT..."

curl -s -X POST "$RP/api/v1/$PROJECT/launch/import" \
  -H "Authorization: Bearer $TOK" \
  -F "file=@$ZIP;type=application/zip"
echo
echo "Listo. En la UI ($RP/ui/#$PROJECT/launches) abrir el launch y ejecutar Auto-Analysis."
