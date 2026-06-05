
describe('Database Test', () => {
    
    it('should fetch data from DB', () => {

        cy.task('queryDb', 'SELECT * FROM users').then((rows) => {
            cy.log(JSON.stringify(rows));
        });
        
    });

});
