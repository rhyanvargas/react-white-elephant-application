import React from "react";

export default function PlayerInfoCard({ playerUp }) {
  const { name, image, selectedGiftName } = playerUp;
  return (
    <div className="card">
      <h1 className="card-title">Player Info: {name}</h1>
      <div className="card-image-wrapper">
        <img class="card-image" src={image} />
      </div>
      <p className="card-info">
        <small>current gift: {selectedGiftName}</small>
      </p>
    </div>
  );
}
