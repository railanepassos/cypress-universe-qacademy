it('deve marcar os top 5 filmes da marvel', () => {
    cy.visit('/checkboxes');

    const movies = [
        'blackpanther',
        'guardians',
        'strange',
        'shangchi',
        'eternals'
    ]

    movies.forEach(function (movie) {
        cy.get(`input[name=${movie}]`)
            .click()
            .should('be.checked');

    })

});