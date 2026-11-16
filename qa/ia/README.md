# Criterio 14 — Inteligencia artificial aplicada a testing

Pruebas con IA sobre Chatwoot 4.19.1. Equipo: Luisa Fernanda Espinal Montoya,
Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz. Documento: `qa/docs/criterio14_ia.md`.

Por integrante se usan **tres herramientas de IA**: **Stagehand** (automatiza y valida
flujos web), **DeepEval** (evalúa un componente de IA) y una **tercera** trabajada en
clase (Playwright MCP + Copilot → Luisa, ReportPortal → Daniel, Postman Postbot → Juan Pablo).

Todo corre **offline, sin claves de pago**, con un modelo local servido por **Ollama**
(`llama3.1:8b` para DeepEval y el componente; `qwen2.5:7b` para Stagehand, que necesita
salida estructurada). Esto es una decisión del equipo; la contrapartida (un modelo pequeño
acierta menos que GPT-4) se discute en el documento.

## Estructura

| Carpeta | Qué hay |
|---|---|
| `componente/` | Componente de IA incorporado al proyecto (estilo-Captain) que DeepEval evalúa |
| `deepeval/` | Evaluaciones DeepEval por integrante + modelo juez Ollama |
| `stagehand/` | Flujos web con Stagehand por integrante (login Playwright + extract con IA) |
| `herramientas/` | Tercera herramienta por integrante |
| `../evidencias/ia/` | Salidas de todas las ejecuciones |

## Requisitos

1. Chatwoot de pruebas arriba y datos creados (`qa/scripts/create_qa_data.rb`); credenciales
   y tokens en `qa/cypress.env.json` (gitignored).
2. Ollama con los modelos:

```bash
docker run -d --name ollama-qa -p 11434:11434 -v ollama_qa:/root/.ollama ollama/ollama
docker exec ollama-qa ollama pull llama3.1:8b
docker exec ollama-qa ollama pull qwen2.5:7b
```

## Cómo correr cada parte

```bash
# Componente de IA (prueba rápida)
cd qa/ia/componente && python -c "import asistente_soporte as a; print(a.generar_respuesta_predefinida('saludo'))"

# DeepEval (en contenedor Python, llega a Ollama por host.docker.internal)
docker run --rm --add-host host.docker.internal:host-gateway -v "$PWD/qa:/qa" \
  -w /qa/ia/deepeval -e QA_IA_BASE_URL=http://host.docker.internal:11434/v1 \
  python:3.11-slim sh -c "pip install -q deepeval && python luisa_deepeval.py"

# Stagehand (usa qwen2.5:7b)
cd qa/ia/stagehand && npm install && npx playwright install chromium
QA_IA_MODEL=qwen2.5:7b npm run sh:todos

# Tercera herramienta
cd qa/ia/herramientas/juanpablo_postbot && bash correr.sh        # Postbot/newman
cd qa/ia/herramientas/luisa_playwright_mcp && npm install && npx playwright test
# ReportPortal (Daniel): ver herramientas/daniel_reportportal/README.md
```
