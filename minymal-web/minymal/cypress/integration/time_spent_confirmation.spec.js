context('Time Spent Confirmation', () => {
    let page;
    let cardPage;

    before(() => {
        cy.fixture('content').then((c) => {
            page = c.questionnaire.timeSpentConfirm;
            cardPage = c.questionnaire.timeSpentCard;
        });
    });

    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('http://localhost:3000');
        cy.get('#start-button').click();
        [1, 3, 6].forEach((value) => {
            cy.get(`#goals-card #card-option-${value}-text`).click();
        });
        cy.get('#goals-card #card-submit-button').click();
        cy.get('#goals-confirm #confirm-submit-button').click();
        [2, 4, 6].forEach((value) => {
            cy.get(`#time-spent-card #card-option-${value}-text`).click();
        });
        cy.get('#time-spent-card #card-submit-button').click();
    });

    it('Time spent are pre-filled from another page', () => {
        cy.get('[id^=confirm-option]:not([id$=label])').should('have.length', 3);
        cy.get('#time-spent-confirm #confirm-option-1').should('have.value', cardPage.images[1]);
        cy.get('#time-spent-confirm #confirm-option-2').should('have.value', cardPage.images[3]);
        cy.get('#time-spent-confirm #confirm-option-3').should('have.value', '');
    });

    it('Empty text field can accept input', () => {
        cy.get('#time-spent-confirm #confirm-option-3').type('testtesttest');
        cy.get('#time-spent-confirm #confirm-option-3').should('have.value', 'testtesttest');
    });

    it('Pre-filled text field can accept input', () => {
        cy.get('#time-spent-confirm #confirm-option-1').clear();
        cy.get('#time-spent-confirm #confirm-option-1').type('testtesttest');
        cy.get('#time-spent-confirm #confirm-option-1').should('have.value', 'testtesttest');
    });

    it('First text field can be removed', () => {
        cy.get('#time-spent-confirm #remove-option-1').click();
        cy.get('[id^=confirm-option]:not([id$=label])').should('have.length', 2);
        cy.get('#time-spent-confirm #confirm-option-1').should('have.value', cardPage.images[3]);
        cy.get('#time-spent-confirm #confirm-option-2').should('have.value', '');
    });

    it('Middle text field can be removed', () => {
        cy.get('#time-spent-confirm #remove-option-2').click();
        cy.get('[id^=confirm-option]:not([id$=label])').should('have.length', 2);
        cy.get('#time-spent-confirm #confirm-option-1').should('have.value', cardPage.images[1]);
        cy.get('#time-spent-confirm #confirm-option-2').should('have.value', '');
    });

    it('Last text field can be removed', () => {
        cy.get('#time-spent-confirm #remove-option-3').click();
        cy.get('[id^=confirm-option]:not([id$=label])').should('have.length', 2);
        cy.get('#time-spent-confirm #confirm-option-1').should('have.value', cardPage.images[1]);
        cy.get('#time-spent-confirm #confirm-option-2').should('have.value', cardPage.images[3]);
    });

    it('Only text field cannot be removed', () => {
        cy.get('#time-spent-confirm #remove-option-1').click();
        cy.get('#time-spent-confirm #remove-option-1').click();
        cy.get('#time-spent-confirm #remove-option-1').click();
        cy.get('#time-spent-confirm #confirm-question-error-text').invoke('text').should('eq', page.error.atLeastOne);
    });

    it('Text field can be added', () => {
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('[id^=confirm-option]:not([id$=label])').should('have.length', 4);
    });

    it('More than 10 text fields cannot be added', () => {
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #add-option').click();
        cy.get('#time-spent-confirm #confirm-question-error-text').invoke('text').should('eq', page.error.tooMany);
    });

    it('Single empty text field cannot be removed', () => {
        cy.get('#time-spent-confirm #confirm-option-1').clear();
        cy.get('#time-spent-confirm #confirm-option-2').clear();
        cy.get('#time-spent-confirm #confirm-submit-button').click();
        cy.get('#time-spent-confirm #confirm-question-error-text').invoke('text').should('eq', page.error.atLeastOne);
    });

    it('Clicking submit changes to time spent allocate screen', () => {
        cy.get('#time-spent-confirm #confirm-submit-button');
        cy.get('#time-spent-confirm #confirm-submit-button').click();
        cy.get('#spent-allocate-question').should('be.visible');
    });

    it('Clicking back changes to goal confirm screen', () => {
        cy.get('#back-button').click();
        cy.get('#goals-confirm #confirm-question-text').should('be.visible');
    });
});
