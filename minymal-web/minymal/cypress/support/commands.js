// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('setTimeTo', (time) => {
    if (time.slice(0, 2) === '12') {
        cy.get('.MuiPickersClock-container').click('top');
    } else if (time.slice(0, 2) === '06') {
        cy.get('.MuiPickersClock-container').click('bottom');
    }
    if (time.slice(3, 5) === '00') {
        cy.get('.MuiPickersClock-container').click('top');
    } else if (time.slice(3, 5) === '30') {
        cy.get('.MuiPickersClock-container').click('bottom');
    }
    if (time.slice(-2) === 'AM') {
        cy.get('.MuiPickersTimePickerToolbar-ampmSelection > button').eq(0).click();
    } else if (time.slice(-2) === 'PM') {
        cy.get('.MuiPickersTimePickerToolbar-ampmSelection > button').eq(1).click();
    }
    cy.get('.MuiPopover-root').click('topRight');
});
