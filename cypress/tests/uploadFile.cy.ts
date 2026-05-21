
describe('test: upload file', ()=>{
    it('upload file', ()=>{
        cy.task('logMessage', 'Uploading the file --> scenario');
        cy.visit('https://testing.qaautomationlabs.com/file-upload.php');
        cy.get('[id="fileInput"]').parent('label').selectFile('cypress/fixtures/example.json');
    })
});
