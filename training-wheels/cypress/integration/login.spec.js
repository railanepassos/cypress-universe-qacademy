it('deve logar com sucesso', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login');

    // Preenchendo campos de texto
    cy.get('#nickId').type('papitorocks');
    cy.get('#passId').type('pwd123');

    // Técnicas para buscar e clicar em botões
    cy.get('button[type="submit"]').click();

});