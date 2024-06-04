import React from "react";

function GameEnd({ status, numOfGuesses, answer }) {
  return (
    <>
      <div className={`${status} banner`}>
        {status === "happy" ? (
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
            </strong>
            .
          </p>
        ) : (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
    </>
  );
}

export default GameEnd;
