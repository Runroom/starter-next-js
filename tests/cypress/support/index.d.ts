/// <reference types="cypress" />

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  interface Chainable<Subject = any> {
    userLogin(): Chainable<any>;
    adminLogin(): Chainable<any>;
    userLogout(): Chainable<any>;
  }
}
