import React, { Component } from "react";
import ShowResults from './components/ShowResult'
import { rpsMatch } from "./helpers/RpsHelper";
import './App.css'

export class App extends Component {
  state = {
    playerOneChoice: '',
    playerTwoChoice: '',
    result: ''
    
  }

  playRound (event) {
    let playerOne = event.target.value
    let playerTwo = event.target.value
    let results = rpsMatch(playerOne, playerTwo)
  debugger
  this.setState({
    playerOneChoice: playerOne,
    playerTwoChoice: playerTwo,
    result: results
  })
  }

  onButtonClickHandler = () => {
    window.alert("Hey Player One! Look away. It's Player two's turn now!");
  };



  render() {
    let renderResults

    if (this.state.result !== '') {
      renderResults = (
        <>
          <ShowResults
            playerOneChoice={this.state.playerOneChoice}
            playerTwoChoice={this.state.playerTwoChoice}
            result={this.state.result}
          />
        </>
         )
      }
    return (
      <>
      {renderResults}
        <div id="playerOne">
          <h1>Player One</h1>
          <button onClick={event => this.playRound(event)} id="rock" value="Rock">
            Rock
          </button>
          <button onClick={event => this.playRound(event)} id="paper" value="Paper">
            Paper
          </button>
          <button onClick={event => this.playRound(event)} id="scissor" value="Scissor">
            Scissor
          </button>
        </div>

        <div id="playerTwo">
          <h1>Player Two</h1>
          <button onClick={event => this.playRound(event)} id="rock2" value="Rock2">
            Rock
          </button>
          <button onClick={event => this.playRound(event)} id="paper2" value="Paper2">
            Paper
          </button>
          <button onClick={event => this.playRound(event)} id="scissor2" value="Scissor2">
            Scissor
          </button>
        </div>
      </>
    );
  }
}

export default App;
