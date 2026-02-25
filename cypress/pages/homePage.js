export class HomePage {

    visitHomePage() {
        cy.visit('/');
    }

    enterSearchText(searchStr) {
        cy.get('[data-test="search-query"]').clear().type(searchStr);
    }

    clickSearchButton() {
        cy.get('[data-test="search-submit"]').click();
    }

    getProductNames() {
        return cy.get('[data-test="product-name"]');
    }
}