it('deve logar com sucesso', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login');

    cy.get('#nickId').type('papitorocks');
    cy.get('#passId').type('pwd123');

});