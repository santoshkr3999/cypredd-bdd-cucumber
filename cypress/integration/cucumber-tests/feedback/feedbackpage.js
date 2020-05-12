const URL = 'http://zero.webappsecurity.com/feedback.html'
const INPUT_NAME = '#name'
const INPUT_EMAIL = '#email'
const INPUT_SUBJECT = '#subject'
const INPUT_qUESTIONS = '#comment'
const BUTTON_SUBMIT = 'input[type="submit"]'

class FeedbackPage{
    static visit(){
        cy.visit(URL)
    }

    static fillForm(){
        cy.get(INPUT_NAME).type('some name')
        cy.get(INPUT_EMAIL).type('emailid@email.com')
        cy.get(INPUT_SUBJECT).type('my subject')
        cy.get(INPUT_qUESTIONS).type('thi is my question')
        
    }

    static submitGeedbackForm(){
        cy.get(BUTTON_SUBMIT).click()
    }

    static validateFeedbackSubmission(){
        cy.contains('Thank you for your comment').should('be.visible')
    }
}

export default FeedbackPage