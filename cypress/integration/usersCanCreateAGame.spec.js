describe('two players can enter their name and start a game', () => {
  it('players can enter their name', () => {
    cy.visit('/')
    cy.get('input#playerOne').type('PlayerOne');
    cy.get('input#playerTwo').type('PlayerTwo'); 
    cy.get('button#startGame').click();
  }) 
})
