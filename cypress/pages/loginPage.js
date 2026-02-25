export class LoginPage {

    visitLoginPage() {
        cy.visit('/auth/login');
    }

    enterEmail(email) {
        cy.get('[data-test="email"]').clear().type(String(email));
    }

    enterPassword(password) {
        cy.get('[data-test="password"]').clear().type(String(password));
    }

    async clickLoginButton() {
        cy.get('[data-test="login-submit"]').click();
    }
}