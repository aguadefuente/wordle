import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import TrackGuesses from "../TrackGuesses/TrackGuesses";
import { checkGuess } from "../../game-helpers";
import GameEnd from "../GameEnd/GameEnd";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

//SIN RESTART BUTTON
// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [track, setTrack] = React.useState([]);
  console.log("track-afuera", track.length);

  function handleTrack(guess) {
    const nextGuesses = [...track, guess];
    setTrack(nextGuesses);

    // //fin del juego - Joy solution
    // if (guess === answer) {
    //   setGameStatus("won");
    // } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
    //   setGameStatus("lost");
    // }
  }

  //RESTART BUTTON GAME - metemos el answer en un estado
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log({ answer });

  function handleStart() {
    setTrack([]);
    setAnswer(sample(WORDS));
  }

  const buttonStyle = {
    backgroundColor: "#008CBA",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };

  //si quisiéramos que fuera un array de objetos
  // function handleTrack(guess) {
  //   const nextTrack = { value: guess, id: `${guess}-${Math.random()}` };
  //   setTrack([...track, nextTrack]);
  // }

  //FIN DEL JUEGO
  ////////////////////// Mi modo
  // sacar todo este trozo para usar alguna de las soluciones de Joy y modificar el disable del GuessInput component
  //DESDE AQUÍ
  let guessValue;

  track.map((elem) => {
    return (guessValue = elem);
  });

  console.log("guessValue", guessValue);

  let resultGuesses = guessValue && checkGuess(guessValue, answer);
  console.log("resultGuesses", resultGuesses);

  let sonTodosCorrectos =
    resultGuesses &&
    resultGuesses.every((elem) => {
      return elem.status === "correct";
    });
  console.log({ sonTodosCorrectos });

  let maxGuesses = track.length;
  console.log({ maxGuesses });

  let disableInput = Boolean(sonTodosCorrectos || maxGuesses >= 6);
  console.log({ disableInput });
  console.log(maxGuesses > 6);

  return (
    <>
      <button onClick={handleStart} style={buttonStyle}>
        RESTART
      </button>
      {sonTodosCorrectos ? (
        <GameEnd status="happy" numOfGuesses={track.length} />
      ) : maxGuesses === 6 ? (
        <GameEnd status="sad" answer={answer} />
      ) : null}

      <TrackGuesses track={track} answer={answer} />

      <GuessInput
        handleTrack={handleTrack}
        answer={answer}
        disable={disableInput}
      />
    </>
  );
  // HASTA AQUI

  ////////////////////  Joy solution
  //DESCOMENTAR DESDE AQUI
  //running | won | lost
  // const [gameStatus, setGameStatus] = React.useState("running");

  // return (
  //   <>
  //     {gameStatus}
  //     <TrackGuesses track={track} answer={answer} />

  //     <GuessInput
  //       handleTrack={handleTrack}
  //       answer={answer}
  //       gameStatus={gameStatus}
  //     />
  //HASTA AQUI

  //ELEGIR ALGUNA DE LAS OPCIONES PRIMER SOLUCION O SEGUNDA SOLUCION

  //     {/* PRIMER JOY SOLUTION */}
  //     {/* {gameStatus !== "running" && (
  //       <GameOverBanner
  //         gameStatus={gameStatus}
  //         numOfGuesses={track.length}
  //         answer={answer}
  //       />
  //     )} */}

  //     {/* SEGUNDA JOY SOLUTION - con un componente más reutilizable */}
  //     {gameStatus === "won" && <WonBanner numOfGuesses={track.length} />}
  //     {gameStatus === "lost" && <LostBanner answer={answer} />}
  //   </>
  // );
}

export default Game;
