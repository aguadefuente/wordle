import React from "react";
import GuessSlot from "../GuessSlot/GuessSlot";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

//ej) range(5) [0,1,2,3,4]

function TrackGuesses({ track, answer }) {

  // track.forEach((elem) => {
  //     checkGuess(elem, answer)
  //     console.log("consoleg prueba", checkGuess(elem, answer))
  // })

  return (
    <>
      {/* EJERCICIO 3 */}
      {/* usando range utility */}
      <div className="guess-results">
        {/* renderizará 6 veces el componente GuessSlot. Serían
        6 rows */}
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return <GuessSlot key={num} value={track[num]} answer={answer}/>;
        })}

        {/* <div className="guess-results">
        {track.map((word, index) => {
          return <GuessSlot key={index} value={word} />;
        })} */}

        {/* EJERCICIO 2 */}
        {/* <div className="guess-results">
        {track.map((word, index) => {
          return <GuessSlot key={index} value={word} />;
        })} */}
        {/* Nota: hemos usamos el index del map como key de nuestro paragraph
        ya que dada las reglas del juego no van a cambiar
        las palabras de orden en nuestro array, ni
        se pueden eliminar */}

        {/*usando track como array de objetos*/}
        {/* {track.map(({ id, value }) => {
          return (
            <p key={id} className="guess">
              {value}
            </p>
          );
        })} */}
      </div>

    
    </>
  );
}

export default TrackGuesses;
