import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import PlayerInfoCard from "./PlayerInfoCard";
import "./App.css";
import { PLAYERS, SAMPLE_GIFTS } from "./MockData";
import PlayerList from "./PlayerList";

function App() {
  //STATE
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState([]);
  const [playerUp, setPlayerUp] = useState({});
  const [isGameStarted, setGameStart] = useState(false);
  // TODO: think where to place "isOpened" and "isSelected"... should be state or in data as field

  useEffect(() => {
    setPlayerUp(players.length > 0 ? players[0] : {});
  }, [players]);

  // UTILITY FUNCTIONS

  const randomSort = (players) => {
    return players.sort(() => Math.random() - 0.5);
  };

  const startGame = (players) => {
    setPlayers(randomSort(players));
    setGameStart(true);
  };

  const app = (
    <>
      <PlayerList
        players={players}
        setPlayers={setPlayers}
        isGameStarted={isGameStarted}
      />

      <GiftList playerUp={playerUp} gifts={gifts}></GiftList>
      <div>
        <PlayerInfoCard playerUp={playerUp}></PlayerInfoCard>
      </div>
    </>
  );

  const playGameButton = (
    <section>
      <button onClick={() => startGame(PLAYERS)}>Play Game</button>
    </section>
  );

  return <>{isGameStarted ? app : playGameButton}</>;
}

export default App;
