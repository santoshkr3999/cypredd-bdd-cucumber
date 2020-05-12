import FeedbackPage from './feedbackpage'
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

Given('I open feedback page', () => {
    FeedbackPage.visit()
})

When('I fill feedback form', () => {
    FeedbackPage.fillForm()
})

And('I click on submit button', () =>{
    FeedbackPage.submitGeedbackForm()
})

Then('I see the feedback submitted', () => {
    FeedbackPage.validateFeedbackSubmission()
})
