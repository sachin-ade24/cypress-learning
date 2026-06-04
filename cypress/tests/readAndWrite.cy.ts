
describe('test: read and write', ()=>{
    it('read', ()=>{
        cy.task('logMessage', 'read file');
        cy.task('readFileData', 'cypress/fixtures/hello.txt').then((data)=>{
            // cy.log(JSON.stringify(data));//valid
            cy.log(data as string);//valid
        })
    });
    it('write', ()=>{
        cy.task('logMessage', 'write file');
        cy.task('writeFileData', {
            path: 'cypress/fixtures/output.txt',
            content: 'Hello Cypress'
        });
    })
});
