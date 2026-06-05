
describe('test google traslate', ()=>{
    it('detects lan', ()=>{

        cy.visit('https://translate.google.com/?sl=auto&tl=en&text=Namaste&op=translate');
        cy.get('[aria-label="Source text"]').clear().type('Hello world');//[aria-label="Source text"]
        cy.contains('English - Detected').should('have.text', 'English - Detected')// //span[text()="English - Detected"]

    });
})
