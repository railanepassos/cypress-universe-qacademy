// O iFrame consegue embarcar uma pagina de terceiro em minha aplicação/ site.

/* 
Para verificar um conteúdo dentro do iFrame precisamos navegar pelos elementos que o exibem na tela, a estratégia aqui é criar uma constante que recebe uma função, essa função irá navegar pelo elemento que contem esse iFrame, encontrar o corpo da pagina exibida, verifiar se esse corpo não está vazio. Além disso usaremos o .then que é uma função que fica aguardando uma promessa, ou seja, como não temos controle da pagina que será exibida no iFrame através do .then aguardaremos uma promessa até que a mesma esteja disponível através do comando .its para que possamos armazenar a pagina através da função niceIFrame.

cy.wrap vai empacotar o que vem do .its

Por fim para que essa estratégia funcione de fato será necessário incluir a propriedade   "chromeWebSecurity": com valor false no arquivo "cypress.json"

*/

const niceIFrame = () => {
  return cy
    .get('#weareqaninja')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);

}

const badIFrame = () => {
  return cy
    .get('iframe[src*=instagram]')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);

}

it('deve validar o total de seguidores no iFrame bom', () => {

  cy.visit('/nice_iframe');

  niceIFrame().contains('span.FollowerCountText', '6,590 followers')
    .should('be.visible');

});

it('deve validar o total de seguidores no iFrame ruim', () => {

  cy.visit('/bad_iframe');

  badIFrame().contains('span.FollowerCountText', '6,590 followers')
    .should('be.visible');

});

it('deve validar username no iFrame ruim', () => {

  cy.visit('/bad_iframe');

  badIFrame()
    .contains('span.UsernameText', 'qacademy_oficial')
    .should('be.visible');

});