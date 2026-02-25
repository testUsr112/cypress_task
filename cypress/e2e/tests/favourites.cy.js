import { pages } from '../../pages/index.js';

describe('Feature: Favourites', () => {
    before(() => {
        pages('login').visitLoginPage();
        pages('login').enterEmail('test@test.com');
        pages('login').enterPassword('123Aa45@');
        pages('login').clickLoginButton();
    })
    it('Scenario: Add product to Favourites', () => {
        pages('product').visitProduct('01KJ8KSS7MEPX47J3M7MDPBKMB');
        pages('product').clickAddToFavouritesButton();
        pages('product').getToast().should('have.text', 'Product added to your favorites list.');
        pages('product').clickAccountDropdown();
        pages('product').clickMyFavorites();
        cy.url().should('include', '/account/favorites');
    });
});