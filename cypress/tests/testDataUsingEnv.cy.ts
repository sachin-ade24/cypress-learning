
describe('test env data', () => {
    it('env data', () => {
        cy.visit(`${Cypress.env('baseUrl')}/opencart/index.php?route=account/register`);
        cy.get('#input-firstname').type(`${Cypress.env('firstname')}`);
        cy.get('#input-firstname').invoke('val').should('eq', `${Cypress.env('firstname')}`);
    });
});
