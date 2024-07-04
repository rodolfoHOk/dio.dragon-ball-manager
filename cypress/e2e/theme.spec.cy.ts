describe('theme e2e test', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should has light theme', () => {
    cy.get('[data-testid="main-layout"]').should('have.class', 'light');

    cy.get('[data-testid="filter-trigger"]').click();
    cy.get('[data-testid="ball-filter-select-content"]').should(
      'have.class',
      'light'
    );
    cy.get('[data-testid="filter-option-0"]')
      .contains('Todas as esferas')
      .click();

    cy.get('[data-testid="card-button-3"]').click();
    cy.get('[data-testid="ball-form-modal"]').should('have.class', 'light');
    cy.get('[data-testid="back-button-3"]').click();
  });

  it('should change to dark theme', () => {
    cy.get('#dark-mode-switch').click();

    cy.get('[data-testid="main-layout"]').should('have.class', 'dark');

    cy.get('[data-testid="filter-trigger"]').click();
    cy.get('[data-testid="ball-filter-select-content"]').should(
      'have.class',
      'dark'
    );
    cy.get('[data-testid="filter-option-0"]')
      .contains('Todas as esferas')
      .click();

    cy.get('[data-testid="card-button-3"]').click();
    cy.get('[data-testid="ball-form-modal"]').should('have.class', 'dark');
    cy.get('[data-testid="back-button-3"]').click();
  });
});
