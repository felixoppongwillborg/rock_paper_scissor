import React from "react";

const Form = props => {
  return (
    <form>
      <label htmlFor="playerOne">Player One</label>
      <input 
      type="text"
      required
      name="playerOne"
      id="playerOne"
      />
      <label htmlFor="playerTwo">Player Two</label>
      <input 
      type="text"
      required
      name="playerTwo"
      id="playerTwo"
      />
      <button id="startGame">Start new game</button>

    </form>
  );
};

export default Form;