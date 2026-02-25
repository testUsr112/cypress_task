import { pages } from '../../pages/index.js';

describe('Feature: Adding to Cart', () => {
    beforeEach(() => {
        pages('product').visitProduct('01KJ8KSS7MEPX47J3M7MDPBKMB');
        pages('product').setQuantity(2);
        pages('product').clickAddToCart();
    })

    it('Scenario: Add product to the cart', () => {
        pages('product').getCartQuantity().should('have.text', '2');
    });

    it('Scenario: Checking the Cart', () => {
        pages('product').clickCartIcon();
        cy.url().should('include', '/checkout');
        pages('cart').getProductName().should('have.text', 'Pliers');
        pages('cart').getProductQuantity().should('have.text', '2');
        pages('cart').getPrice().should('have.text', '12.01');
        pages('cart').getTotal().should('have.text', '24.02');
    });
});