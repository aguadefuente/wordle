import React from "react";

function GuessInput({ guess, handleChange, track, handleTrack }) {
  //const [guessInput, setGuessInput] = React.useState("");
  //console.log(guessInput);

  // const [track, setTrack] = React.useState([]);
  // // console.log("track", track);

  // function handleTrack(next) {
  //   const nextTrack = [...track, next];

  //   setTrack(nextTrack);
  //   console.log("track", track);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const guessAnswer = { guess, id: Date.now() };
    console.log(guessAnswer);
    handleChange("");
    handleTrack(guessAnswer);
  }
  console.log("track2", track);
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: (five letter word)</label>
        <input
          // minLength="5"
          // maxLength="5"
          pattern="\w{5,5}"
          id="guess-input"
          type="text"
          value={guess}
          // onChange={(event) => {
          //   setGuessInput(event.target.value.toUpperCase());
          // }}
          onChange={(event) => {
            handleChange(event.target.value.toUpperCase());
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
