import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import TrackGuesses from "../TrackGuesses/TrackGuesses";

import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

console.log(checkGuess("LAURA", answer));

function Game() {
  const [track, setTrack] = React.useState([]);
  console.log("track-afuera", track);

  function handleTrack(guess) {
    setTrack([...track, guess]);
  }

  //si quisiéramos que fuera un array de objetos
  // function handleTrack(guess) {
  //   const nextTrack = { value: guess, id: `${guess}-${Math.random()}` };
  //   setTrack([...track, nextTrack]);
  // }

  return (
    <>
      <TrackGuesses track={track} />
      <GuessInput handleTrack={handleTrack} />
    </>
  );
}

export default Game;
