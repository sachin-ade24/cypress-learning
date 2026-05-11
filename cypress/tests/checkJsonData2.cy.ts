
import data from '../fixtures/data.json';

describe('json data test', ()=>{
    data.Users.forEach((user)=>{
        it('json', ()=>{
            cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
            // cy.get(`#input-${Object.keys(user)}`).type(`${Object.values(user)}`);
            Object.entries(user).forEach(([key, value])=>{
                cy.get(`#input-${key}`).type(value);
                cy.get(`#input-${key}`).invoke('val').then((val)=>{
                    expect(val).to.equal(value);
                });
            });

            //==================OR=====================================================================//

            cy.reload();

            for(let [key, value] of Object.entries(user)){
                cy.get(`#input-${key}`).type(value);
                cy.get(`#input-${key}`).invoke('val').then((val)=>{
                    expect(val).to.equal(value);
                });
            };
        });
    })
});
