import React from "react";
import { checkGuess } from "../../game-helpers";

function GuessInput({ handleTrack }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ guessInput });
    handleTrack(guessInput);
    setGuessInput("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: (five letter word)</label>
        <input
          required
          // minLength="5"
          // maxLength="5"
          pattern="\w{5,5}"
          id="guess-input"
          type="text"
          value={guessInput}
          onChange={(event) => {
            setGuessInput(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
