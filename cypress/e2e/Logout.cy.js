

describe('template spec', () => {

  it('Home Page', () => {
    cy.LoginPage()
    cy.logoutPage()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/auth/login`)
  })
})