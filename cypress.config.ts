import { defineConfig } from "cypress";
import fs from 'fs';

export default defineConfig({
  e2e: {
    specPattern: ['cypress/tests/**/*.cy.ts', 'cypress/interview/**/*.cy.ts'],
    supportFile: 'cypress/support/e2e.ts',
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        logMessage(message){
          console.log(message);
          return null;
        }
      }),
      on('task', {
        getUser(){
          return {
            id: 1,
            name: 'Sachin',
            role: 'Admin'
          };
        }
      }),
      on('task', {
        readFileData(path){
          return fs.readFileSync(path, 'utf8')
        }
      }),
      on('task', {
        writeFileData(data: { path: string; content: string }) {
          fs.writeFileSync(data.path, data.content, 'utf8');
          return null;
        }
      });
    },
    testIsolation: false
  },
  allowCypressEnv: true,
  chromeWebSecurity: true,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  viewportWidth: 1500,
  viewportHeight: 1000,
  video: false,
  numTestsKeptInMemory: 0,
  experimentalInteractiveRunEvents: true,
    retries: {
    runMode: 0,
    openMode: 0
  },
  downloadsFolder: './cypress/downloads',
  screenshotOnRunFailure: false,
  screenshotsFolder: "./reports/screenshots",
});
