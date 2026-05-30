import 'cypress-xpath';

describe('test', ()=>{
    it('english', ()=>{
        cy.visit('https://translate.google.com/?sl=auto&tl=en&text=Hello%20world&op=translate');
        cy.xpath('//span[text()="Detect language"]', {timeout: 2000}).first().should('have.text', 'Detect language');
        cy.get('[aria-label="Source text"]', {timeout: 2000}).clear().type('Hello world');
        cy.xpath('//span[text()="English - Detected"]', {timeout: 2000}).should('have.text', 'English - Detected');

        cy.get('[aria-label="Source text"]', {timeout: 2000}).clear().type('como');
        cy.xpath('//span[text()="Portuguese (Brazil) - Detected"]', {timeout: 2000}).should('have.text', 'Portuguese (Brazil) - Detected');
    });
});
