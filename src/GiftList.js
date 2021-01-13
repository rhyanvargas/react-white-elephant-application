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

  const selectedGiftHeader = selectedGift.name && <h1>{selectedGift.name}</h1>;

  return (
    <>
      <div>
        {name ? <h1>{name}, Pick Your Gift:</h1> : ""}
        {selectedGiftHeader}
      </div>

      <div className="grid-container">
        {gifts.map((gift) => {
          return (
            <GiftCard
              key={gift.id}
              gift={gift}
              handleSelectGift={handleSelectGift}
              selectedGift={selectedGift}
              isActive={isActive}
            />
          );
        })}
      </div>
    </>
  );
}
