import { defineConfig } from 'cypress';

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    specPattern: 'cypress/e2e/tests/*.cy.js',
    supportFile: false
  },
});