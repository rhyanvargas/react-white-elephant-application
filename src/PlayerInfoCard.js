import React from "react";

export default function PlayerInfoCard({ playerUp }) {
  const { name, image, selectedGiftName } = playerUp;
  return (
    <div className="card">
      <h1 className="card-title">Player Info: {name}</h1>
      <div className="card-image-wrapper">
        <img className="card-image" src={image} alt={name} />
      </div>
      <p className="card-info">
        <small>current gift: {selectedGiftName}</small>
      </p>
    </div>
  );
}
