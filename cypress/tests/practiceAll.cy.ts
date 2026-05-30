
/*
1. various commands: contains, click, type, find, get, within, invoke, trigger, press, select, url, title, navigation, parent, parents, 
    children, eq, xpath, wrap, then, scrolling, dblclick
2. should
3. expect
4. new tab
5. iframe
6. drag and drop
7. file download and upload
8. shadow
9. json data
10. custom commands with global.ts
11. all hooks
12. framework mocha
13. framework cucumber
14. api automation
15. config.ts, package.json, tsconfig, cypress.env.json, CI/CD
*/

describe('test all concepts', ()=>{
    it('practice', ()=>{
        cy.visit('https://google.com', {timeout: 10000});
        cy.go('back', {timeout: 5000});
        cy.go('forward');
        cy.url().then((url)=>{
            cy.log(url);
            expect(url).to.equal('some url');
        });
        cy.title().then((title)=>{
            cy.log(title);
            expect(title).to.equal('some title');
        })
        cy.get('div', {timeout: 1000}).find('button', {timeout: 2000}).click({force: true});
        cy.get('div').press(Cypress.Keyboard.Keys.TAB)
        cy.get('div').within(($ele)=>{
            cy.wrap($ele).get('div').type('Sachin', {force: true, delay: 100, timeout: 1000});
        })
        cy.get('div').click();
        cy.xpath('//div').click();
        cy.contains('button', 'text').scrollIntoView().dblclick();
        cy.scrollTo('top');
        cy.scrollTo('bottom');
        cy.get('div').shadow().find('button').trigger('click', {timeout: 2000, force: true});
        cy.get('button').invoke('click', {timeout: 2000, force: true});
        cy.get('div').parent('input').type('Sachin');
        cy.get('div').type('{tab}');
        cy.get('button').type('{enter}');
        cy.get('div').check();
        cy.get('div').uncheck();
        cy.get('div').focus();
        cy.get('div').blur();
        cy.get('div').submit();
        cy.get('div').trigger('mouseover');
        cy.reload();
    });

    it('drag and drop 1', ()=>{
        cy.visit('https://testing.qaautomationlabs.com/drag-and-drop.php');
        const dataTransfer = new DataTransfer();
        // cy.contains('strong:contains("Item 1:-")', 'Item 1:-').trigger('dragstart');
        // cy.contains('strong:contains("Item 2:-")', 'Item 2:-').trigger('drop');
        // cy.get('strong:contains("Item 1:-")').trigger('dragstart');
        // cy.get('strong:contains("Item 5:-")').trigger('drop');
        cy.xpath('//strong[text()="Item 1:-"]').parent().trigger('dragstart', {dataTransfer, force: true});
        cy.xpath('//strong[text()="Item 5:-"]').parent().trigger('drop', {dataTransfer, force: true});
    })

    //recommended solution for drag and drop:
    it('drag and drop 2', ()=>{
        cy.visit('https://testing.qaautomationlabs.com/drag-and-drop.php');
        cy.xpath('//strong[text()="Item 1:-"]').parent().as('source');
        cy.xpath('//strong[text()="Item 5:-"]').parent().as('destination');
        cy.get('@source').drag('@destination');
    });

    it('iframe', ()=>{
        cy.visit('https://testing.qaautomationlabs.com/iframe.php');
        cy.frameLoaded('[name="iframe1"]');
        cy.iframe('[name="iframe1"]').find('button').click();
        cy.get('[id="message"]').invoke('text').then((text)=>{
            cy.log(text);
        });
        cy.frameLoaded('[name="iframe2"]');
        cy.iframe('[name="iframe2"]').find('button').click();
        cy.get('[id="message"]').invoke('text').then((text)=>{
            cy.log(text);
        });
    })

    it('File upload', ()=>{
        cy.visit('https://testing.qaautomationlabs.com/file-upload.php');
        cy.get('[id="fileInput"]').parent('label').selectFile('cypress/fixtures/example.json');
    });

    it.only('select', ()=>{
        cy.visit('https://orangehrm.com/contact-sales');
        cy.get('[id="Form_getForm_Country"]').select('India').should('contain', 'India');
        cy.get('[name="Country"]').select(100);
    });
});
