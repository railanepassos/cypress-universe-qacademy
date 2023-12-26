// Se usar o cy.wait(7000) ele irá aguardar 7 segundos para preencher o campo, ao incluir o timemout: 7000 dentro do comando de escrita ele irá aguardar até 7 segundos. Isso significa que se a aplicação lançar uma nova versão onde onde o tempo de liberação do elemento diminua não precisaremos aguardar 7 segundos completos para preencher o campo.   


it('exemplo de timeout', () => {

  cy.visit('/timeout');

  cy.contains('button', 'Habilita')
    .click();

  // cy.wait(7000);

  cy.get('#firstname')
    .should('be.visible')
    .type('Railane', { timeout: 7000 });

});