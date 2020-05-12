const URL = 'http://zero.webappsecurity.com/login.html'
const INPUT_USERNAME = '#user_login'
const INPUT_PASSWORD = '#user_password'
const BUTTON_SUBMIT = 'input[name="submit"]'

class LoginPage{
    //visit web page
    static visitLoginPage(){
        cy.visit(URL)
    }

    static setUserName(name){
        cy.get(INPUT_USERNAME).type(name)
    }

    static setPassword(password){
        cy.get(INPUT_PASSWORD).type(password)
    }

    static submit(){
        cy.get(BUTTON_SUBMIT).click()
    }

    

}
export default LoginPage