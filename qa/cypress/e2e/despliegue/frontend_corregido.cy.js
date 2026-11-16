// Criterio 15 (despliegue final): verifica en el navegador los defectos de frontend corregidos:
// D-05, D-07 y M-01 (commit e5644e9ba) y D-09, D-10 (hallados con Cypress en el criterio 7 y
// corregidos en el criterio 15). Cada prueba provoca el fallo con cy.intercept y
// comprueba el mensaje de error correcto y la AUSENCIA del mensaje de éxito.
// Contra la imagen original v4.19.1 estas pruebas deben fallar; contra la imagen corregida, pasar.
describe('Despliegue: frontend corregido (D-05, D-07, M-01, D-09, D-10)', () => {
  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('D-05 una importación de contactos fallida no se anuncia como exitosa', () => {
    // Un 500 sin "message" en el cuerpo recorre la misma rama que un error de red: el original
    // se tragaba el error y mostraba el aviso de éxito. (forceNetworkError deja la petición en
    // reintentos del navegador y no llega a la aplicación.)
    cy.intercept('POST', '**/contacts/import', { statusCode: 500, body: {} }).as(
      'importar'
    );
    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-ellipsis-vertical').closest('button').click();
    cy.contains('Import contacts').click();
    cy.get('input[type="file"]').selectFile(
      {
        contents: Cypress.Buffer.from(
          `name,email\nFallo Red,fallo.${Date.now()}@chatwoot.test\n`
        ),
        fileName: 'fallo_red.csv',
        mimeType: 'text/csv',
      },
      { force: true }
    );
    cy.contains('button', /^Import$/).click();
    cy.wait('@importar');

    // Comportamiento corregido: se emite el aviso de error (el de axios o el genérico). El diálogo
    // de importación sigue abierto (en la capa superior del navegador) porque la importación falló,
    // así que el aviso queda detrás de él: se comprueba que exista, no que sea visible.
    cy.contains(
      /Request failed with status code 500|There was an error, please try again/,
      { timeout: 8000 }
    ).should('exist');
    cy.contains('dialog', 'Import contacts').should('be.visible');
    cy.contains(
      'You will be notified via email when the import is complete.'
    ).should('not.exist');
  });

  it('D-07 si falla el cambio de estado la interfaz muestra el error y no "estado cambiado"', () => {
    cy.intercept('POST', '**/conversations/*/toggle_status', {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }).as('estado');
    cy.createConversation({ message: 'Prueba de despliegue D-07' }).then(
      ({ conversation }) => {
        cy.openConversation(conversation.id);
      }
    );
    cy.contains('button', /^Resolve$/).click();
    cy.wait('@estado');

    cy.contains('Conversation status change failed', {
      timeout: 8000,
    }).should('be.visible');
    cy.contains('Conversation status changed').should('not.exist');
  });

  it('M-01 el error al crear un equipo muestra el mensaje del servidor', () => {
    const serverMessage = 'Mensaje QA del servidor: nombre de equipo no válido';
    cy.intercept('POST', '**/api/v1/accounts/*/teams', {
      statusCode: 422,
      body: { message: serverMessage },
    }).as('crearEquipo');
    cy.visitAccount('/settings/teams/new');
    cy.get('input[placeholder="Example: Sales, Customer Support"]').type(
      `qa-despliegue-${Date.now()}`
    );
    cy.contains('button', 'Create team').click();
    cy.wait('@crearEquipo');

    cy.contains(serverMessage, { timeout: 8000 }).should('be.visible');
  });

  it('D-09 una etiqueta con espacios muestra el mensaje de caracteres válidos', () => {
    cy.visitAccount('/settings/labels/list');
    cy.contains('button', 'Add label').click();
    cy.get('input[placeholder="Label name"]').type('qa soporte').blur();

    cy.get('[data-testid="label-title"]').should('have.class', 'error');
    cy.contains(
      'Only Alphabets, Numbers, Hyphen and Underscore are allowed'
    ).should('be.visible');
    cy.contains('button', 'Create').should('be.disabled');
  });

  it('D-10 una clave de atributo con espacios muestra "Invalid key"', () => {
    cy.visitAccount('/settings/custom-attributes/list');
    cy.contains('button', 'Add Custom Attribute').click();
    cy.get('input[placeholder="Enter custom attribute display name"]').type(
      'Clave mala'
    );
    cy.get('input[placeholder="Enter custom attribute key"]')
      .clear()
      .type('qa clave')
      .blur();

    cy.contains('Invalid key').should('be.visible');
    cy.contains('Key is required').should('not.exist');
    cy.contains('button', 'Create').should('be.disabled');
  });
});
