import {faker} from '@faker-js/faker'

describe('template spec', () => {

  it('Info Page', () => {
    const name = faker.person.fullName()
    const lastname = faker.person.lastName()
    cy.log(name,lastname)
    cy.LoginPage()
    cy.InfoPage(name, lastname)
    
  })
})