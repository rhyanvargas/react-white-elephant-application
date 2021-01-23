import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import PanelComponent from "./PanelComponent";
import "../App.css";
import { PLAYERS, SAMPLE_GIFTS } from "../MockData";
import PlayersList from "./PlayersList";
import ActionBar from "./ActionBar";
import Header from "./Header";
import Button from "./Button";

export default function GamePage() {
  // STATE
  const intialState = [];

  const [animation, setAnimation] = useState({
    slideIn: false,
    slideUp: false,
  });
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState(intialState);
  const [playerUp, setPlayerUp] = useState({});
  const [isGameStarted, setGameStart] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [selectedGift, setSelectedGift] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isHiddenGift, setHiddenGift] = useState({}); //REFACTOR: this handles hiding the stolen gift to prevent next player from picking the gift that was stolen from them
  // HOOKS
  useEffect(() => {
    setPlayerUp(players.length > 0 ? players[0] : {});
    isAllGiftsTaken();
  }, [players]);

  useEffect(() => {
    setIsActive(false);
  }, [playerUp]);

  // UTILITY FUNCTIONS

  const displayGameEndAlert = () => {
    return window.confirm(
      "All gifts have been taken! Click 'OK' to end the game, otherwise click 'Cancel', so you can steal another gift ;)"
    );
  };

  const isAllGiftsTaken = () => {
    let everyGiftHasOwner = gifts.every((gift) => gift.currentHolder != null);

    if (everyGiftHasOwner && displayGameEndAlert()) setGameEnded(true);
  };

  const confirmActionMessage = (nameOfAction) => {
    return window.confirm(
      `Are you sure you want to ${nameOfAction} this gift?`
    );
  };

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
  };

  const toggleAnimation = () => {
    setAnimation((prevState) => {
      return {
        ...prevState,
        slideIn: !prevState.slideIn,
      };
    });
  };

  //  RENDER FUNCTIONS

  // HANDLER FUNCTIONS
  const handleSelectGift = (giftId) => {
    const foundGift = gifts.find((gift) => gift.id === giftId);
    setSelectedGift(foundGift);
    setIsActive((prevState) => true);
  };

  const handleOpenGiftClick = (player, giftToOpen) => {
    if (confirmActionMessage("open")) {
      setGifts((prevGifts) => {
        const newGifts = [];

        prevGifts.forEach((gift) => {
          let updatedGift = gift;
          if (giftToOpen.id === gift.id) {
            updatedGift = { ...gift, currentHolder: player.name };
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

      setHiddenGift({});
      nextPlayer();
    }
  };

  const handleStealGiftClick = (currPlayer, giftToSteal) => {
    const alertMessage = `${giftToSteal.name} has been stolen 3 times! This gift belongs to ${currPlayer.name}`;
    let newPlayers = [];
    let firstPlayer;
    let lastPlayer;
    let newGifts = [];
    let updatedGift = {};

    if (confirmActionMessage("steal")) {
      players.forEach((prevPlayer) => {
        // Update Players properties
        if (currPlayer.id === prevPlayer.id)
          lastPlayer = {
            ...prevPlayer,
            currentGift: giftToSteal.id,
          };
        else if (giftToSteal.currentHolder === prevPlayer.name)
          firstPlayer = {
            ...prevPlayer,
            currentGift: null,
          };
        else newPlayers.push(prevPlayer);
      });

      // Update Gift currentHolder
      gifts.forEach((gift) => {
        if (giftToSteal.id === gift.id) {
          updatedGift = {
            ...gift,
            currentHolder: currPlayer.name,
            steals: ++gift.steals,
          };
          newGifts.push(updatedGift);
          setHiddenGift(updatedGift);
        } else newGifts.push(gift);
      });

      // Push players to newPlayers array
      newPlayers.unshift(firstPlayer);
      newPlayers.push(lastPlayer);

      setPlayers(newPlayers);
      setGifts(newGifts);
    } // END OF IF

    if (giftToSteal.steals === 3) alert(alertMessage);
  };

  // JSX ELEMENTS
  const app = (
    <main>
      <div className="container">
        <Header />

        <GiftList
          playerUp={playerUp}
          gifts={gifts}
          handleSelectGift={handleSelectGift}
          selectedGift={selectedGift}
          isActive={isActive}
          isHiddenGift={isHiddenGift}
          isGameEnded={isGameEnded}
        ></GiftList>
        <ActionBar
          playerUp={playerUp}
          selectedGift={selectedGift}
          isActive={isActive}
          handleOpenGiftClick={handleOpenGiftClick}
          handleStealGiftClick={handleStealGiftClick}
        />
      </div>

      <PanelComponent animation={animation}>
        <Button toggleAnimation={toggleAnimation} animation={animation} />
        <PlayersList
          players={players}
          setPlayers={setPlayers}
          isGameStarted={isGameStarted}
          gifts={gifts}
        />
      </PanelComponent>
    </main>
  );

  /* TODO: Setup Router to /start-game */
  const startGameScreen = (
    <section>
      <div className="container flex center--x">
        <button className="button-primary" onClick={() => startGame(PLAYERS)}>
          Play Game
        </button>
      </div>
    </section>
  );

  /* TODO: Setup Router to /game-end */
  const gameEndScreen = (
    <section>
      <div className="container flex center--x">
        <h1>THE GAME HAS ENDED!</h1>
      </div>
    </section>
  );

  const showGameBoard = () => {
    if (isGameStarted && !isGameEnded) {
      return app;
    } else if (isGameEnded) {
      return gameEndScreen;
    } else {
      return startGameScreen;
    }
  };
  return <>{showGameBoard()}</>;
}
