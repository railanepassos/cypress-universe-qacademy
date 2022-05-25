it('deve exibir a home page', () => {
    cy.visit('/');

    // Validação pelo titulo da pagina (menos recomendado, precisamos mpensar melhor em nossa estratégia de validação)
    cy.title()
        .should('eq', 'Training Wheels | QAninja');

    // Validação por elementos da pagina (verificar a existencia de um elemento seria uma melhor estratégia)
    cy.get('img[alt="QAninja"]')
        .should('be.visible');
    cy.get('ul.menu-list')
        .should('be.visible');

});