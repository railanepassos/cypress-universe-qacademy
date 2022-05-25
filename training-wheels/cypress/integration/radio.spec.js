it('deve marcar Pantera Negra', () => {
    cy.visit('/radios');

    cy.get('input[value="blackpanther"]').click();
});