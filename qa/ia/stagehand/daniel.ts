// Stagehand — Daniel (RF-06 a RF-10, contactos).
// La IA abre la pantalla de Contactos y extrae la estructura de la tabla
// (columnas y cuántos contactos se ven), validada con zod.
import { z } from "zod";
import { nuevaStagehand, iniciarSesion, BASE_URL, verificar, terminar } from "./sh.config.js";

const sh = nuevaStagehand();
await sh.init();
const page = sh.page;
try {
  await iniciarSesion(page, "admin");
  const cuenta = (await page.url()).match(/accounts\/(\d+)/)?.[1];
  await page.goto(`${BASE_URL}/app/accounts/${cuenta}/contacts`);
  await page.waitForTimeout(3000);

  const datos = await page.extract({
    instruction:
      "Estás en la lista de contactos. Busca el texto de paginación del tipo " +
      "'Showing 1 - 15 of 180 contacts' y devuelve cuántos contactos se muestran en esta página " +
      "(mostrados) y el total de contactos de la cuenta (total).",
    schema: z.object({ mostrados: z.number(), total: z.number() }),
  });
  console.log("  Contactos mostrados:", datos.mostrados, "| total:", datos.total);
  verificar("La lista de contactos informa un total de contactos", datos.total > 0, `total=${datos.total}`);
  verificar(
    "Los contactos mostrados en la página no superan el total",
    datos.mostrados > 0 && datos.mostrados <= datos.total,
    `mostrados=${datos.mostrados} total=${datos.total}`,
  );
} finally {
  await sh.close();
}
terminar();
