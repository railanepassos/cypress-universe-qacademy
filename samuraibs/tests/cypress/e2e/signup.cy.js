import { faker } from "@faker-js/faker";

it('deve cadatrar um novo usuário através do acesso direto a pagina', () => {

  cy.visit('/signup');

  cy.get('input[placeholder="Nome"]').type(faker.name.fullName());
  cy.get('input[placeholder="E-mail"]').type(faker.internet.email());
  cy.get('input[placeholder="Senha"]').type(faker.internet.password(10));

  cy.contains('button', 'Cadastrar').click();

  cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!');

});

it('deve cadatrar um novo usuário através do acesso via pagina de login', () => {

  cy.visit('/');
  cy.contains('a', 'Criar conta').click();

  cy.get('input[placeholder="Nome"]').type(faker.name.fullName());
  cy.get('input[placeholder="E-mail"]').type(faker.internet.email());
  cy.get('input[placeholder="Senha"]').type(faker.internet.password(10));

  cy.contains('button', 'Cadastrar').click();

  cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!');

});