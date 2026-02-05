import React, { useState } from "react";

const quiz = [
  {
    question: "Who is the absolute boss?",
    options: ["Absolutely you", "Me", "My mom"],
    correct: 0,
  },
  {
    question: "Who fights a lot in the relationship?",
    options: ["Always you", "No one", "Me"],
    correct: 2,
  },
  {
    question: "Where do I plan to spend the rest of my life?",
    options: ["Paris", "In your heart", "On Mars"],
    correct: 1,
  },
];

export default function QuizScreen({ onBack }) {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState("");

  const handleAnswer = (index) => {
    if (index === quiz[step].correct) {
      setMessage("Correct 😍 You're so smart!");
      setTimeout(() => {
        setMessage("");
        setStep((prev) => prev + 1);
      }, 1200);
    } else {
      setMessage("Oops 😅 Please try again!");
    }
  };

  if (step >= quiz.length) {
    return (
      <div className="app">
        <div className="card">
          <h1>Quiz Complete 🎉💖</h1>
          <p>You know me way too well 😘</p>
          <button className="final-btn" onClick={onBack}>
            Back 💕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <h1>Quiz for you 🥰</h1>
        <h2>{quiz[step].question}</h2>

        <div className="quiz-options">
          {quiz[step].options.map((opt, i) => (
            <button
              key={i}
              className="quiz-btn"
              onClick={() => handleAnswer(i)}
            >
              {opt}
            </button>
          ))}
        </div>

        {message && <p className="quiz-msg">{message}</p>}

        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}
