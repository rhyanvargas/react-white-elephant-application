import React from "react";

export default function GiftCard({ gift, handleSelectGift, isActive }) {
  const handleClick = (e) => {
    handleSelectGift(gift.id);
  };
  return (
    <section>
      <div onClick={handleClick} className={isActive ? "card active" : "card"}>
        <div className="card-image-wrapper">
          <img className="card-image" src={gift.image} alt={gift.name} />
        </div>
        <h1 className="card-title">{gift.name}</h1>
        <p className="card-info">
          <small>current: {gift.currentHolder} | </small>
          <small>steals: {gift.steals}</small>
        </p>
      </div>
    </section>
  );
}
