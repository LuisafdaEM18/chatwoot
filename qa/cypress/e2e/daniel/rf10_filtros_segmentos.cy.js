// RF-10 Filtros avanzados y segmentos — Daniel Ortiz Ortiz
// Casos CP-10-01 a CP-10-03 de la matriz de trazabilidad.
describe('RF-10 Filtros avanzados y segmentos', () => {
  const condition = (
    attributeKey,
    values,
    queryOperator = null,
    filterOperator = 'equal_to'
  ) => ({
    attribute_key: attributeKey,
    filter_operator: filterOperator,
    values,
    query_operator: queryOperator,
  });

  beforeEach(() => {
    cy.loginAs('admin');
  });

  it('CP-10-01 (exitoso): filtra contactos por nombre y guarda el segmento', () => {
    const name = `Segmento ${Date.now()}`;
    const segment = `Seg QA ${Date.now()}`;
    cy.api('POST', '/contacts', {
      name,
      email: `seg.${Date.now()}@chatwoot.test`,
    });

    cy.visitAccount('/contacts?page=1');
    cy.get('button .i-lucide-list-filter').closest('button').click();
    cy.get('input[placeholder="Enter value"]').type(name);
    cy.contains('button', 'Apply filters').click();

    cy.contains(name).should('be.visible');
    cy.contains('Showing 1 - 1 of 1 contact').should('be.visible');

    cy.get('button .i-lucide-save').closest('button').click();
    cy.get('input[placeholder="Enter the name of the filter"]').type(segment);
    cy.contains('button', 'Save filter').click();

    cy.api('GET', '/custom_filters?filter_type=contact')
      .its('body')
      .then(filters => {
        const saved = filters.find(filter => filter.name === segment);
        expect(saved, 'segmento guardado').to.exist;
        expect(saved.query.payload[0]).to.include({
          attribute_key: 'name',
          filter_operator: 'equal_to',
        });
      });
  });

  it('CP-10-02 (alternativo): combina dos condiciones con O y obtiene los contactos de ambas', () => {
    const stamp = Date.now();
    const first = `Uno ${stamp}`;
    const second = `Dos ${stamp}`;
    cy.api('POST', '/contacts', {
      name: first,
      email: `uno.${stamp}@chatwoot.test`,
    });
    cy.api('POST', '/contacts', {
      name: second,
      email: `dos.${stamp}@chatwoot.test`,
    });

    cy.api('POST', '/contacts/filter', {
      payload: [condition('name', [first], 'or'), condition('name', [second])],
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(
        response.body.payload.map(contact => contact.name)
      ).to.have.members([first, second]);
    });

    cy.api('POST', '/contacts/filter', {
      payload: [condition('name', [first], 'and'), condition('name', [second])],
    })
      .its('body.payload')
      .should('have.length', 0);
  });

  it('CP-10-03 (error): un filtro con operador inválido o atributo inexistente responde con error de validación', () => {
    cy.api('POST', '/contacts/filter', {
      payload: [condition('name', ['qa'], null, 'operador_raro')],
    }).then(response => {
      expect(response.status).to.eq(422);
      expect(response.body.error).to.match(/Invalid operator/);
    });

    cy.api('POST', '/contacts/filter', {
      payload: [condition('atributo_que_no_existe', ['qa'])],
    }).then(response => {
      expect(response.status).to.eq(422);
      expect(response.body.error).to.match(/Invalid attribute key/);
    });
  });
});
