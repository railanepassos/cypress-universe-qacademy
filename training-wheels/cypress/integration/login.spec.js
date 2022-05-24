it('deve logar com sucesso', () => {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login');

    // Preenchendo campos de texto
    cy.get('#nickId').type('papitorocks');
    cy.get('#passId').type('pwd123');

    // Técnicas para buscar e clicar em botões
    cy.get('button[type="submit"]').click();

    // Validando textos
    cy.get('h3[class^=title]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut');

    const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'

    cy.get('p[class="subheader"]')
        .should('have.text', expectedText);

});