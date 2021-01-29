import React, { useContext } from "react";
import GiftCard from "./GiftCard";
import { GameContext } from "./index";

export default function GiftList({
  gifts,
  playerUp,
  // handleSelectGift,
  // selectedGift,
  // isHiddenGift,
}) {
  const { gameState } = useContext(GameContext);

  const { hiddenGift } = gameState;
  const { name } = playerUp;

  const displayGiftCard = (gift) => {
    return (
      <GiftCard
        key={gift.id}
        gift={gift}
        // handleSelectGift={handleSelectGift}
        // selectedGift={selectedGift}
      />
    );
  };

  const isGiftAvailable = (currPlayer, currGift) =>
    (currGift.ownerId !== currPlayer.id || currGift.ownerId) &&
    currGift.steals < 3 &&
    currGift.id !== hiddenGift.id
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
          {gifts.map(
            (gift) => isGiftAvailable(playerUp, gift) && displayGiftCard(gift)
          )}
        </div>
      </div>
    </>
  );
}
