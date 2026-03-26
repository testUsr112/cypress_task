import { defineConfig } from 'cypress';

module.exports = defineConfig({
  allowCypressEnv: false,

  //reporter: 'cypress-multi-reporters',
  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    specPattern: 'cypress/e2e/tests/*.cy.js',
    supportFile: false,
  },
});