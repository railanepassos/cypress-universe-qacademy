<<<<<<< HEAD
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
=======
// Nesse tipo de elemento o navegador que renderiza as opções a serem selecionadas, portanto o comportamento de automação é diferente do comportamento de um teste manual, onde fazemos 2 cliques, o primeiro clique para exibir as opções e o segundo para selecionar as opções.

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
>>>>>>> 1834ba708a0e1dad8a72a6c2d1b692bac6fdb7e7

});