
it('selecionar data de nascimento', () => {

  cy.visit('/datepicker');

  const date = {
    month: 'jan',
    monthValue: '01',
    day: '8',
    dayValue: '08',
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

  cy.contains('button[class=date-item]', new RegExp("^" + date.day + "$", "g"))
    .click()

  //cy.get('input#date')
  cy.get('div.datetimepicker-dummy-wrapper input.is-hidden')
    .should('have.value', `${date.dayValue}/${date.monthValue}/${date.year}`);



});