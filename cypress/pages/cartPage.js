export class CartPage {

    getProductName() {
        return cy.get('[data-test="product-title"]');
    }

    getProductQuantity() {
        return cy.get('[data-test="product-quantity"]');
    }

    getPrice() {
        return cy.get('[data-test="product-price"]');
    }

    getTotal() {
        return cy.get('[data-test="cart-total"]');
    }
}