import React from "react";

function GameEnd({ status }) {
  return (
    <>
      <div className={`${status} banner`}>
        {status === "happy" ? (
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        ) : (
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        )}
      </div>
    </>
  );
}

export default GameEnd;
