import React from "react";

export default function GiftOwnerPanel({ playerUp, gifts }) {
  const { name, image, currentGift } = playerUp;
  let playerGift = {};

  gifts.forEach((gift) => {
    if (gift.id === playerUp.currentGift) {
      const giftObject = {
        giftName: gift.name,
        giftImage: gift.image,
        giftURL: gift.url,
      };

      playerGift = giftObject;
    }
  });
  const { giftName, giftImage, giftURL } = playerGift;

  const GiftOwnerPanel = giftName ? (
    <>
      <div className="card-image-wrapper">
        <img className="card-image" src={giftImage} alt={giftName} />
      </div>
      <div className="card-info">
        <p>
          <small>current gift: {giftName}</small>
        </p>
        <p>
          <a href={giftURL} target="_blank">
            Buy Here
          </a>
        </p>
      </div>
    </>
  ) : (
    <h3>No Gift Yet :)</h3>
  );

  return (
    <div className="card">
      <h1 className="card-title">Player Info: {name}</h1>
      {GiftOwnerPanel}
    </div>
  );
}
