
describe('User sucessfully registers', ()=>{
    it('User fills the personal details', ()=>{
        const url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
        cy.visit(url);
        cy.url().then((currentUrl)=>{
            expect(currentUrl).equal(url);
            cy.wrap(currentUrl).should('include', 'register');
        });
        cy.title().then((title)=>{
            expect(title).equal('Register Account');
        });
    });

    it('All important navigation commands', ()=>{

        const url = "https://naveenautomationlabs.com/opencart/index.php?route=account/register";

        //1. visit url:
        cy.visit(url);


        //2. reload:
        cy.reload();


        //3. Force reload from server:
        cy.reload(true);


        //4. location:
        //4.1
        cy.location('href').then((url)=>{
            cy.log(url);
        });
        //4.2
        cy.location('protocol').then((protocol)=>{
            cy.log(protocol);
            cy.wrap(protocol).should('eq', 'https:');
            cy.log(typeof(protocol));
        });
        //4.3
        cy.location('hostname').should('include', 'naveenautomationlabs');
        cy.location('hostname').then((hostname)=>{
            cy.log(hostname);
            cy.wrap(hostname).should('eq', 'naveenautomationlabs.com');
        });
        //4.4
        cy.location('pathname').should('eq', '/opencart/index.php')
        cy.location('pathname').then((pathname)=>{
            cy.log(pathname);
            expect(pathname).to.equal('/opencart/index.php');
        });
        //4.5
        cy.location('search').should('eq', '?route=account/register');
        cy.location('search').then((queryParameter)=>{
            cy.log(queryParameter);
            expect(queryParameter).to.equal('?route=account/register');
        });
        //4.6
        cy.location('hash').should('eq', '');
        //4.7
        cy.location('host').then((host)=>{
            cy.log(host);
            expect(host).to.equal('naveenautomationlabs.com');
        });
        //4.8
        cy.location('origin').should('eq', 'https://naveenautomationlabs.com')
        //4.9
        cy.location().then((location: any)=>{
            cy.log(location);
            console.log(typeof(location));
        });

        
        //5.
        //cy.hash():
        cy.hash().should('eq', '');


        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');


        //6.
        cy.window().then((win)=>{
            win.history.go();//same page will load
            win.history.back();//previous page will load
            win.history.forward();//next page will load (next to prvious)
        });


        //7. 
        cy.go('back');
        cy.go('forward');

    });
});