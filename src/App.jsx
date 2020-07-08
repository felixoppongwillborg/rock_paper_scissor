import React, { Component } from 'react'

const weaponChoices = ['Rock', 'Paper', 'Scissor']

export class App extends Component {

  
  render() {
    return (
      <>
      <div id="playerOne">
        <h1>Player One</h1>
        <button id="rock">Rock</button>
        <button id="paper">Paper</button>
        <button id="scissor">Scissor</button>
      </div>
      <div id="playerTwo">
        <h1>Player Two</h1>
        <button id="rock2">Rock</button>
        <button id="paper2">Paper</button>
        <button id="scissor2">Scissor</button>
      </div>
      </>
    )
  }
}

export default App


