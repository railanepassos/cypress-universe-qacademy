describe('drag and drop with hooks', () => {
    before(() => {
        cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop');

    });
    it('deve arrastar o cypress para a caixinha do node', () => {

        // DataTranfer vai ajudar o Cypress a simular a ação de arrastar e soltar
        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Cypress"]')
            .trigger('dragstart', { dataTransfer });
        cy.get('.nodejs figure[draggable="true"]')
            .trigger('drop', { dataTransfer });

    });

    it('deve arrastar o robot para a caixinha do python', () => {

        // DataTranfer vai ajudar o Cypress a simular a ação de arrastar e soltar
        const dataTransfer = new DataTransfer();

        cy.get('img[alt="Robot Framework"]')
            .trigger('dragstart', { dataTransfer });
        cy.get('.python figure[draggable="true"]')
            .trigger('drop', { dataTransfer });

    });

});