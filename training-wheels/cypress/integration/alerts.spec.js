
it('deve exibir uma mensagem de alerta', () => {

  cy.visit('/javascript_alerts');

  cy.contains('button', 'Alerta').click();
  cy.on('window:alert', (result) => {
    expect(result).to.equal('Isto é uma mensagem de alerta');

  });

  cy.contains('p#result', 'Você ativou um alerta JS');

});

it('deve confirmar a solicitação', () => {

  cy.visit('/javascript_alerts');

  cy.contains('button', 'Confirma').click();
  cy.on('window:confirm', () => true);

  cy.get('p#result').should('have.text', 'Mensagem confirmada');

});

it('deve cancelar a solicitação', () => {

  cy.visit('/javascript_alerts');

  cy.contains('button', 'Confirma').click();
  cy.on('window:confirm', () => false);

  cy.get('p#result').should('have.text', 'Mensagem não confirmada');

});

it('deve exibir mensagem de boas vindas com meu nome', () => {
  /**
   * Para automatizar este cenário precisaremos ultilizar um Stub, pois quando o prompt é aberto é esperado que o campo seja preenchido e enquanto não for preenchido os passos não são concluidos.
   * 
   * Stubs são funções ou métodos que substituem comportamentos ou até mesmo trechos de código. Vamos ultilizar um stub para subistituir o comportamento relacionado a preenchimento do prompt simulando seu a ação.
   * 
   */

  cy.visit('/javascript_alerts');

  cy.window().then(($win) => {
    cy.stub($win, 'prompt').returns('Railane');
    cy.contains('button', 'Prompt').click();

  });

  cy.get('p#result').should('have.text', 'Olá, Railane');


});