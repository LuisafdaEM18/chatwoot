import * as fs from 'fs';
import * as path from 'path';

/**
 * Datos del entorno de pruebas. Se comparten con Cypress: qa/cypress.env.json (no se sube al
 * repositorio) tiene los IDs, las credenciales y los tokens que imprime qa/scripts/create_qa_data.rb.
 */
export interface Environment {
  baseURL: string;
  accountId: number;
  inboxId: number;
  agentId: number;
  agent2Id: number;
  otherAccountId: number;
  otherUserId: number;
  otherConversationId: number;
  adminEmail: string;
  adminPassword: string;
  agentEmail: string;
  agentPassword: string;
  agent2Email: string;
  agent2Password: string;
  adminToken: string;
  agentToken: string;
  agent2Token: string;
  otherToken: string;
}

const file = path.resolve(__dirname, '..', '..', '..', 'cypress.env.json');

export const environment: Environment = {
  baseURL: process.env.CHATWOOT_URL ?? 'http://localhost:3000',
  ...JSON.parse(fs.readFileSync(file, 'utf8')),
};

/** Ruta de la API dentro de la cuenta de pruebas, por ejemplo accountPath('/labels'). */
export const accountPath = (resource: string): string =>
  resource.startsWith('/api/') ? resource : `/api/v1/accounts/${environment.accountId}${resource}`;

/** Sufijo único para que cada escenario cree datos propios y se pueda repetir sin limpiar la base. */
export const unique = (prefix: string): string => `${prefix}-${Date.now()}`;
