import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
// console.info({ answer });
import GuessInput from "../GuessInput/GuessInput";
import RenderGuess from "../RenderGuess/RenderGuess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import ThemeToggles from "../themes/themes";
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <ThemeToggles />
      <RenderGuess guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
