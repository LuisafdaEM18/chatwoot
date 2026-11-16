// Luisa (RF-01 a RF-05) — Playwright MCP + GitHub Copilot (criterio 14).
// Este test se generó con asistencia de Playwright MCP (que deja a la IA explorar
// el DOM en vivo y proponer selectores) y GitHub Copilot, y luego se revisó a mano.
// Cubre el inicio de sesión y la pantalla de conversaciones de Luisa.
import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const aqui = dirname(fileURLToPath(import.meta.url));
const env = JSON.parse(readFileSync(resolve(aqui, "../../../cypress.env.json"), "utf-8"));

test.beforeEach(async ({ page }) => {
  await page.goto("/app/login");
  await page.getByTestId("email_input").fill(env.adminEmail);
  await page.getByTestId("password_input").fill(env.adminPassword);
  await page.getByTestId("submit_button").click();
  await page.waitForURL(/\/app\/accounts\/\d+/, { timeout: 30000 });
});

test("RF-01: la bandeja de conversaciones muestra las pestañas de estado", async ({ page }) => {
  await page.goto("/app");
  await page.waitForLoadState("networkidle");
  await expect(page.getByText("Mine", { exact: false }).first()).toBeVisible({ timeout: 20000 });
  await expect(page.getByText("Unassigned", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("All", { exact: false }).first()).toBeVisible();
});

test("RF-05: la búsqueda global ofrece su campo de búsqueda", async ({ page }) => {
  const cuenta = (page.url().match(/accounts\/(\d+)/) ?? [])[1];
  await page.goto(`/app/accounts/${cuenta}/search`);
  await expect(
    page.getByPlaceholder("Type 3 or more characters to search"),
  ).toBeVisible({ timeout: 20000 });
});
