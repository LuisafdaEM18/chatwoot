// RF-07 Importación de contactos desde CSV — Daniel Ortiz Ortiz
// Casos CP-07-01 a CP-07-03 de la matriz de trazabilidad.
// Chatwoot procesa la importación en segundo plano un minuto después de subir el archivo
// (DataImportJob.set(wait: 1.minute) en app/models/data_import.rb). Por eso se consulta la API
// hasta 100 segundos (200 intentos cada 0,5 s).
const IMPORT_RETRIES = 200;

describe('RF-07 Importación de contactos desde CSV', () => {
  const importThroughUi = (fileName, contents) => {
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
    cy.contains('Import contacts').click();
    cy.get('input[type="file"]').selectFile(
      {
        contents: Cypress.Buffer.from(contents),
        fileName,
        mimeType: 'text/csv',
      },
      { force: true }
    );
    cy.contains('button', /^Import$/).click();
  };

  const countByEmail = email =>
    cy
      .api('GET', `/contacts/search?q=${encodeURIComponent(email)}`)
      .its('body.payload.length');

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-07-01 (exitoso): importa un CSV con tres contactos válidos', () => {
    const stamp = Date.now();
    const emails = [1, 2, 3].map(n => `import${n}.${stamp}@chatwoot.test`);
    const csv = `name,email\n${emails.map((email, i) => `Importado ${i + 1},${email}`).join('\n')}\n`;

    importThroughUi('tres_contactos.csv', csv);

    cy.contains(
      'You will be notified via email when the import is complete.'
    ).should('be.visible');
    emails.forEach(email => {
      cy.apiShould(
        `/contacts/search?q=${encodeURIComponent(email)}`,
        body => expect(body.payload).to.have.length(1),
        'admin',
        IMPORT_RETRIES
      );
    });
  });

  it('CP-07-02 (alternativo): un contacto que ya existe no se duplica al importar', () => {
    const stamp = Date.now();
    const existing = `existente.${stamp}@chatwoot.test`;
    const fresh = `nuevo.${stamp}@chatwoot.test`;
    cy.api('POST', '/contacts', { name: 'Ya existe', email: existing });

    importThroughUi(
      'con_existente.csv',
      `name,email\nYa existe,${existing}\nNuevo,${fresh}\n`
    );

    cy.apiShould(
      `/contacts/search?q=${encodeURIComponent(fresh)}`,
      body => expect(body.payload).to.have.length(1),
      'admin',
      IMPORT_RETRIES
    );
    countByEmail(existing).should('eq', 1);
  });

  it('CP-07-03 (error): un CSV sin archivo o con columnas que no existen no crea contactos', () => {
    cy.api('POST', '/contacts/import', {}).its('status').should('eq', 422);

    const stamp = Date.now();
    importThroughUi(
      'columnas_malas.csv',
      `nombre_completo,correo\nSin Columnas,malo.${stamp}@chatwoot.test\n`
    );

    cy.contains(
      'You will be notified via email when the import is complete.'
    ).should('be.visible');
    // Se espera a que corra la importación (un minuto y unos segundos) antes de confirmar que no hay contacto.
    cy.wait(75000);
    countByEmail(`malo.${stamp}@chatwoot.test`).should('eq', 0);
  });
});
