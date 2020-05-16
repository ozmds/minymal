context('Welcome', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
    });

    it('Clicking start changes to goal options screen', () => {
        cy.get('#start-button').click();
        cy.get('#goals-card #card-question-text').should('be.visible');
    });
});
