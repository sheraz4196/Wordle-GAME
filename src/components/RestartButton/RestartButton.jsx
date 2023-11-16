import React from "react";

function RestartGme() {
  function handleRestart() {
    document.location.reload();
  }
  return (
    <button onClick={handleRestart} className="restart">
      Restart
    </button>
  );
}
export default RestartGme;
