context('Goals Options', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
        cy.get('#start-button').click();
    });

    it('Clicking goal cards mark them as selected', () => {
        [1, 2, 3, 4, 5, 6].forEach((value) => {
            cy.get(`#goals-card #card-option-${value}-text`).click();
            cy.get(`#goals-card #checkbox-icon-${value}`).should('be.visible');
        });
    });

    it('Clicking submit changes to goal confirm screen', () => {
        cy.get('#goals-card #card-submit-button').click();
        cy.get('#goals-confirm #confirm-question-text').should('be.visible');
    });
});
