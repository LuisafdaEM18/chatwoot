import { defineConfig } from "@playwright/test";

// Base del Chatwoot de pruebas. Se puede sobrescribir con QA_BASE_URL.
export default defineConfig({
  timeout: 60000,
  reporter: [["list"], ["junit", { outputFile: "../../../evidencias/ia/playwright_mcp_luisa.xml" }]],
  use: {
    baseURL: process.env.QA_BASE_URL ?? "http://localhost:3000",
    headless: true,
    actionTimeout: 15000,
  },
});
