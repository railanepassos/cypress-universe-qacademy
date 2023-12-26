it('deve exibir notificação toast', () => {
  cy.visit('/toaster');

  cy.contains('button', 'Toast Rápido').click();

  // No cypress é possivel "congelar" um passo na tela para capturar algum elemento que desaparecer rapidamente. A linha comentada abaixo foi a técnica ultilizada para capturar a classe do toast para validação adequada. 
  // cy.get('body');

  // Abaixo temos duas formas possíveis de validar o resultado
  cy.contains('.notification', 'Essa notificação é muito rápida!')
    .should('be.visible');

  cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é muito rápida!');

  // Abaixo estou validando se o componente deixa de ser exibido
  cy.get('.notification')
    .should('not.exist');

});