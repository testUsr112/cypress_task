import { pages } from '../../pages/index.js';

describe('Feature: Search', () => {
    it('Scenario: Search by full or partial name', () => {
        pages('home').visitHomePage();
        pages('home').enterSearchText('Claw');
        pages('home').clickSearchButton();
        pages('home').getProductNames().each(($el) => {
            expect($el.text().toLowerCase()).to.include('claw')
        })
    });
});