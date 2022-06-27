// Nesse tipo de elemento(componente) a representação gráfica das opções é totalmente em HTML diferentemente do exercicio "select.spec.html". Um componente é um conjunto de varios elementos.

// Essa aplicação usa Id's dinâmicos para montar o HTML portanto essa não será a nossa estratégia nesse exercicio. 

it('deve selecionar opção Playwright', () => {
  cy.visit('/apps/select2/index.html');

  cy.get('span.select2-selection--single')
    .click();

  cy.contains('li.select2-results__option', 'Playwright')
    .click();

  cy.get('span.select2-selection__rendered')
    .should('have.text', 'Playwright');

});