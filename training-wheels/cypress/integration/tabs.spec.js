it('deve fazer uma pesquisa por cypress no google através de uma nova guia', () => {
  cy.visit('/new_tab');
  // cy.contains('a', 'Clique aqui').click();

  cy.get('a[href="https://www.google.com.br"]')
    .should('have.attr', 'target', '_blank');

  cy.contains('a', 'Clique aqui')
    .invoke('removeAttr', 'target');
  cy.contains('a', 'Clique aqui').click();
  cy.get('input[title="Pesquisar"]')
    .type('Cypress');

  cy.contains('input', 'Pesquisa Google').click();
  cy.contains('cite', 'https://www.cypress.io')
    .should('be.visible')
});