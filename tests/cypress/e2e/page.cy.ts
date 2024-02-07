describe('Page', () => {
  it('should navigate between pages', () => {
    cy.visit('/');

    cy.get('h1').contains('Runroom Starter');
  });
});

export {};
