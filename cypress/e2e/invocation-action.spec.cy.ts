describe('shenlong invocation test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should show toast if user do not have all balls', () => {
    cy.get('[data-testid="invocation-card"]').should('exist');
    cy.get('[data-testid="invoke-button"]').click();
    cy.get('[data-testid="toast-message"]').should(
      'contain.text',
      'Você não tem todas as esferas para invocar o Shenlong'
    );
    cy.get('[data-testid="toast-back-button"]').click();
    cy.get('[data-testid="shenlong-image"]').should('not.exist');
  });
});
