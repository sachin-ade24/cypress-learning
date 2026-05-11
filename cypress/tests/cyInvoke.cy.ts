
describe('invoke test', ()=>{
    it('invoke: navigate to url without clicking on it', ()=>{
        const url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
        cy.visit(url);
        cy.get('aside').contains('a', 'Login').invoke('attr', 'href').then((href: any)=>{
            cy.visit(href);
            cy.url().should('eq', 'https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        });
    });

    it('invoke: multiple tab handling', ()=>{
        cy.visit('https://orangehrm.com/contact-sales');
        //cy.get('[id*="Header"] [aria-label="Close banner"] svg', {timeout: 2000}).click();
        cy.contains('a', 'E-Books').invoke('attr', 'target', '_self').click();
        cy.go('back');
    });
});
