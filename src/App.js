import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import PlayerInfoCard from "./PlayerInfoCard";
import "./App.css";
import { PLAYERS, SAMPLE_GIFTS } from "./MockData";
import PlayerList from "./PlayerList";

function App() {
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState([]);
  const [playerUp, setPlayerUp] = useState({});
  const [isGameStarted, setGameStart] = useState(false);
  const [selectedGift, setSelectedGift] = useState({});
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setPlayerUp(players.length > 0 ? players[0] : {});
  }, [players, selectedGift]);

  // UTILITY FUNCTIONS
  const randomSort = (players) => {
    return players.sort(() => Math.random() - 0.5);
  };

  const startGame = (players) => {
    setPlayers(randomSort(players));
    setGameStart(true);
  };

  const handleSelectGift = (id) => {
    const foundGift = gifts.find((gift) => gift.id === id);
    setSelectedGift(foundGift);
    setIsActive((prevState) => !prevState);
  };

  const app = (
    <>
      <PlayerList
        players={players}
        setPlayers={setPlayers}
        isGameStarted={isGameStarted}
      />

      <GiftList
        playerUp={playerUp}
        gifts={gifts}
        handleSelectGift={handleSelectGift}
        selectedGift={selectedGift}
        isActive={isActive}
      ></GiftList>
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
