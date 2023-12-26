

it('deve exibir nome da tecnologia ao passar o mouse', () => {

  cy.visit('/hovers');

  /*

  No exemplo usando o comando ".trigger('mouseover');" o mesmo não funcionou. O cypress não possui suporte a cum comando do dipo "cy.hover()" portanto oferece alguma alternativas que podem substituir essa função mas para nosso exemplo não foi uma solução funcional. Para concluirmos o nosso objetivo para esse teste iremos ultilizar um plugin do cypress chamado "cypress-real-events", iremos adiciona-lo ao nosso projeto como dependência de desenvolvimento ultilizando o seguinte comando: 
    | yarn add cypress-real-events -D |

  Para mais informações sobre alternativas na documentação do cypress sobre a ação de Hover basta acessar o link abaixo: 
    | https://docs.cypress.io/api/commands/hover#Workarounds |

  Para mais informações sobre o plugin "cypress-real-events" basta acessar os links abaixo: 
    | https://glebbahmutov.com/blog/cypress-real-events/    |
    | https://github.com/dmtrKovalenko/cypress-real-events  |

  Exemplo de código usando o ".trigger('mouseover')": 
    |   cy.get('img[src*=python]')  |
    |     .trigger('mouseover');    |
    |   cy.get('span.tag-python')   |
    |     .should('be.visible');    |

  */

  const techs = [
    {
      locator: 'img[src*=python]',
      tag: 'span.tag-python',
      text: 'Python'
    },
    {
      locator: 'img[src*=golang]',
      tag: 'span.tag-golang',
      text: 'Golang'
    },
    {
      locator: 'img[src*=nodejs]',
      tag: 'span.tag-nodejs',
      text: 'Node.js'
    },
    {
      locator: 'img[src*=netcore]',
      tag: 'span.tag-netcore',
      text: '.NETCore'
    },
  ]

  techs.forEach(tech => {
    cy.get(tech.locator)
      .realHover('mouse');
    cy.get(tech.tag)
      .should('be.visible')
      .should('have.text', tech.text);

  });
});