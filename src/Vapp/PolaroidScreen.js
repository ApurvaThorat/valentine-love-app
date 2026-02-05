import React from "react";
import Hearts from "./Hearts";
import img1 from './Assets/img1.jpeg'
import img2 from './Assets/img2.jpeg'
import img3 from './Assets/img3.jpeg'
import img4 from './Assets/img4.jpeg'
import img5 from './Assets/img5.jpeg'
import img6 from './Assets/img6.jpeg'
const photos = [
  { img: img1, caption: "Sweet hello" },
  { img: img2, caption: "True smile" },
  { img: img3, caption: "Perfect day" },
  { img: img4, caption: "Only us" },
  { img: img5, caption: "My home" },
  { img: img6, caption: "Forever us" },
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
