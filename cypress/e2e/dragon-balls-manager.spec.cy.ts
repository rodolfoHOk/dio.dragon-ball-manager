// Important: do not change the test order
context('dragon balls manager page e2e test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should filter my balls', () => {
    cy.get('[data-testid="filter-trigger"]').click();
    cy.get('[data-testid="filter-option-1"]')
      .contains('Minhas esferas')
      .click();

    cy.get('[data-testid="card"]').should('have.length', 5);
  });

  it('should filter not founded balls', () => {
    cy.get('[data-testid="filter-trigger"]').click();
    cy.get('[data-testid="filter-option-2"]').contains('Não tenho').click();

    cy.get('[data-testid="card"]').should('have.length', 2);
  });

  it('should no filter balls if all is selected', () => {
    cy.get('[data-testid="filter-trigger"]').click();
    cy.get('[data-testid="filter-option-0"]')
      .contains('Todas as esferas')
      .click();

    cy.get('[data-testid="card"]').should('have.length', 7);
  });

  it('should show invalid ball code toast', () => {
    cy.get('[data-testid="card-button-3"]').click();
    cy.get('[data-testid="ball-code-input-3"]').type('any-invalid-code');
    cy.get('[data-testid="validate-button-3"]').click();

    cy.get('[data-testid="toast-message"]').should(
      'contain.text',
      'Código da esfera do dragão não confere'
    );
    cy.get('[data-testid="toast-back-button"]').click();
  });

  it('should not invoke if user does not have 7 dragon balls', () => {
    cy.get('[data-testid="invocation-card"]').should('exist');
    cy.get('[data-testid="invoke-button"]').click();

    cy.get('[data-testid="toast-message"]').should(
      'contain.text',
      'Você não tem todas as esferas para invocar o Shenlong'
    );
    cy.get('[data-testid="toast-back-button"]').click();
  });

  it('should invoke if user has 7 dragon balls', () => {
    cy.get('[data-testid="card-button-3"]').click();
    cy.get('[data-testid="ball-code-input-3"]').type('esfera-3-valida');
    cy.get('[data-testid="validate-button-3"]').click();

    cy.get('[data-testid="card-button-5"]').click();
    cy.get('[data-testid="ball-code-input-5"]').type('esfera-5-valida');
    cy.get('[data-testid="validate-button-5"]').click();

    cy.get('[data-testid="invoke-button"]').click();

    cy.get('[data-testid="shenlong-image"]').should('exist');
  });
});
