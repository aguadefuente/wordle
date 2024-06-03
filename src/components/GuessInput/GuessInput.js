import React from "react";

function GuessInput({ handleTrack, disable }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(guessInput);
    handleTrack(guessInput);

    setGuessInput("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={disable}
          required
          // minLength="5"
          // maxLength="5"
          pattern="\w{5,5}"
          title="five letter word" //para que el browser nos diga la regla a seguir
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
