
it('deve exibir uma mensagem de alerta', () => {

  cy.visit('/javascript_alerts');

  cy.contains('button', 'Alerta').click();
  cy.on('window:alert', (result) => {
    expect(result).to.equal('Isto é uma mensagem de alerta');

  });

  cy.contains('p#result', 'Você ativou um alerta JS');

});