export const rpsMatch = (playerOneChoice, playerTwoChoice) => {

  let result = "";
  

  
    if (PlayerOneChoice === playerTwoChoice) {
      return "It's a draw"
    }
  
  else if 
    ((playerOneChoice === "Rock" && playerTwoChoice === "Scissors2") ||
    (playerOneChoice === "Paper" && playerTwoChoice === "Rock2") ||
    (playerOneChoice === "Scissors" && playerTwoChoice === "Paper2")) {
      return "Player One wins!"
    }
    else { return "Player Two Wins!" }

  };
