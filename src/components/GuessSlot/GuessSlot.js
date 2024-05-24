import React from "react";
import { range } from "../../utils";

function GuessSlot({ value }) {
  return (
    <>
      {/* con range utility 
      hará 5 columnas, y si hay palabras en el array tendrá
      por contenido la misma, sino se verá vacío*/}
      <p className="guess">
        {range(5).map((num) => {
          return (
            <span className="cell" key={num}>
              {value ? value[num] : undefined}
              {/* Duda!! porqué undefined y no "" (empty string) */}
            </span>
          );
        })}
      </p>

      {/* <p className="guess">
        {value.split("").map((letter, index) => {
          return (
            <span className="cell" key={index}>
              {letter}
            </span>
          );
        })}
      </p> */}
    </>
  );
}

export default GuessSlot;
