const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

it('webapp deve estar online', () => {

  cy.visit('/');
  cy.title()
    .should('eq', 'Samurai Barbershop by QAninja')

});

sizes.forEach((size) => {
  // make assertions on the logo using
  // an array of different viewports

  it(`logo deve ser visivel na tela com tamanho ${size}`, () => {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1])
    } else {
      cy.viewport(size)
    }

    cy.visit('/')
    cy.get('.logo').should('be.visible')
  })
})