it('deve selecionar bucky por id', () => {
  cy.visit('/select');
  cy.get('#avengerList')
    .select('Bucky')
    .should('have.value', '2');

});

it('deve selecionar Tony Stark por id', () => {
  cy.visit('/select');
  cy.get('#avengerList')
    .select('Tony Stark')
    .should('have.value', '3');

});

it('deve selecionar Natasha Romanoff sem id', () => {
  cy.visit('/select');
  cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Natasha Romanoff')
    .should('have.value', '4');

});