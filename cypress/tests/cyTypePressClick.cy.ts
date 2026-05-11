
import 'cypress-plugin-tab';

describe('Type Click press', ()=>{
    it('Type', ()=>{
        const url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
        cy.visit(url);
        cy.get('#input-firstname').type('Sachin');
        cy.get('[name="firstname"]').invoke('val').then((value: any)=>{
            cy.log(value);
            cy.log(typeof(value));
        });
        cy.get('[placeholder="First Name"]').clear();
        cy.get('#input-firstname').type('Sac', {delay: 50});
        cy.get('#input-lastname').type('Automation', {force: true}).press(Cypress.Keyboard.Keys.TAB);
        /*
            (property) Keys: {
                DOWN: "ArrowDown";
                LEFT: "ArrowLeft";
                RIGHT: "ArrowRight";
                UP: "ArrowUp";
                END: "End";
                HOME: "Home";
                PAGEDOWN: "PageDown";
                PAGEUP: "PageUp";
                ENTER: "Enter";
                TAB: "Tab";
                BACKSPACE: "Backspace";
                SPACE: "Space";
                DELETE: "Delete";
                INSERT: "Insert";
                ESC: "Escape";
            }
        */
        cy.get('#input-email').trigger('type').type('sa@as.com').clear({force: true});
        cy.get('[for="input-email"]').within(($ele)=>{
            let str: string;
            cy.wrap($ele).invoke('text').then((text)=>{
                str = text;
                if(text.includes('Mail')){
                    expect(text).equal('E-Mail');
                };
                cy.wrap($ele).parent().find('input').type(str.toLowerCase().padEnd(18, '@qwerty.com '));
            });
        });
        cy.get('[id="input-password"]').type('1234567');
        cy.get('[id="input-confirm"]').type('1234567');
    });

    it('click', ()=>{
        cy.contains('Yes').first().scrollIntoView().click();
    });
});
