import React from "react";

export default function GiftCard({ title, gif, onClick, gifFront }) {
  return (
    <div className="gift-card" onClick={onClick}>
      <div className="gift-inner">
        <div className="gift-front">
          <img src={gifFront} alt={title} style={{ height: "90px" }} />
        </div>

        <div className="gift-back">
          <img src={gif} alt={title} style={{ height: "90px" }} />
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
