import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I wait for {int} seconds', seconds => {
    seconds = seconds *1000
    cy.wait(seconds)
})

