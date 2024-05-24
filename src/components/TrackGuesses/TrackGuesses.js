import React from "react";
import GuessSlot from "../GuessSlot/GuessSlot";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

//ej) range(5) [0,1,2,3,4]

function TrackGuesses({ track }) {
  return (
    <>
      {/* EJERCICIO 3 */}
      {/* usando range utility */}
      <div className="guess-results">
        {/* renderizará 6 veces el componente GuessSlot. Serían
        6 rows */}
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return <GuessSlot key={num} value={track[num]} />;
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
        {/* hemos usamos el index del map como key de nuestro paragraph
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

      {/* jugando: agregando span para cada letra */}
      {/* <div className="guess-results">
        {track.map(({ id, guess }) => {
          return (
            <p key={id} className="guess">
              {guess.split("").map((element) => {
                return <span className="cell">{element}</span>;
              })}
            </p>
          );
        })}
      </div> */}
    </>
  );
}

export default TrackGuesses;
