it('deve arrastar o cypress para a caixinha do node', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');

    // DataTranfer vai ajudar o Cypress a simular a ação de arrastar e soltar
    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Cypress"]')
        .trigger('dragstart', { dataTransfer });
    cy.get('.nodejs figure[draggable="true"]')
        .trigger('drop', { dataTransfer });

});

it('deve arrastar o robot para a caixinha do python', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');

    // DataTranfer vai ajudar o Cypress a simular a ação de arrastar e soltar
    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Robot Framework"]')
        .trigger('dragstart', { dataTransfer });
    cy.get('.python figure[draggable="true"]')
        .trigger('drop', { dataTransfer });

});