import React from "react";

export default function Hearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 25 }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          💕
        </span>
      ))}
    </div>
  );
}
