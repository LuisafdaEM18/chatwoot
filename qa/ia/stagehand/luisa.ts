// Stagehand — Luisa (RF-01 a RF-05, conversaciones).
// La IA lee la pantalla de conversaciones y devuelve datos estructurados (extract),
// validados con zod. Demuestra automatizar y validar un flujo web con IA.
import { z } from "zod";
import { nuevaStagehand, iniciarSesion, BASE_URL, verificar, terminar } from "./sh.config.js";

const sh = nuevaStagehand();
await sh.init();
const page = sh.page;
try {
  await iniciarSesion(page, "admin");
  await page.goto(`${BASE_URL}/app`);
  await page.waitForTimeout(3000);

  const datos = await page.extract({
    instruction:
      "Lee las pestañas o filtros de estado de la lista de conversaciones (por ejemplo Mine/Mías, " +
      "Unassigned/Sin asignar, All/Todas) y devuélvelas como lista de textos.",
    schema: z.object({ pestanas: z.array(z.string()) }),
  });
  console.log("  Pestañas extraídas:", datos.pestanas);
  verificar("La lista de conversaciones expone pestañas de estado", datos.pestanas.length >= 1, datos.pestanas.join(", "));
} finally {
  await sh.close();
}
terminar();
