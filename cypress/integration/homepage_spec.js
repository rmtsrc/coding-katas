describe('Homepage', () => {
  it('renders the search page correctly', () => {
    cy.visit('http://localhost:3000');
    cy.document().toMatchImageSnapshot();
  });
});
