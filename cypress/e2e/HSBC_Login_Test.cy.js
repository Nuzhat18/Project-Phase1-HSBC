describe('HSBC login test', () => {
  it('passes', () => {
    cy.visit('https://www.hsbc.co.in/');
   cy.get('div.header-logo.lg-2 > h1 > img').should('be.visible');
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Log On').click({force:true });
    cy.get('a').contains('Log On');
    cy.contains('Continue to log on with browser').click();
    cy.get('h2').contains('Log On');
    cy.get('button').should('be.disabled');
    cy.contains('Please enter your username').type('abcd@example.com');
    cy.get('button').should('be.enabled');
    cy.get('input#rememberMe').should('not.be.checked');
    cy.get('a.help-link-on-page.pull-right > span > span:nth-of-type(2)',{timeout:10000}).should('be.visible');
    cy.xpath('//a[@id="username_help_link"]/span/span[2]').click({force:true });
    cy.get('h3').contains('Username').should('be.visible');
    cy.xpath('//a[@class="close-btn"]/span/span[2]',{timeout:10000}).should('be.visible').click({force:true });
    cy.url().should('include', '/security/');    
  })
})

