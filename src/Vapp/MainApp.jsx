import React, { useState } from "react";
import "./App.css";
import first from "./Assets/First.GIF";
import second from "./Assets/Second.GIF";
import angry from "./Assets/Angry.GIF";
import cat from "./Assets/Cat.GIF";
import wish from "./Assets/wish.GIF";
import GiftsScreen from "./GiftsScreen";

function Apps() {
  const [step, setStep] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [moveCount, setMoveCount] = useState(0);

  const [accepted, setAccepted] = useState(false);
  const [screen, setScreen] = useState("VALENTINE");

  const resetApp = () => {
    setScreen("VALENTINE");
    setAccepted(false);
    setStep(0);
    setYesScale(1);
    setMoveCount(0);
  };
  // 🔁 MAIN SCREEN SWITCH
  if (screen === "GIFTS") {
    return <GiftsScreen onRestart={() => setScreen("VALENTINE")} />;
  }
  const texts = [
    "Will you be mine 🥺?",
    "Think again 😏",
    "Are you sure? 🤨",
    "See this? 👀",
  ];

  const gifs = [first, second, angry, cat];

  const handleNoMove = () => {
    setYesScale((prev) => prev + 0.04);

    setMoveCount((prev) => {
      const next = prev + 1;
      if (next % 20 === 0) {
        setStep((s) => Math.min(s + 1, texts.length - 1));
      }
      return next;
    });
  };

  if (accepted) {
    return (
      <div className="app">
        <button className="restart-btn" onClick={resetApp}>
          🔁 Restart
        </button>

        <div className="card">
          <img src={wish} alt="love" height="160" />
          <h1>Happy Valentine’s Day Baby! 💕</h1>
          <h4>
            Every second with you is a celebration. You are the spark that makes
            my world brighter! 💍
          </h4>
          <button className="gift-btn" onClick={() => setScreen("GIFTS")}>
            See my Gifts 🎁
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <img src={gifs[step]} alt="cute gif" height="160" />
        <h1>{texts[step]}</h1>
        <h4>
          Life is an incredible journey and I want to spend every second of it
          with you 🐿️😩
        </h4>

        <div className="buttons">
          <button
            className="yes-btn"
            style={{ transform: `scale(${yesScale})` }}
            onClick={() => setAccepted(true)}
          >
            Yes 💖
          </button>

          {yesScale < 3 && (
            <button className="no-btn" onMouseMove={handleNoMove}>
              No 😤
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Apps;
