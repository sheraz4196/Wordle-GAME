import React from "react";
import Instructions from "../instructions/instructions";
function Menu() {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [areInstructionsOpen, setAreInstructionsOpen] = React.useState(false);
  const openIconRef = React.useRef(null);
  const closeIconRef = React.useRef(null);
  const audioRef = React.useRef(null);
  function toggleSound() {
    setIsMuted(!isMuted);
    const audio = audioRef.current;
    if (audio) {
      if (!isMuted) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
  function toggleHelp() {
    if (!areInstructionsOpen) {
      setAreInstructionsOpen(true);
    } else {
      setAreInstructionsOpen(false);
    }
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (openIconRef.current && closeIconRef.current) {
      openIconRef.current.classList.toggle("icon-hidden");
      closeIconRef.current.classList.toggle("icon-hidden");
    }
    if (!isMenuOpen && areInstructionsOpen) {
      setAreInstructionsOpen(false);
    }
  }

  return (
    <div>
      <button className="menu-icon-open" onClick={toggleMenu}>
        <span ref={openIconRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="open-menu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </span>
        <span className="icon-hidden" ref={closeIconRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="close-menu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </button>
      <div className={isMenuOpen ? "menu menu__open" : "menu menu__close"}>
        <ul className="navigation">
          <li>
            <button onClick={toggleSound} className="sound-toggles">
              <span className={isMuted ? "btn-hidden" : ""}>
                <span>
                  {/* Your SVG code for mute */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#555" }}
                  >
                    <path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path>
                  </svg>
                  <p>Mute</p>
                </span>
              </span>
              <span className={isMuted ? "" : "btn-hidden"}>
                <span>
                  {/* Your SVG code for music */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "#555" }}
                  >
                    <path d="m19.684 5.821-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.953 3.953 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V4.428L19 7.7v6.856A3.962 3.962 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879zM6 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm11 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                  </svg>
                  <p>Music</p>
                </span>
              </span>
            </button>
          </li>
          <li>
            <button onClick={toggleHelp}>
              <span>
                {/* Your SVG code for help */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#555" }}
                >
                  <path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path>
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                </svg>
              </span>
              <p>Help</p>
            </button>
            <Instructions
              helpToggle={areInstructionsOpen ? "instructions-open" : ""}
            />
          </li>
        </ul>
      </div>
      <audio ref={audioRef} src="../../../public/bg-music.mp3" loop />
    </div>
  );
}

export default Menu;
