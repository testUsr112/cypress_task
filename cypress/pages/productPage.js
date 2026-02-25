export class ProductPage {

    visitProduct(prodId) {
        cy.visit('/product/' + prodId);
    }

    setQuantity(prodQuantity) {
        cy.get('[data-test="quantity"]').clear().type(String(prodQuantity));
    }

    clickAddToCart() {
        cy.get('[data-test="add-to-cart"]').click();
    }

    getCartQuantity() {
        return cy.get('[data-test="cart-quantity"]');
    }

    clickCartIcon() {
        cy.get('[data-test="nav-cart"]').click();
    }

    clickAddToFavouritesButton() {
        cy.get('[data-test="add-to-favorites"]').click();
    }

    clickAccountDropdown() {
        cy.get('[data-test="nav-menu"]').click();
    }

    clickMyFavorites() {
        cy.get('[data-test="nav-my-favorites"]').click();
    }

    getToast() {
        return cy.get('[role="alert"]');
    }
}

