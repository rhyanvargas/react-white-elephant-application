import React from "react";
import GiftCard from "./GiftCard";

export default function GiftList({ gifts, playerUp }) {
  const { name, selectedGiftName } = playerUp;

  return (
    <>
      <div>{name ? <h1>{name}, Pick Your Gift:</h1> : ""}</div>
      <div className="grid-container">
        {gifts.map((gift) => {
          return <GiftCard key={gift.id} gift={gift} />;
        })}
      </div>
    </>
  );
}
