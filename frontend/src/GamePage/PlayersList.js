import React, { useContext } from "react";
import { GameContext } from "../GamePage";

export default function PlayersList({ isGameStarted }) {
  const { gameState } = useContext(GameContext);
  const { players, gifts } = gameState;

  const renderPlayerList = () => {
    const playerList = players.map((player, index) => {
      if (player.currentGift === null) {
        return (
          <div className="player-card" key={`${player.id}-${index}`}>
            <h2>{player.name}</h2>
          </div>
        );
      }
      if (player.currentGift) {
        let gift = gifts.find((currGift) => player.currentGift === currGift.id);
        return (
          <div
            className="player-card flex center--y start"
            key={`${player.id}-${index}`}
          >
            <div className="player-card-image-wrapper">
              <img
                className="player-card-image"
                src={gift.image}
                alt={gift.name}
              />
            </div>
            <div className="player-card-info-wrapper flex vertical left">
              <h3>{player.name}</h3>
              <p className="player-card-title">{gift.name}</p>
              <p className="player-card-info">
                <small>steals: {gift.steals}</small>
              </p>
            </div>
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
        <div className="players-wrapper flex vertical start">
          {isGameStarted ? renderPlayerList() : ""}
        </div>
      </div>
    </section>
  );
}
