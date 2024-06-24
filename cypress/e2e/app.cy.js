describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // start from the index page
    cy.visit('http://localhost:3000/')

    // find a link with a href attribute that includes "about" and click it
    cy.get('a[href*="about"]').click()

    // the new url should include "/about"
    cy.url().should('include', '/about')

    // the new page should contain an h1 with "About page"
    cy.get('h1').contains('About')
  })
})
