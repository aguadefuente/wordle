import React from "react";
import { range } from "../../utils";

function GuessSlot({ value }) {
  return (
    <>
      {/* con range utility */}
      <p className="guess">
        {range(5).map((num) => {
          return (
            <span className="cell" key={num}>
              {value ? value[num] : undefined}
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
