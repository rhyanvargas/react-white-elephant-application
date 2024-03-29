import React, { useContext } from "react";
import { GameContext } from ".";

export default function GiftCard({ gift }) {
  const { gameState, dispatch } = useContext(GameContext);
  const { selectedGift } = gameState;
  const handleGiftClick = (e) => {
    const selectedGiftId = gift.id;
    dispatch({ type: "SELECT_GIFT", payload: { selectedGiftId } });
  };



  return (
    <div
      onClick={handleGiftClick}
      name="card active"
      className={
        selectedGift && selectedGift.id === gift.id ? "card active" : "card"
      }
    >
      <div className="card-image-wrapper">
        <img className="card-image" src={!gift.currentHolder ? gift.giftWrap : gift.image} alt={gift.name} />
      </div>
      <h1 className="card-title">{!gift.currentHolder ? gift.id : gift.name}</h1>
      <p className="card-info">
        <small>current: {gift.currentHolder} | </small>
        <small>steals: {gift.steals}</small>
      </p>
    </div>
  );
}
