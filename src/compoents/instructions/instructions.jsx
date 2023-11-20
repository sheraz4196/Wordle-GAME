import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function Instructions({ helpToggle }) {
  return (
    <div className={`${helpToggle} instructions`}>
      <h3 className="instructions__heading">Instructions:</h3>

      <ul className="instructions__list">
        <li>
          You have to guess a word having <strong>5</strong> letters.
        </li>
        <li>
          You have {NUM_OF_GUESSES_ALLOWED} chances to guess the correct word.
        </li>
        <li>
          The <span className="color success"></span> color means the letter is
          correct and also at a correct place.
        </li>
        <li>
          The <span className="color warning"></span> color means the letter is
          correct and is at a wrong place.
        </li>
        <li>
          The <span className="color incorrect"></span> color means the letter
          is incorrect.
        </li>
      </ul>
    </div>
  );
}
export default Instructions;
