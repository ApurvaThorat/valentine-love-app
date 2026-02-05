import React from "react";
import Hearts from "./Hearts";

const photos = [
  { img: "/p1.jpg", caption: "Sweet hello" },
  { img: "/p2.jpg", caption: "True smile" },
  { img: "/p3.jpg", caption: "Perfect day" },
  { img: "/p4.jpg", caption: "Only us" },
  { img: "/p5.jpg", caption: "My home" },
  { img: "/p6.jpg", caption: "Forever us" },
];

export default function PolaroidScreen({ onBack }) {
  return (
    <div className="app">
      <Hearts />

      <div className="card polaroid-card">
        <h1>Look at this cutie 😭</h1>

        <div className="polaroid-grid">
          {photos.map((p, i) => (
            <div key={i} className="polaroid">
              <img src={p.img} alt={p.caption} />
              <p>{p.caption}</p>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}
