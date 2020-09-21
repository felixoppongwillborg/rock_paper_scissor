describe('find 3 buttons on site', () => {
  it('page dispalys 3 buttons', () => {
    cy.visit('/')
    cy.get('button#rock').click;
  }) 
  it('player one can click on buttons', () =>{
    cy.get('#playerOne')
    cy.get('button#rock').click;
  })
  it('player two can click on buttons', () => {
    cy.get('#playerTwo')
    cy.get('button#scissor2').click;
  })

  it('when player one chooses a weapon a message should appear', () => {
    cy.get('button#rock').click;
    cy.get('Hey Player One! Look away. It\'s Player two\'s turn now!')
  })
  
})
