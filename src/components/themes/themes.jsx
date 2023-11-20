import React, { useState, useEffect } from "react";

function ThemeToggles() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedValue = localStorage.getItem("is-dark-mode");
    return JSON.parse(storedValue) || false;
  });

  useEffect(() => {
    applyTheme(isDarkMode ? "dark" : "bright");
    localStorage.setItem("is-dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("bright", theme === "bright");
    const themeButton = document.querySelector(".theme");
    const h1Element = document.querySelector("h1");
    const labelElement = document.querySelector("label");
    const footerElement = document.querySelector("footer");

    if (themeButton) {
      themeButton.textContent = theme === "dark" ? "Dark Mode" : "Bright Mode";
    }
    if (h1Element) {
      h1Element.style.color =
        theme === "dark" ? "#fff" : "var(--color-gray-300)";
    }
    if (labelElement) {
      labelElement.style.color =
        theme === "dark" ? "#f7f7f7" : "var(--color-gray-300)";
    }
    if (footerElement) {
      footerElement.style.color = theme === "dark" ? "#f1f1f1" : "#121212";
    }
    document.body.style.background = theme === "dark" ? "#111" : "#fff";
  }

  const clickHandler = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={clickHandler} className="theme">
      {isDarkMode ? "Dark Mode" : "Bright Mode"}
    </button>
  );
}

export default ThemeToggles;
