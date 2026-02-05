import React from "react";

export default function LetterScreen({ onBack }) {
  return (
    <div className="app letter-bg">
      <div className="letter-paper">
        <h1 className="letter-title">A Letter for You 💌</h1>

        <p className="letter-text">
          Thank you for being such a beautiful part of my life.
          <br />
          <br />
          I want to hold your hand through every second of my life, through
          every smile, every tear, and every little moment in between.
          <br />
          <br />
          You are my forever. You are my everything. And I love you more than
          words can ever explain.
          <br />
          <br />
          Please stay just the way you are — because that’s the person I fell in
          love with.
          <br />
          <br />
          Forever yours,
          <br />
          ❤️
        </p>

        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}
