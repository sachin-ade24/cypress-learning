
describe('json test', ()=>{
    it.only('json data test', ()=>{
        const url = 'https://practicesoftwaretesting.com/';
        cy.visit(url);
        cy.fixture('practiceData').then((data)=>{
            cy.log(data['Pliers']);
            for(let key in data){
                cy.log(`${key}: ${data[key]}`);
            };
            cy.log(' ');
            for(let [key, value] of Object.entries(data)){
                cy.log(`${key}: ${value}`);
            };
        })
    });
});
