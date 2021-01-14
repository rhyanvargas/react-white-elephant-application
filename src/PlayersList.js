import React from "react";

export default function PlayersList({
  renderPlayerList,
  setPlayers,
  players,
  isGameStarted,
}) {
  return (
    <section>
      <div className="container players-container ">
        <div className="players-wrapper flex  center--y">
          {isGameStarted ? renderPlayerList() : ""}
        </div>
      </div>
    </section>
  );
}
