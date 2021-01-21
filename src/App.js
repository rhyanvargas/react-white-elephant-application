import React, { useState, useEffect } from "react";
import GiftList from "./GiftList";
import PanelComponent from "./PanelComponent";
import "./App.css";
import { PLAYERS, SAMPLE_GIFTS } from "./MockData";
import PlayersList from "./PlayersList";
import ActionBar from "./ActionBar";
import Header from "./Header";
import Button from "./Button";

function App() {
  // STATE
  const [animation, setAnimation] = useState({
    slideIn: false,
    slideUp: false,
  });
  const [gifts, setGifts] = useState(SAMPLE_GIFTS);
  const [players, setPlayers] = useState([]);
  const [playerUp, setPlayerUp] = useState({});
  const [isGameStarted, setGameStart] = useState(false);
  const [selectedGift, setSelectedGift] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isHiddenGift, setHiddenGift] = useState({}); //REFACTOR: this handles hiding the stolen gift to prevent next player from picking the gift that was stolen from them
  // HOOKS
  useEffect(() => {
    setPlayerUp(players.length > 0 ? players[0] : {});
  }, [players]);

  useEffect(() => {
    setIsActive(false);
  }, [playerUp]);

  // UTILITY FUNCTIONS
  const confirmActionMessage = (nameOfAction) => {
    // nameOfAction is a String
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

  const playGameButton = (
    <section>
      <div className="container flex center--x">
        <button className="button-primary" onClick={() => startGame(PLAYERS)}>
          Play Game
        </button>
      </div>
    </section>
  );

  return <>{isGameStarted ? app : playGameButton}</>;
}

export default App;
