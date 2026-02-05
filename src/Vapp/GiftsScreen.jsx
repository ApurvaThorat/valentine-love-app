import React, { useState } from "react";
import GiftCard from "./GiftCard";
import Hearts from "./Hearts";
import QuizScreen from "./QuizScreen";
import LetterScreen from "./LetterScreen";
import PolaroidScreen from "./PolaroidScreen";
import ForeverScreen from "./ForeverScreen";
import card1 from "./Assets/card1.GIF";
import card2 from "./Assets/card2.GIF";
import card3 from "./Assets/card3.GIF";
import Fcard1 from "./Assets/Card1.1.GIF";
import Fcard2 from "./Assets/card2.2.GIF";
import Fcard3 from "./Assets/card3.3.GIF";

const giftData = [
  { title: "Gift 1 🎁", gif: card1, gifFront: Fcard1 },
  { title: "Gift 2 💌", gif: card2, gifFront: Fcard2 },
  { title: "Gift 3 🥰", gif: card3, gifFront: Fcard3 },
];

export default function GiftsScreen({ onRestart }) {
  const [activeScreen, setActiveScreen] = useState("GIFTS");
  const [showHearts, setShowHearts] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (activeScreen === "QUIZ") {
    return <QuizScreen onBack={() => setActiveScreen("GIFTS")} />;
  }

  if (activeScreen === "LETTER") {
    return <LetterScreen onBack={() => setActiveScreen("GIFTS")} />;
  }

  if (activeScreen === "POLAROID") {
    return <PolaroidScreen onBack={() => setActiveScreen("GIFTS")} />;
  }

  if (activeScreen === "FOREVER") {
    return <ForeverScreen onRestart={onRestart} />;
  }

  return (
    <div className="app">
      {isTransitioning && <div className="pink-transition" />}

      {showHearts && <Hearts />}

      <div className="card">
        <h1>Something for you 💝</h1>

        <div className="gift-cards">
          {giftData.map((gift, i) => (
            <GiftCard
              key={i}
              {...gift}
              onClick={() => {
                if (i === 0) setActiveScreen("QUIZ");
                if (i === 1) setActiveScreen("LETTER");
                if (i === 2) setActiveScreen("POLAROID");
              }}
            />
          ))}
        </div>

        <button
          className="final-btn"
          onClick={() => {
            setIsTransitioning(true);
            setTimeout(() => {
              setActiveScreen("FOREVER");
              setIsTransitioning(false);
            }, 700);
          }}
        >
          Finally 💕
        </button>
      </div>
    </div>
  );
}
