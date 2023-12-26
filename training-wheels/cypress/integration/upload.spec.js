
it('deve fazer o upload de uma foto', () => {

  cy.visit('/upload');

  const photoFile = 'cypress/fixtures/photoRailane.jpg'

  cy.get('input[name=file]')
    .selectFile(photoFile, { force: true });

  cy.get('input[type=submit]')
    .click();

  cy.get('img[src="/uploads/photoRailane.jpg"]', { timeout: 10000 })
    .should('be.visible');

});