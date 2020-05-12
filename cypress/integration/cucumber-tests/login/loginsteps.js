import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    // cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visitLoginPage()
})

When('I submit login', () => {
    LoginPage.setUserName('username')
    LoginPage.setPassword('password')
    LoginPage.submit()
    // cy.get('#user_login').type('username')
    // cy.get('#user_password').type('password')
    // cy.get('input[name="submit"]').click()
})

When('I fill username with {string}', (usernamae) => {
    LoginPage.setUserName(usernamae)
})

When('I fill password with {string}', password => {
    LoginPage.setPassword(password)
})


When('I click on submit login', () => {
    LoginPage.submit()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})