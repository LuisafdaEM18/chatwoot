# Criterio 14 — Inteligencia artificial aplicada a testing

Chatwoot 4.19.1, rama `proyecto-final`. Equipo: Luisa Fernanda Espinal Montoya, Daniel Ortiz Ortiz y Juan Pablo Berrío Díaz.

## 1. Resumen

Cada integrante aplica **tres herramientas de IA** sobre sus funcionalidades:

| Herramienta | Para qué | Por integrante |
|---|---|---|
| **Stagehand** | La IA maneja el navegador: lee la pantalla y devuelve datos estructurados que se validan | Un flujo web por integrante |
| **DeepEval** | Evalúa un componente de IA con métricas (relevancia, fidelidad, no alucinación, tono…) | Una tarea de IA por integrante |
| **Tercera (de clase)** | Generar, analizar o mantener pruebas | Playwright MCP + Copilot (Luisa), ReportPortal (Daniel), Postman Postbot (Juan Pablo) |

**Todo corre sin claves de pago**, con un modelo local servido por **Ollama** en Docker:
`llama3.1:8b` para DeepEval y el componente de IA, y `qwen2.5:7b` para Stagehand (que exige
salida estructurada fiable). Es una decisión del equipo; su límite —un modelo de 7-8 B acierta
menos y juzga peor que GPT-4— se trata en la sección 7.

| Resultado | Valor |
|---|---|
| Stagehand (flujos web) | **3 de 3 integrantes** con sus validaciones en verde |
| DeepEval (métricas) | **31 de 38** métricas aprobadas (Luisa 11/15, Daniel 5/8, Juan Pablo 15/15) |
| Postbot/newman (Juan Pablo) | **7 de 7** aserciones |
| Playwright MCP + Copilot (Luisa) | **2 de 2** pruebas |
| ReportPortal (Daniel) | **Ejecutado en vivo**: 11 servicios arriba, launch 15/15 ingerido y Auto-Analysis lanzado |

Todo está en `qa/ia/` y las salidas en `qa/evidencias/ia/`. Cómo correrlo: `qa/ia/README.md`.

## 2. Entorno

| Elemento | Valor |
|---|---|
| Motor de IA | Ollama en Docker (`ollama/ollama`), puerto 11434, sin clave |
| Modelos | `llama3.1:8b` (4.9 GB) y `qwen2.5:7b` (4.7 GB) |
| Endpoint | Compatible con OpenAI (`/v1`) para el componente y DeepEval; API nativa (`/api`) para Stagehand |
| App bajo prueba | Chatwoot de pruebas (`docker-compose.production.yaml` + `qa/docker-compose.e2e.yaml`) |
| Datos y credenciales | `qa/scripts/create_qa_data.rb`; tokens y contraseñas en `qa/cypress.env.json` (gitignored, nunca se imprime) |

Levantar Ollama y descargar los modelos (una vez):

```bash
docker run -d --name ollama-qa -p 11434:11434 -v ollama_qa:/root/.ollama ollama/ollama
docker exec ollama-qa ollama pull llama3.1:8b
docker exec ollama-qa ollama pull qwen2.5:7b
```

## 3. El componente de IA que se evalúa

La rúbrica pide evaluar con DeepEval **un componente de IA existente o incorporado al proyecto**.

### 3.1 Existente: Captain (el asistente de IA de Chatwoot)

Chatwoot trae **Captain** (`enterprise/app/services/captain/`, `app/services/captain/`): clasifica
conversaciones (`Captain::ConversationClassifierService`), redacta respuestas, copiloto, resúmenes,
etc. **No se pudo ejercitar en vivo** en el entorno local y offline porque:

- Necesita una **clave de OpenAI de pago** (`CAPTAIN_OPEN_AI_API_KEY`), que no está configurada
  (`InstallationConfig` vacío, 0 asistentes).
- Usa la **Responses API** de OpenAI (`Captain::ResponsesConfig`, `protocol: :responses`) y modelos
  propietarios (`jev-latest`); Ollama solo implementa *chat completions*, no la Responses API.

Por eso Captain se documenta como el componente existente (con su código), pero la evaluación
cuantitativa se hace sobre un componente incorporado que sí corre offline.

### 3.2 Incorporado: asistente de soporte (`qa/ia/componente/`)

`asistente_soporte.py` reproduce, contra el modelo local, tres tareas que Captain resuelve, una por
integrante:

| Función | Equivale en Captain a | Integrante |
|---|---|---|
| `clasificar_conversacion` | Clasificador de prioridad y etiquetas | Luisa (RF-01..05) |
| `resumir_contacto` | Resumen de la ficha del contacto | Daniel (RF-06..10) |
| `generar_respuesta_predefinida` | Redacción de respuestas | Juan Pablo (RF-11..15) |

Son deterministas (`temperature=0`) para que las pruebas sean repetibles (principio FIRST).

## 4. Stagehand — automatizar y validar flujos web con IA

Carpeta `qa/ia/stagehand/`. Cada flujo inicia sesión con Playwright (robusto) y usa la IA para
`extract()`: la IA lee la pantalla (vía snapshot de accesibilidad) y devuelve un objeto que se valida
con un esquema `zod`. El LLM es el Ollama local mediante un cliente del AI SDK con el proveedor nativo
de Ollama (`ollama-ai-provider`, `structuredOutputs`), que resuelve la salida estructurada sin
depender de *tool calling* (que los modelos pequeños no invocan de forma fiable).

| Integrante | Flujo (RF) | La IA extrae | Validación | Resultado |
|---|---|---|---|---|
| Luisa | Conversaciones (RF-01..05) | Pestañas de estado de la bandeja | Hay pestañas; se obtuvo `Mine, Unassigned, All` | **PASA** |
| Daniel | Contactos (RF-06..10) | Paginación "Showing 1-15 of 180" | total > 0 y mostrados ≤ total (15 ≤ 180) | **PASA** |
| Juan Pablo | Informes (RF-15) | Tarjetas de métricas visibles | Hay métricas (Conversaciones por agentes/equipos) | **PASA** |

Evidencia: `qa/evidencias/ia/stagehand_run.txt`. Ejecutar: `cd qa/ia/stagehand && QA_IA_MODEL=qwen2.5:7b npm run sh:todos`.

## 5. DeepEval — evaluar el componente de IA

Carpeta `qa/ia/deepeval/`. El **juez** de las métricas es el propio modelo local (`modelo_ollama.py`),
no GPT-4. Cada integrante evalúa su tarea con un *dataset* dorado y métricas apropiadas.

### 5.1 Luisa — clasificación de conversaciones (15 métricas)

| Métrica | Tipo | Resultado |
|---|---|---|
| Prioridad exacta | Determinista (vs. valor esperado) | 4 de 5 casos |
| F1 de etiquetas | Determinista | Aprobada en 4 de 5 |
| Calidad de la razón | GEval (juez LLM) | Aprobada en 3 de 5 |

**11/15.** El único caso de prioridad fallido ("pregunta de precios": el modelo la marcó más alta que
`low`) y las razones con score bajo reflejan el límite del juez 8B, no un error de la prueba.

### 5.2 Daniel — resumen de contacto (8 métricas)

| Métrica | Tipo | Resultado |
|---|---|---|
| Fidelidad a las notas | GEval | 3 de 4 |
| No alucinación | `HallucinationMetric` (menor score = mejor) | 2 de 4 |

**5/8.** El caso "contacto sin notas" da un score de alucinación alto porque la métrica compara contra
un contexto *placeholder* ("no hay notas"): es un artefacto de la métrica con contexto vacío, no una
alucinación real del resumen.

### 5.3 Juan Pablo — respuestas predefinidas (15 métricas)

| Métrica (GEval) | Resultado |
|---|---|
| Relevancia | 5 de 5 |
| Tono de soporte | 5 de 5 |
| Concisión y formato | 5 de 5 |

**15/15.** La generación de texto de soporte es donde mejor rinde el modelo local.

Evidencia: `qa/evidencias/ia/deepeval_{luisa,daniel,juanpablo}.{txt,json}` (incluye el *reason* del juez
en cada métrica).

## 6. Tercera herramienta por integrante

### 6.1 Luisa — Playwright MCP + GitHub Copilot

`qa/ia/herramientas/luisa_playwright_mcp/`. Pruebas E2E de Playwright de las pantallas de Luisa,
**generadas con asistencia de Playwright MCP** (la IA explora el DOM en vivo y propone selectores) y
**GitHub Copilot**, luego revisadas. Dos pruebas (RF-01 pestañas de la bandeja; RF-05 campo de
búsqueda): **2 de 2 en verde**. Evidencia: `qa/evidencias/ia/playwright_mcp_luisa.xml`.

### 6.2 Daniel — ReportPortal (Auto-Analysis)

`qa/ia/herramientas/daniel_reportportal/`. ReportPortal recibe los resultados de las pruebas de
contactos (Cypress RF-06..10) y su **Auto-Analysis** (modelo de ML sobre OpenSearch) propone la causa
de cada fallo y marca los ya conocidos.

**Se ejecutó en vivo** (`docker-compose.oficial.yml`): los **11 servicios** quedaron *healthy*
(incluido `analyzer`, la IA). Con `push_junit.mjs` se creó el launch **daniel_contactos (Cypress
RF-06..10)** por la API de RP a partir de los JUnit reales de Cypress (**15/15 pasaron**) y se disparó
el **Auto-Analysis** (`autoAnalyzer analysis for launch ID='1' started`). Como la suite de Daniel está
en verde, el analizador corre pero no tiene fallos que clasificar. Evidencia:
`qa/evidencias/ia/reportportal_envivo.txt` y la captura `qa/evidencias/ia/reportportal_launches.jpg`.
Pasos reproducibles en su `README.md`.

### 6.3 Juan Pablo — Postman Postbot / Agent Mode

`qa/ia/herramientas/juanpablo_postbot/`. Colección de Postman para la respuesta predefinida (RF-11)
cuyas aserciones (`pm.test`) se **generaron con Postbot** (el asistente de IA de Postman) y se
revisaron. Se ejecuta con newman: **7 de 7 aserciones** (crear, listar y encontrar, rechazo 422,
limpieza). Evidencia: `qa/evidencias/ia/postbot_newman_juanpablo.txt`.

## 7. Límites y aportes

**Aportes de la IA:**
- Stagehand automatiza la lectura/validación de pantallas sin selectores frágiles.
- DeepEval pone números y una razón a la calidad de un componente de IA (relevancia, fidelidad, tono).
- Las terceras herramientas **generan** pruebas (Copilot, Postbot) o **analizan** fallos (ReportPortal).

**Límites (documentados como pide la rúbrica):**
- **Modelo local pequeño:** `llama3.1:8b`/`qwen2.5:7b` aciertan y juzgan peor que GPT-4. Varias fallas de
  DeepEval vienen del juez, no del componente; los scores de GEval deben leerse como indicativos.
- **Captain en vivo:** necesita clave de pago + Responses API; se evaluó un componente incorporado que
  reproduce sus tareas contra el modelo local (sección 3).
- **Stagehand con modelos locales:** sin un proveedor soportado (OpenAI/Anthropic…), el *tool calling* no
  es fiable; se resolvió con el proveedor nativo de Ollama y salida estructurada, y se reservó la IA para
  `extract()` (el login y la navegación van con Playwright).
- **ReportPortal:** se ejecutó en vivo (11 servicios, launch 15/15, Auto-Analysis lanzado); para liberar la RAM/disco que pedía, se detuvo Ollama antes de levantarlo.
- **Hardware:** Ollama en CPU hace las corridas lentas (p. ej. la métrica de alucinación tarda minutos).
