/// <reference types="cypress" />
import LandingPage from '../../pageObjects/curo/landing.page';
import SignInPage from '../../pageObjects/curo/signin.page';

const landingPage = new LandingPage();
const signInPage = new SignInPage();

describe('Create appointments', () => {
    it('Visit Url', () => {
        // visit URL
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        landingPage.makeAppointmentBtn.click();
        cy.url().should('include', 'login');
        signInPage.username.should('be.visible');
        signInPage.password.should('be.visible');

        // Sign in
        let user = "", pass= "";
        cy.get('[aria-describedby="demo_username_label"]').then(($value) => {
            user = $value.text()
        });
        cy.get('[aria-describedby="demo_password_label"]').then(($value) => {
            pass = $value.text()
        });
        console.log({user, pass});
        signInPage.signIn(user || 'John Doe', pass || 'ThisIsNotAPassword');

        cy.get('select').select('Seoul CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('[id="radio_program_medicaid"]').click()
        cy.get('#txt_visit_date').type('13/05/2025');
        cy.get('[name="comment"]').click({force: true}).type('Sample Appointment comment.');
        cy.get('#btn-book-appointment').click();


        // Verification
        cy.get('h2').should('have.text', 'Appointment Confirmation')
    })
})