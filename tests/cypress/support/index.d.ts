/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    userLogin(): Chainable<any>;
    adminLogin(): Chainable<any>;
    userLogout(): Chainable<any>;
  }
}
