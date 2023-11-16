import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <form onSubmit={handleSubmit} className="tentativeGuess-input-wrapper">
      <label htmlFor="tentativeGuess-input">Enter Your Guess</label>
      <input
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="It should be 5 letter word."
        id="tentativeGuess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
export default GuessInput;
