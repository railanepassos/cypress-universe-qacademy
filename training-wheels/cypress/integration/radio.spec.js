it('deve marcar Pantera Negra', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios');

    cy.get('input[value="blackpanther"]').click();
});