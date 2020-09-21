import React from 'react'

const ShowResults = props => {
  let displayResult

  if (props.playerChoice && props.opponentChoice && props.result) {
    displayResult = (
      <>
        <div className='fight-container'>
          <div class='playerOne'>
            <div class='ui teal pointing below label'>Player One</div>
            <div className='playerChoice'>{props.playerChoice}</div>
          </div>

          <div className='vs'>vs.</div>

          <div class='playerTwo'>
            <div class='ui teal pointing below label'>Player Two</div>
            <div className='playerTwoChoice'>{props.playerTwoChoice}</div>
          </div>
        </div>

        <div id="results" className={'results ' +props.result}>{props.result}</div>
      </>
    )
  }
  return (
    <>
      <div className='ui very padded text container'>{displayResult}</div>
    </>
  )
}
export default ShowResults