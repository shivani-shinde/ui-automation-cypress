/// <reference types="cypress" />
import LandingPage from '../../pageObjects/curo/landing.page';

const landingPage = new LandingPage();

describe('Create appointments', () => {
    before(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    })
    
    it('Click on make appointment button', () => {
        landingPage.makeAppointmentBtn.click();
    })
})