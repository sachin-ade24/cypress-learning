
declare namespace Cypress {
    interface Chainable<Subject>{
        clickElement(slector: string): Chainable<JQuery<HTMLElement>>;
    }
}
