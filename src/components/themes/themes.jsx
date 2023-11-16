import React from "react";

function ThemeToggles() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedValue = localStorage.getItem("is-dark-mode");
    return JSON.parse(storedValue) || false;
  });

  React.useEffect(() => {
    applyTheme(isDarkMode ? "dark" : "bright");
    localStorage.setItem("is-dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function applyTheme(theme) {
    const body = document.querySelector("body");

    if (theme === "bright") {
      requestAnimationFrame(() => {
        body.classList.add("bright");
        body.classList.remove("dark");
        body.style.background = "#fff";
        const themeButton = document.querySelector(".theme");
        if (themeButton) {
          themeButton.textContent = "Bright Mode";
        }
        const h1Element = document.querySelector("h1");
        if (h1Element) {
          h1Element.style.color = "var(--color-gray-300)";
        }
        const labelElement = document.querySelector("label");
        if (labelElement) {
          labelElement.style.color = "var(--color-gray-300)";
        }
      });
    } else {
      requestAnimationFrame(() => {
        body.classList.add("dark");
        body.classList.remove("bright");
        body.style.background = "#111";
        const themeButton = document.querySelector(".theme");
        if (themeButton) {
          themeButton.textContent = "Dark Mode";
        }
        const h1Element = document.querySelector("h1");
        if (h1Element) {
          h1Element.style.color = "#fff";
        }
        const labelElement = document.querySelector("label");
        if (labelElement) {
          labelElement.style.color = "#f7f7f7";
        }
      });
    }
  }

  const clickHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={clickHandler} className="theme">
      {isDarkMode ? "Dark Mode" : "Bright Mode"}
    </button>
  );
}

export default ThemeToggles;
