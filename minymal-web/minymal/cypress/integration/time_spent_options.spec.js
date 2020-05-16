context('Time Spent Options', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
        cy.get('#start-button').click();
        [1, 3, 6].forEach((value) => {
            cy.get(`#goals-card #card-option-${value}-text`).click();
        });
        cy.get('#goals-card #card-submit-button').click();
        cy.get('#goals-confirm #confirm-submit-button').click();
    });

    it('Clicking time spent cards mark them as selected', () => {
        [1, 2, 3, 4, 5, 6].forEach((value) => {
            cy.get(`#time-spent-card #card-option-${value}-text`).click();
            cy.get(`#time-spent-card #checkbox-icon-${value}`).should('be.visible');
        });
    });

    it('Clicking submit changes to time spent confirm screen', () => {
        cy.get('#time-spent-card #card-submit-button').click();
        cy.get('#time-spent-confirm #confirm-question-text').should('be.visible');
    });

    it('Clicking back changes to goal confirm screen', () => {
        cy.get('#back-button').click();
        cy.get('#goals-confirm #confirm-question-text').should('be.visible');
    });
});
