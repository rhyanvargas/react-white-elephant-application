import React from "react";
import GiftCard from "./GiftCard";

export default function GiftList({
  gifts,
  playerUp,
  handleSelectGift,
  selectedGift,
  isActive,
  isHiddenGift,
}) {
  const { name } = playerUp;

  const displayGiftCard = (gift) => {
    return (
      <GiftCard
        key={gift.id}
        gift={gift}
        handleSelectGift={handleSelectGift}
        selectedGift={selectedGift}
        isActive={isActive}
      />
    );
  };

  const isGiftAvailable = (currPlayer, currGift) =>
    ((currGift.ownerId !== currPlayer.id || currGift.ownerId) &&
      currGift.steals) < 3 && currGift.id !== isHiddenGift.id
      ? true
      : false;

  return (
    <>
      <div className="container">
        <div className="grid-header">
          {name ? (
            <div>
              <h1>Up Now: {name}</h1>
              <h2>Pick Your Gift:</h2>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="grid-container">
          {gifts.map((gift) => {
            if (isGiftAvailable(playerUp, gift)) {
              return displayGiftCard(gift);
            }
          })}
        </div>
      </div>
    </>
  );
}
