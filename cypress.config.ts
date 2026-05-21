import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        logMessage(message){
          console.log(message);
          return null;
        }
      })
    },
    testIsolation: false
  },
  allowCypressEnv: true,
  chromeWebSecurity: true,
});
