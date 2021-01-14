import React from "react";
import GiftCard from "./GiftCard";

export default function GiftList({
  gifts,
  playerUp,
  handleSelectGift,
  selectedGift,
  isActive,
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

  // const selectedGiftHeader = selectedGift.name && <h1>{selectedGift.name}</h1>;

  return (
    <section>
      <div className="container">
        <div className="grid-header">
          {name ? <h1>{name}, Pick Your Gift:</h1> : ""}
        </div>

        <div className="grid-container">
          {gifts.map((gift) => {
            if (gift.ownerId !== playerUp.id) {
              return displayGiftCard(gift);
            }
          })}
        </div>
      </div>
    </section>
  );
}
