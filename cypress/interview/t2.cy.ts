
describe('test', ()=>{
    it('practice', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#name').type('Sachin');
        cy.get('label:contains("Email:")').click({force: true});
        cy.get('#name').invoke('val').then((val)=>{
            if(val=='Sachin'){
                cy.get('#name').clear().type('Sachin 01');
            } else if((val=='Kalpana')){
                cy.get('#name').clear().type('Kalpana 01');
            }
        });

        // cy.get('.form-group [type="checkbox"]').click({multiple: true});//valid
        /*
            cy.get('.form-group [type="checkbox"]').each((cb)=>{
                cb.click();
            });//valid
        */
        cy.get('.form-group [type="checkbox"]').each((cb)=>{
            cb.trigger('click');
        });//valid
        
        // cy.get('#country').select('india');
        cy.get('#country option').each((opt)=>{
            cy.wrap(opt).invoke('attr', 'value').then((val: any)=>{
                cy.get('#country').select(val);
                expect(val).to.be.exist;
            });
            cy.wrap(opt).invoke('text').then((text: any)=>{
                expect(text).to.be.exist;
                cy.log(text);
            });
        });

        cy.get('#country').find('option').should('not.have.value', 'Sri Lanka');//valid
        //cy.get('#country').find('option').should('not.contain', 'Sri Lanka');//valid

        // cy.get('#colors').select(['red', 'blue'], {force: true});

        /* Works:

            cy.get('#colors').then($select => {
                $select.find('option[value="red"]:gt(0)').remove();
                $select.find('option[value="green"]:gt(0)').remove();
            });
            cy.get('#colors').select(['red', 'blue', 'green', 'yellow', 'white']);

        */
        
        //Better way (I mean easier way)
        cy.get('option[value="red"]').last().invoke('remove');
        cy.get('option[value="green"]').last().invoke('remove');
        cy.get('#colors').select(['red', 'blue', 'green', 'yellow', 'white']);
        
    });
});

/*

For reference, these are all valid ways to remove elements in Cypress:

    cy.get(selector).invoke('remove');

    cy.get(selector).then($el => {
        $el.remove();
    });

    cy.document().then(doc => {
        doc.querySelector(selector)?.remove();
    });

As an Automation Tester, it's useful to know that Cypress can manipulate the DOM using jQuery methods such as:

    .remove()
    .hide()
    .show()
    .attr()
    .removeAttr()
    .text()
    .html()
    .val()

These techniques are handy for debugging, proof-of-concept tests, and understanding how the application behaves under different conditions.

*/