import { faker } from "@faker-js/faker";

/*
  describe('CADASTRO - Cenários de cadastro de usuário ultilizando o faker', () => {
    it('deve cadatrar um novo usuário através do acesso direto a pagina', () => {

      cy.visit('/signup');
    
      cy.get('input[placeholder="Nome"]').type(faker.name.fullName());
      cy.get('input[placeholder="E-mail"]').type(faker.internet.email());
      cy.get('input[placeholder="Senha"]').type(faker.internet.password(10));
    
      cy.contains('button', 'Cadastrar').click();
    
      cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!');
    
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
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!');
    
    });
  }) 
*/

/* Testes usando o faker infla o banco de dados. Para evitar esse efeito colateral existem algumas alternativas, porem dessa forma não temos um teste integrado pois estamos maquiando o backend porem se o objetivo é testar apénas o front pode ser feito como no exemplo abaixo.
  describe('CADASTRO - Cenários de cadastro de usuário interceptando chamada', () => {
    it('deve simular cadastro de usuário com sucesso ao interceptar chamadas', () => {

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
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!');

    });

})
*/

describe('CADASTRO', () => {

  context('Quando o usuário é novato', () => {

    const userData = {
      name: "Maria",
      email: "maria@mailinator.com",
      password: "pwd123"

    }

    before(() => {
      cy.task('removeUser', userData.email)
        .then((result) => {
          console.log(result)

        })
    })

    it('deve cadastrar com sucesso', () => {

      cy.visit('/signup');

      cy.get('input[placeholder="Nome"]').type(userData.name);
      cy.get('input[placeholder="E-mail"]').type(userData.email);
      cy.get('input[placeholder="Senha"]').type(userData.password);

      cy.contains('button', 'Cadastrar').click();

      cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!');

    });

  })

  context('Quando o email já existe', () => {

    const userData = {
      name: "Maria Souza",
      email: "mariasouza@mailinator.com",
      password: "pwd123",
      is_provider: true
    }

    before(() => {
      cy.task('removeUser', userData.email)
        .then((result) => {
          console.log(result)

        })

      cy.request(
        'POST',
        'http://localhost:3333/users',
        userData
      ).then((response) => {
        expect(response.status).to.eq(200);
      })
    })

    it('não deve cadastrar o usuário', () => {

      cy.visit('/signup');

      cy.get('input[placeholder="Nome"]').type(userData.name);
      cy.get('input[placeholder="E-mail"]').type(userData.email);
      cy.get('input[placeholder="Senha"]').type(userData.password);

      cy.contains('button', 'Cadastrar').click();

      cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Email já cadastrado para outro usuário.');

    });

  })

})
