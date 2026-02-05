import React from "react";
import vid from "./Assets/valentines.MOV"
export default function ForeverScreen({ onRestart }) {
  return (
    <div className="app">
      <div className="card forever-card">
        <h1>You are my forever ❤️</h1>

        <div className="video-box">
          <video controls>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="forever-text">
          I love you more than words can say.
          <br />
          <br />
          No matter where life takes us, my heart will always choose you.
          <br />
          <br />
          Thank you for being my peace, my smile, my love — this Valentine’s Day
          and every day after.
          <br />
          <br />
          I am grateful to call you mine.
          <br />I love you.
        </p>

        <button className="love-btn" onClick={onRestart}>
          I love you ❤️
        </button>
      </div>
    </div>
  );
}
