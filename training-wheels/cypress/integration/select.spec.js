it('selecionar Natasha Romanoff por id', () => {

  cy.visit('/select');

  cy.get('#avengerList')
    .select('Natasha Romanoff')
    .should('have.value', 4);

});

it('selecionar Tony Stark sem id', () => {

  cy.visit('/select');

  cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', 3);

});