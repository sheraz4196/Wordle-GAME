import React from "react";
import Menu from "../Menu/Menu";
function Header() {
  return (
    <header className="header">
      <div className="game-info">
        <img
          src="./public/favicon.09ab7678.png"
          alt="Game Icon"
          className="game-icon"
        />
        <h1>Word Game</h1>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
