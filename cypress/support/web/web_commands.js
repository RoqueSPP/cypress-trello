

Cypress.Commands.add('LoginPage', () => {
    cy.visit('/auth/login')
    cy.title().should('eq', 'OrangeHRM')
            cy.fixture('info.json')
        .then((info)=>{
    cy.get('input[name="username"]').type(info.username)
    cy.get('input[name="password"]').type(info.password)
    cy.get('button[type="submit"]').click()

        })
})

Cypress.Commands.add('logoutPage', () => {
    cy.get('.oxd-userdropdown-name').click()
    
    
})
Cypress.Commands.add('InfoPage', (name, lastname) => {
    cy.visit('/pim/viewEmployeeList')
    cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click()
    cy.get('[name="firstName"]').should('be.visible').type(name)
    cy.get('[name="lastName"]').should('be.visible').type(lastname)
    cy.get('.oxd-button--secondary').should('be.visible').click()
    
})