import React from "react";

function TrackGuesses({ track }) {
  return (
    <>
      <div className="guess-results">
        {track.map(({ id, guess }) => {
          return (
            <p key={id} className="guess">
              {guess.split("").map((element) => {
                return <span className="cell">{element}</span>;
              })}
            </p>
          );
        })}
        {/* <p className="guess">FIRST</p>
      <p className="guess">GUESS</p> */}
      </div>
    </>
  );
}

export default TrackGuesses;
