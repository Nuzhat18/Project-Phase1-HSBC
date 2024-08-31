describe('Credit card flow  test', () => {
  it('Credit  card  flow test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('li:nth-child(1) > div.header-mobile-doormat-0.header-doormat-mobile-title.sidebar-submenu-trigger > span.header-main-navigation-title').contains('Banking').trigger('mouseover');
    cy.get('div:nth-child(1) > a > h2').contains('Credit Cards').click({force: true});
    cy.contains('Credit cards').should('be.visible');
    //Verify HSBC visa platinum credit card.
    cy.contains('HSBC Visa Platinum Credit Card').should('be.visible').click();
    cy.contains('Apply now').should('be.visible');
    cy.url().should('include', '/credit-cards/products/visa-platinum/');
    cy.get('img.LPMimage').should('be.visible');
    cy.contains('INR0').should('be.visible');
    cy.get('img#pp_intro_image_3').should('be.visible');
    cy.get('div.header-logo.lg-2 > a > img').click({force: true});
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
  })
})
