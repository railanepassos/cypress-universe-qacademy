
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