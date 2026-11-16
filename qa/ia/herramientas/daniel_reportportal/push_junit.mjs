// Crea un launch EN VIVO en ReportPortal a partir de los JUnit de las pruebas de
// contactos de Daniel (Cypress RF-06..10) usando la API de RP, y dispara el
// Auto-Analysis (la IA de ReportPortal). Criterio 14.
//
// Uso: node push_junit.mjs   (con ReportPortal arriba y los XML en qa/reports/junit/)
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const RP = process.env.RP_URL ?? "http://localhost:8080";
const PROJECT = process.env.RP_PROJECT ?? "daniel_contactos";
const JUNIT = resolve(aqui, "../../../reports/junit");

async function token() {
  const r = await fetch(`${RP}/uat/sso/oauth/token`, {
    method: "POST",
    headers: { Authorization: "Basic dWk6dWltYW4=", "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=password&username=superadmin&password=erebus",
  });
  return (await r.json()).access_token;
}

let TOK;
const api = async (method, path, body) => {
  const r = await fetch(`${RP}/api/v1/${PROJECT}${path}`, {
    method,
    headers: { Authorization: `Bearer ${TOK}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const t = await r.text();
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status} ${t}`);
  return t ? JSON.parse(t) : {};
};

// Extrae <testcase name=".." time=".."> y si trae <failure> del XML (regex simple).
function casos(xml) {
  const out = [];
  const re = /<testcase\b([^>]*)>([\s\S]*?)<\/testcase>|<testcase\b([^>]*)\/>/g;
  let m;
  while ((m = re.exec(xml))) {
    const attrs = m[1] ?? m[3] ?? "";
    const cuerpo = m[2] ?? "";
    const name = (attrs.match(/name="([^"]*)"/) ?? [])[1] ?? "caso";
    const fail = /<failure|<error/.test(cuerpo);
    const msg = (cuerpo.match(/<(?:failure|error)[^>]*message="([^"]*)"/) ?? [])[1] ?? "";
    out.push({ name, fail, msg });
  }
  return out;
}

const suiteName = (xml) => (xml.match(/<testsuite name="(?!Root Suite)([^"]+)"/) ?? [])[1] ?? "Suite";

async function main() {
  TOK = await token();
  const archivos = readdirSync(JUNIT).filter((f) => f.endsWith(".xml"));
  const now = Date.now();
  const launch = await api("POST", "/launch", {
    name: "daniel_contactos (Cypress RF-06..10)",
    startTime: now,
    mode: "DEFAULT",
    description: "Resultados de las pruebas de contactos de Daniel importados a ReportPortal (criterio 14).",
  });
  const launchUuid = launch.id;
  let total = 0, fallidos = 0;

  for (const f of archivos) {
    const xml = readFileSync(resolve(JUNIT, f), "utf-8");
    const suite = await api("POST", "/item", {
      name: suiteName(xml), startTime: Date.now(), type: "SUITE", launchUuid,
    });
    for (const c of casos(xml)) {
      total++;
      const item = await api("POST", `/item/${suite.id}`, {
        name: c.name, startTime: Date.now(), type: "STEP", launchUuid,
      });
      if (c.fail) {
        fallidos++;
        await api("POST", "/log", {
          itemUuid: item.id, launchUuid, level: "ERROR",
          message: c.msg || "Fallo en la prueba", time: Date.now(),
        });
      }
      await api("PUT", `/item/${item.id}`, {
        endTime: Date.now(), status: c.fail ? "FAILED" : "PASSED", launchUuid,
      });
    }
    await api("PUT", `/item/${suite.id}`, { endTime: Date.now(), launchUuid });
  }

  const fin = await api("PUT", `/launch/${launchUuid}/finish`, { endTime: Date.now() });
  console.log(`Launch creado: ${launch.id}`);
  console.log(`Casos: ${total} (fallidos: ${fallidos})`);
  console.log(`URL: ${RP}/ui/#${PROJECT}/launches/all`);

  // Dispara el Auto-Analysis (IA) sobre el launch recién creado.
  const info = await api("GET", `/launch/${fin.number ? "" : ""}uuid/${launchUuid}`).catch(() => null);
  const numericId = info?.id;
  if (numericId) {
    const an = await api("POST", "/launch/analyze", {
      launchId: numericId,
      analyzerTypeName: "autoAnalyzer",
      analyzerItemsMode: ["TO_INVESTIGATE"],
      analyzerMode: "ALL",
    }).catch((e) => ({ error: String(e) }));
    console.log("Auto-Analysis:", JSON.stringify(an));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
