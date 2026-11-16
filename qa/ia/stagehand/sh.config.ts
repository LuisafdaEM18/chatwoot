// Configuración común de Stagehand (v2) para Chatwoot — criterio 14.
// Stagehand maneja el navegador con un LLM. Aquí el LLM es el Ollama local
// (llama3.1:8b) por su endpoint compatible con OpenAI (modelClientOptions.baseURL),
// así corre offline y sin claves de pago. Limitación: un modelo de 8B acierta
// menos que GPT-4 decidiendo acciones; por eso el login y la navegación usan
// Playwright y la IA se reserva para extract() (leer y estructurar la pantalla) y
// algún act() guardado con try/catch.
import { Stagehand, AISdkClient } from "@browserbasehq/stagehand";
import { createOllama } from "ollama-ai-provider";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const aqui = dirname(fileURLToPath(import.meta.url));
export const BASE_URL = process.env.QA_BASE_URL ?? "http://localhost:3000";
const MODELO = process.env.QA_IA_MODEL ?? "qwen2.5:7b";
// Proveedor nativo de Ollama para el AI SDK. Su base es la API propia de Ollama
// (/api), no la compatible con OpenAI, y con structuredOutputs usa el `format` de
// Ollama para la salida estructurada que necesita extract() (sin tool calling).
const OLLAMA_API = process.env.QA_IA_OLLAMA_API ?? "http://localhost:11434/api";

export function credenciales(rol: "admin" | "agent" = "admin") {
  const env = JSON.parse(readFileSync(resolve(aqui, "../../cypress.env.json"), "utf-8"));
  return { email: env[`${rol}Email`] as string, password: env[`${rol}Password`] as string };
}

export function nuevaStagehand() {
  const ollama = createOllama({ baseURL: OLLAMA_API });
  const model = ollama(MODELO, { structuredOutputs: true });
  return new Stagehand({
    env: "LOCAL",
    llmClient: new AISdkClient({ model }),
    localBrowserLaunchOptions: { headless: true },
    verbose: 1,
  });
}

export async function iniciarSesion(page: any, rol: "admin" | "agent" = "admin") {
  const { email, password } = credenciales(rol);
  await page.goto(`${BASE_URL}/app/login`);
  await page.locator('[data-testid="email_input"]').fill(email);
  await page.locator('[data-testid="password_input"]').fill(password);
  await page.locator('[data-testid="submit_button"]').click();
  await page.waitForURL(/\/app\/accounts\/\d+/, { timeout: 30000 });
}

export const estado = { fallos: 0 };
export function verificar(nombre: string, condicion: boolean, detalle = "") {
  const ok = Boolean(condicion);
  if (!ok) estado.fallos += 1;
  console.log(`  [${ok ? "PASA" : "FALLA"}] ${nombre}${detalle ? " · " + detalle : ""}`);
}
export function terminar() {
  console.log(estado.fallos === 0 ? "\nTodas las validaciones pasaron." : `\n${estado.fallos} validación(es) fallaron.`);
  process.exit(estado.fallos === 0 ? 0 : 1);
}
