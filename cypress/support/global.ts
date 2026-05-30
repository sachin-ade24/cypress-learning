/// <reference types="cypress" />

declare namespace Cypress{
    interface Chainable<Subject=any>{
        clickElement(selector: string): Chainable<JQuery<HTMLElement>>;
    }
}