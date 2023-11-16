import React from "react";
import RestartGme from "../RestartButton/RestartButton";
function GameOverBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
        <RestartGme />
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <RestartGme />
      </div>
    );
  }
}
export default GameOverBanner;
