import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import PlayerInfoCard from "./PlayerInfoCard";
import "./App.css";
import { PLAYERS, SAMPLE_GIFTS } from "./MockData";
import PlayersList from "./PlayersList";
import ActionBar from "./ActionBar";

function App() {
  // STATE
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState([]);
  const [playerUp, setPlayerUp] = useState({});
  const [isGameStarted, setGameStart] = useState(false);
  const [selectedGift, setSelectedGift] = useState({});
  const [isActive, setIsActive] = useState(false);

  // HOOKS
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

  const nextPlayer = () => {
    setPlayers((prevPlayers) => {
      const newArr = [...prevPlayers];

      newArr.push(newArr.shift());

      return newArr;
    });

    setSelectedGift({});
    setIsActive(false);
  };

  //  RENDER FUNCTIONS
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

  // HANDLER FUNCTIONS
  const handleSelectGift = (id) => {
    const foundGift = gifts.find((gift) => gift.id === id);
    setSelectedGift(foundGift);
    setIsActive((prevState) => true);
  };

  const handleOpenGiftClick = (player, giftToOpen) => {
    const { name } = giftToOpen;
    if (
      window.confirm(`${playerUp.name} do you want to open the ${name} gift?`)
    ) {
      setGifts((prevGifts) => {
        const newGifts = [];

        prevGifts.forEach((gift) => {
          let updatedGift = gift;
          if (giftToOpen.id === gift.id) {
            updatedGift = { ...gift, currentHolder: player.name };
            console.log(updatedGift.currentHolder);
          }
          newGifts.push(updatedGift);
        });
        return newGifts;
      });

      setPlayers((prevPlayers) => {
        let newPlayers = [];

        players.forEach((currPlayer) => {
          let updatedPlayer = currPlayer;
          if (player.id === currPlayer.id) {
            updatedPlayer = { ...currPlayer, currentGift: giftToOpen.id };
          }

          newPlayers.push(updatedPlayer);
        });

        return newPlayers;
      });

      nextPlayer();
    }
  };

  // const handleStealGiftClick = (player, giftToOpen) => {
  //   // Set currentHolder of giftToOpen to player

  //   // add +1 to steals of giftToOpen

  // }

  // JSX ELEMENTS
  const app = (
    <main className="container">
      <PlayersList
        players={players}
        setPlayers={setPlayers}
        isGameStarted={isGameStarted}
        renderPlayerList={renderPlayerList}
      />
      <GiftList
        playerUp={playerUp}
        gifts={gifts}
        handleSelectGift={handleSelectGift}
        selectedGift={selectedGift}
        isActive={isActive}
      ></GiftList>
      <ActionBar
        playerUp={playerUp}
        selectedGift={selectedGift}
        isActive={isActive}
        handleOpenGiftClick={handleOpenGiftClick}
      />
      <PlayerInfoCard playerUp={playerUp}></PlayerInfoCard>
    </main>
  );

  const playGameButton = (
    <section>
      <div className="container flex center--x">
        <button className="button-primary" onClick={() => startGame(PLAYERS)}>
          Play Game
        </button>
      </div>
    </section>
  );

  console.log(players);
  return <>{isGameStarted ? app : playGameButton}</>;
}

export default App;
