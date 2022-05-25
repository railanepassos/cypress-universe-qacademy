// O describe é um agrupador de testes

describe('Suite de Testes', () => {

    before(() => {
      cy.log('Aqui temos algo que roda ANTES de TODOS os TESTES ! '); 
    });
    
    beforeEach(() => {
        cy.log('Aqui temos algo que roda ANTES de CADA os TESTES ! ');

    });

    it('teste 1', () => {
        cy.log('testando o teste 1');

    });

    it('teste 2', () => {
        cy.log('testando o teste 2');

    });

    it('teste 3', () => {
        cy.log('testando o teste 3');

    });

    it('teste 4', () => {
        cy.log('testando o teste 4');

    });

    after(() => {
        cy.log('Aqui temos algo que roda DEPOIS de TODOS os TESTES ! ');

    });

    afterEach(() => {
        cy.log('Aqui temos algo que roda DEPOIS de CADA os TESTES ! ');

    });

})


