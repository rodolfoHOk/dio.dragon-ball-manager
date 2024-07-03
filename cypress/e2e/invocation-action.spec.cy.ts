describe('shenlong invocation test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show toast if user do not have all balls', () => {
    cy.get('[data-testId="invocation-card"]').should('exist');
    cy.get('[data-testId="invoke-button"]').click();
    cy.get('[data-testId="toast-message"]').should(
      'contain.text',
      'Você não tem todas as esferas para invocar o Shenlong'
    );
    cy.get('[data-testId="toast-back-button"]').click();
    cy.get('[data-testId="shenlong-image"]').should('not.exist');
  });
});
