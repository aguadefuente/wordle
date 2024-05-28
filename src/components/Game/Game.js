import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import TrackGuesses from "../TrackGuesses/TrackGuesses";
import { checkGuess } from "../../game-helpers";
import GameEnd from "../GameEnd/GameEnd";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);


function Game() {
  const [track, setTrack] = React.useState([]);
  console.log("track-afuera", track);

  const [status, setStatus] = React.useState({status: "", try: 0})
  
  let guessValue

  track.map((elem) => {
    return guessValue = elem
  })

  console.log('guessValue', guessValue)

  let resultGuesses = guessValue && checkGuess(guessValue, answer) 
  console.log("resultGuesses", resultGuesses)

  let sonTodosCorrectos = resultGuesses && resultGuesses.every((elem) => {
   return elem.status === "correct"
  })
  console.log({sonTodosCorrectos})

  
  track.forEach((elem) => {
      checkGuess(elem, answer)
      console.log("consoleg finalizando", checkGuess(elem, answer))
  })

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
      {/* <GameEnd status={"happy"}/> */}
      <TrackGuesses track={track} answer={answer}/>
      <GuessInput handleTrack={handleTrack} answer={answer}/>
    </>
  );
}

export default Game;
