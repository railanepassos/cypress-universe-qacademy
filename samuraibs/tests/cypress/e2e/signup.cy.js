import { faker } from "@faker-js/faker";

/*
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

*/

it('deve simular cadastro de usuário com sucesso ao interceptar chamadas', () => {
  // Os testes usando o faker infla o banco de dados. Esse caso de teste evita esse efeito colateral. Dessa forma não temos um teste integrado pois estamos maquiando o backend porem nesse momento devemos testar apénas o front.

  let userData = {
    name: "Maria",
    email: "maria@mailinator.com",
    password: "pwd123"

  }

  cy.visit('/signup');

  cy.get('input[placeholder="Nome"]').type(userData.name);
  cy.get('input[placeholder="E-mail"]').type(userData.email);
  cy.get('input[placeholder="Senha"]').type(userData.password);

  cy.intercept('POST', '/users', {
    statusCode: 200
  }).as('postUser')

  cy.contains('button', 'Cadastrar').click();

  cy.wait('@postUser');

  cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!');

});

it('deve cadastrar usuário com sucesso após remover usuário do banco de dados', () => {

  let userData = {
    name: "Maria",
    email: "maria@mailinator.com",
    password: "pwd123"

  }

  cy.task('removeUser', userData.email)
    .then((result) => {
      console.log(result)

    })
  cy.visit('/signup');

  cy.get('input[placeholder="Nome"]').type(userData.name);
  cy.get('input[placeholder="E-mail"]').type(userData.email);
  cy.get('input[placeholder="Senha"]').type(userData.password);

  cy.contains('button', 'Cadastrar').click();

  cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!');

});