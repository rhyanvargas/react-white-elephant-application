import React from "react";

export default function GiftCard({ gift }) {
  return (
    <section>
      <div className="card">
        <div className="card-image-wrapper">
          <img className="card-image" src={gift.image} />
        </div>
        <h1 className="card-title">{gift.name}</h1>
        <p className="card-info">
          <small>current: {gift.currentOwner} | </small>
          <small>steals: {gift.steals}</small>
        </p>
      </div>
    </section>
  );
}
