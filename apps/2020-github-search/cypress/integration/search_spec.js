describe('Search', () => {
  it('searches for a known user', () => {
    cy.visit('http://localhost:3000');

    cy.get('#username').type('gaearon');
    cy.get('input[type="submit"]').click();

    cy.document().toMatchImageSnapshot();
  });

  it('displays information about a users activity', () => {
    cy.visit('http://localhost:3000/?username=gaearon');

    cy.contains('Dan Abramov').click();

    cy.document().toMatchImageSnapshot();
  });
});
