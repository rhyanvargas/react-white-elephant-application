import React from "react";
import GiftCard from "./GiftCard";

export default function GiftList({ gifts }) {
  return (
    <div className="grid-container">
      {gifts.map((gift) => {
        return <GiftCard key={gift.id} gift={gift} />;
      })}
    </div>
  );
}
