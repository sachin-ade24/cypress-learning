
describe('select dropdown test', ()=>{
    it.only('select', ()=>{
        cy.visit('https://orangehrm.com/contact-sales');
        cy.get('[id="Form_getForm_Country"]').select('India').should('contain', 'India');
        cy.get('[name="Country"]').select(100);
    });
});
