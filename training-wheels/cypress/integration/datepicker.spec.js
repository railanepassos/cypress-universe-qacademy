
it('selecionar data de nascimento', () => {

  cy.visit('/datepicker');

  const date = {
    month: 'nov',
    monthNumber: '11',
    day: '13',
    year: '1986'

  }

  cy.get('input.datetimepicker-dummy-input')
    .click();

  cy.get('div.datepicker-nav-month')
    .click();
  cy.contains('div.datepicker-month', date.month)
    .click();

  cy.get('div.datepicker-nav-year')
    .click();
  cy.contains('div.datepicker-year span', date.year)
    .click();

  cy.contains('button.date-item', date.day)
    .click();

  //cy.get('input#date')
  cy.get('div.datetimepicker-dummy-wrapper input.is-hidden')
    .should('have.value', `${date.day}/${date.monthNumber}/${date.year}`);



});