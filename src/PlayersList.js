import React from "react";

export default function PlayersList({ players, isGameStarted, gifts }) {
  const renderPlayerList = () => {
    const playerList = players.map((player, index) => {
      if (player.currentGift === null) {
        return (
          <div className="card" key={`${player.id}-${index}`}>
            <h1>{player.name}</h1>
          </div>
        );
      }
      if (player.currentGift) {
        let gift = gifts.find((currGift) => player.currentGift === currGift.id);
        return (
          <div className="card" key={`${player.id}-${index}`}>
            <h1>{player.name}</h1>
            <div className="card-image-wrapper">
              <img className="card-image" src={gift.image} alt={gift.name} />
            </div>
            <h1 className="card-title">{gift.name}</h1>
            <p className="card-info">
              <small>current: {gift.currentHolder} | </small>
              <small>steals: {gift.steals}</small>
            </p>
          </div>
        );
      } else {
      }
    });
    return playerList;
  };
  return (
    <section>
      <div className="container players-container ">
        <div className="players-wrapper flex vertical center--y">
          {isGameStarted ? renderPlayerList() : ""}
        </div>
      </div>
    </section>
  );
}
