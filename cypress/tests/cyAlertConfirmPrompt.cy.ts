
describe('alert confirm prompt test', ()=>{
    it('test1: alert confirm prompt', ()=>{
        cy.visit('https://vinothqaacademy.com/alert-and-popup/');

        //1. alert
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am an alert box!');
        });
        cy.get('[name="alertbox"]').click();


        //2. confirm: true
        cy.get('[name="confirmalertbox"]').click();
        cy.on('window:confirm', (text)=>{
            expect(text).to.equal('Confirm pop up with OK and Cancel button');
            return true;
        });


        cy.reload();

        //3. confirm: false
        cy.contains('button', 'Confirm Alert Box').click();
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Confirm pop up with OK and Cancel button');
            return false;
        });


        cy.reload();


        //4. Prompt Popup Handling --> Yes
        //cy.get('[name*="promptalertbox"]').click();
        cy.window().then((window)=>{
            cy.stub(window, 'prompt').returns('Yes');
        });
        cy.get('[name*="promptalertbox"]').click();


        cy.reload();


        //5. Prompt Popup Handling --> No
        cy.window().then((window)=>{
            cy.stub(window, 'prompt').returns('No');
        });
        cy.get('[name*="promptalertbox"]').click();
    });


    it.only('test2: alert confirm prompt', ()=>{

        cy.visit('https://demo.automationtesting.in/Alerts.html');


        //1. alert
        // cy.get('[href="#OKTab"]').click();
        cy.on('window:alert', (text)=>{
            expect(text).to.equal('I am an alert box!');
        });
        cy.get('[id="OKTab"]').click();


        //2. confirm: ok
        cy.get('[href="#CancelTab"]').click();
        cy.get('h1:contains("Automation Demo Site ")', {timeout: 2000}).scrollIntoView();
        cy.on('window:confirm', (text)=>{
            expect(text).to.equal('Press a Button !');
            return true;
        });
        cy.get('[id="CancelTab"]').click();


        cy.reload();


        //3. confirm: cancel
        cy.get('[href="#CancelTab"]').click();
        cy.get('h1:contains("Automation Demo Site ")', {timeout: 2000}).scrollIntoView();
        cy.on('window:confirm', (text)=>{
            expect(text).to.equal('Press a Button !');
            return false;
        });
        cy.get('[id="CancelTab"]').click();


        //4. prompt:
        cy.get('[href="#Textbox"]').click();
        cy.window().then((window)=>{
            cy.stub(window, 'prompt').returns('Sachin');
        });
        cy.get('[id="Textbox"]').click();
    });
});
