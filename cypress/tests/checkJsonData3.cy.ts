
import practiceData from '../fixtures/practiceData.json'

Object.entries(practiceData).forEach(([key, value])=>{
    it('json test', ()=>{
        cy.visit('https://practicesoftwaretesting.com/');
        cy.contains('h5', value).click().then(()=>{
            cy.url().then((url)=>{
                expect(url).include('https://practicesoftwaretesting.com/product/');
            });
        });
    });
});
