describe('CEP e2e test', () => {
  before(() => {
    cy.visit('http://localhost:3000/cep');
  });

  it('should return cep', () => {
    addressRequest();
    cy.get('#cep').type('01001000');
    cy.wait('@resAddress').then(() => {});
    cy.get('#bairro').should('have.value', 'Sé');
    cy.get('#logradouro').should('have.value', 'Praça da Sé');
  });
});

const addressRequest = () => {
  cy.intercept('GET', 'https://viacep.com.br/ws/01001000/json/', {
    fixture: 'address.json',
  }).as('resAddress');
};
