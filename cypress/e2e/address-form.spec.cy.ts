describe('address form page e2e test', () => {
  before(() => {
    cy.visit('http://localhost:3000/cep');
  });

  it('should request cep address and fill form fields', () => {
    addressRequestIntercept();
    cy.get('#cep').type('01001000');
    cy.wait('@resAddress').then(() => {});
    cy.get('#bairro').should('have.value', 'Sé');
    cy.get('#logradouro').should('have.value', 'Praça da Sé');
  });
});

const addressRequestIntercept = () => {
  cy.intercept('GET', 'https://viacep.com.br/ws/01001000/json/', {
    fixture: 'address.json',
  }).as('resAddress');
};
