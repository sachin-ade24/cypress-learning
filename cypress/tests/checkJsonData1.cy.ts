
import users from '../fixtures/users.json';

describe('json test', ()=>{
    it('json', ()=>{
        const url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
        cy.visit(url);
        cy.get('#input-firstname').type(users.Users[0]["First Name"]);
        cy.get('#input-lastname').type(users.Users[0]["Last Name"]);
        cy.fixture('users').then((data)=>{
            cy.log(JSON.stringify(users));
            cy.get('#input-firstname').invoke('val').should('eq', data.Users[0]["First Name"]);
            cy.get('#input-lastname').invoke('val').should('eq', data.Users[0]["Last Name"])
            cy.get('#input-email').type(data.Users[0]["E-Mail"]);
            expect(data.Users[1]["First Name"]).to.equal('QA');
        });
        users.Users.forEach((user)=>{
            cy.log(`${user["First Name"]}: ${user["Last Name"]}`);
        });
        for(let i=0; i<=users.Users.length; i++){
            cy.log(JSON.stringify(users.Users[i]));
        };
    });
});
