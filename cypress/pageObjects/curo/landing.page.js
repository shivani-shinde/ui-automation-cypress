class LandingPage {
    constructor() {}

    get makeAppointmentBtn() {
        return cy.get('[id="btn-make-appointment"]')
    }
}

module.exports = LandingPage