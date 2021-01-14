import React from "react";

export default function PlayersList({ setPlayers, players, isGameStarted }) {
  const nextPlayer = () => {
    setPlayers((prevPlayers) => {
      const newArr = [...prevPlayers];
      newArr.push(newArr.shift());
      // prevPlayers[0].isUp = false;
      // newArr[0].isUp = true;
      return newArr;
    });
  };

  const renderPlayerList = () => {
    const playersList = players.map((player, index) => {
      return (
        <span
          key={player.id}
          className={index === 0 ? " player active" : "player"}
        >
          {index === 0 && "Up Now: "}
          {player.name}
        </span>
      );
    });

    const button = (
      <button
        className="button-primary"
        onClick={() => {
          nextPlayer();
        }}
      >
        Next Player
      </button>
    );

    return playersList.concat(button);
  };

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
