/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'tests/cypress/e2e',
    supportFile: 'tests/cypress/support/e2e.ts',
    fixturesFolder: 'tests/cypress/fixtures',
    screenshotsFolder: 'tests/cypress/screenshots',
    experimentalRunAllSpecs: true
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
});
