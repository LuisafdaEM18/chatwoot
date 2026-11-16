// Stagehand — Juan Pablo (RF-11 a RF-15, productividad).
// La IA abre Informes (reportes) y extrae las métricas visibles de la vista general,
// validadas con zod. Cubre RF-15 (reportes).
import { z } from "zod";
import { nuevaStagehand, iniciarSesion, BASE_URL, verificar, terminar } from "./sh.config.js";

const sh = nuevaStagehand();
await sh.init();
const page = sh.page;
try {
  await iniciarSesion(page, "admin");
  const cuenta = (await page.url()).match(/accounts\/(\d+)/)?.[1];
  await page.goto(`${BASE_URL}/app/accounts/${cuenta}/reports/overview`);
  await page.waitForTimeout(4000);

  const datos = await page.extract({
    instruction:
      "Estás en el panel de informes (overview). Devuelve los nombres de las tarjetas de métricas " +
      "visibles (por ejemplo Open/Abiertas, Unattended/Sin atender, Online) como lista de textos.",
    schema: z.object({ metricas: z.array(z.string()) }),
  });
  console.log("  Métricas:", datos.metricas);
  verificar("El panel de informes muestra tarjetas de métricas", datos.metricas.length >= 1, datos.metricas.join(", "));
} finally {
  await sh.close();
}
terminar();
