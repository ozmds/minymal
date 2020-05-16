context('Time Spent Allocation', () => {
    let page;
    let cardPage;

    before(() => {
        cy.fixture('content').then((c) => {
            page = c.questionnaire.timeSpentAllocate;
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
        cy.get('#time-spent-confirm #confirm-submit-button').click();
    });

    it('Time spent are pre-filled from another page', () => {
        cy.get('[id^=time-spent-tab]').log();
        cy.get('[id^=time-spent-tab]:not([id*=day-select], [id*=start-time], [id*=end-time], [id*=time-diff], [id*=remove])').should('have.length', 2);
        cy.get('#time-spent-tab-1').invoke('text').should('eq', cardPage.images[1]);
        cy.get('#time-spent-tab-2');
    });

    it('Time spent tab can be collapsed', () => {
        cy.get('#time-spent-tab-1').click();
        cy.get('[id^=time-spent-tab][id*=day-select]').should('have.length', 0);
    });

    it('Day of the week dropdown can be updated', () => {
        cy.get('#time-spent-tab-1-day-select-1').click();
        cy.get('#time-spent-tab-1-day-select-1-option-Monday').click();
        cy.get('.MuiPopover-root').click('topRight');
        cy.get('#time-spent-tab-1-day-select-1').invoke('text').should('eq', 'Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    });

    it('Start time can be updated', () => {
        cy.get('#time-spent-tab-1-start-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#time-spent-tab-1-start-time-1').should('have.value', '12:30 AM');
    });

    it('End time can be updated', () => {
        cy.get('#time-spent-tab-1-end-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-1-end-time-1').should('have.value', '06:00 PM');
    });

    it('Time spent is updated (AM - PM)', () => {
        cy.get('#time-spent-tab-1-start-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#time-spent-tab-1-end-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-1-time-diff-1').invoke('text').should('eq', 'Time Spent: 122h, 30m');
    });

    it('Time spent is updated (PM - AM)', () => {
        cy.get('#time-spent-tab-1-start-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-1-end-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#time-spent-tab-1-time-diff-1').invoke('text').should('eq', 'Time Spent: 45h, 30m');
    });

    it('Allocation row can be added', () => {
        cy.get('#add-time-period-1').click();
        cy.get('[id^=time-spent-tab][id*=day-select]').should('have.length', 2);
    });

    it('More than 5 allocation rows cannot be added (per time spent)', () => {
        throw new Error('test not written');
    });

    it('Allocation row can be removed', () => {
        cy.get('#add-time-period-1').click();
        cy.get('#time-spent-tab-1-remove-2').click();
        cy.get('[id^=time-spent-tab][id*=day-select]').should('have.length', 1);
    });

    it('Only allocation row cannot be removed', () => {
        throw new Error('test not written');
    });

    it('Time allocations cannot overlap (same time spent)', () => {
        throw new Error('test not written');
    });

    it('Time allocations cannot overlap (different time spent)', () => {
        throw new Error('test not written');
    });

    it('Total time spent is updating (single time spent)', () => {
        cy.get('#time-spent-tab-1-start-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-1-end-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#total-time-spent').invoke('text').should('eq', 'Total Time Spent: 46/168 hours in a week.');
    });

    it('Total time spent is updating (multiple time spent)', () => {
        cy.get('#time-spent-tab-1-start-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-1-end-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#time-spent-tab-2-start-time-1').click();
        cy.setTimeTo('06:00 PM');
        cy.get('#time-spent-tab-2-end-time-1').click();
        cy.setTimeTo('12:30 AM');
        cy.get('#total-time-spent').invoke('text').should('eq', 'Total Time Spent: 91/168 hours in a week.');
    });

    it('Clicking submit changes to goal allocate screen', () => {
        throw new Error('test not written');
    });

    it('Clicking back changes to time spent confirm screen', () => {
        throw new Error('test not written');
    });
});
