class SignInPage {
    constructor () {}

    get username() {
        return cy.get('[id="txt-username"]')
    }

    get password() {
        return cy.get('[id="txt-password"]')
    }

    signIn(username, password) {
        this.username.type(username);
        this.password.type(password);
        cy.get('[id="btn-login"]').click()
    }
}

module.exports = SignInPage