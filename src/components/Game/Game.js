import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import TrackGuesses from "../TrackGuesses/TrackGuesses";
import GuessSlot from "../GuessSlot/GuessSlot";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");

  const [track, setTrack] = React.useState([]);
  // console.log("track", track);

  function handleTrack(next) {
    const nextTrack = [...track, next];

    setTrack(nextTrack);
    console.log("track", track);
  }

  return (
    <>
      <TrackGuesses track={track} />
      <GuessInput
        guess={guessInput}
        handleChange={setGuessInput}
        track={track}
        handleTrack={handleTrack}
      />
    </>
  );
}

export default Game;
