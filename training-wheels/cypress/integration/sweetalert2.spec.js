it('deve exibir a mensagem de sucesso no poupup', () => {
  cy.visit('/sweet_alert');
  cy.contains("button", "Sucesso").click();
  cy.get('div.swal-text').should('have.text', "Você clicou no botão verde.");

});

it('deve exibir a mensagem de falha no poupup', () => {
  cy.visit('/sweet_alert');
  cy.contains("button", "Deu Ruim").click();
  cy.get('div.swal-text').should('have.text', "Você clicou no botão vermelho.");

});