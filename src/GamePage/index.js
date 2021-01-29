import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
  useCallback,
} from "react";
import GiftList from "./GiftList";
import PanelComponent from "./PanelComponent";
import "../App.css";
import { PLAYERS, SAMPLE_GIFTS } from "../MockData";
import PlayersList from "./PlayersList";
import ActionBar from "./ActionBar";
import Header from "./Header";
import Button from "./Button";
import GiftReducer from "../Reducers/GameReducer";

const intialStateArray = [];
const intialNullState = null;

export const GameContext = createContext({
  selectedGift: intialNullState,
  gifts: SAMPLE_GIFTS,
  players: intialStateArray,
  hiddenGift: {},
  playerUp: {},
});

export default function GamePage() {
  // STATE
  const [animation, setAnimation] = useState({
    slideIn: false,
    slideUp: false,
  });
  const [isGameStarted, setGameStart] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);

  // CONTEXT
  const initialGameState = useContext(GameContext);

  // REDUCERS
  const [gameState, dispatch] = useReducer(GiftReducer, initialGameState);

  // HOOKS
  useEffect(() => {
    checkIfGameEnds();
  }, [gameState.players]);

  useEffect(() => {
    // Set selectedGift to null everytime new player is up
    const selectedGiftId = intialNullState;
    dispatch({ type: "SELECT_GIFT", payload: { selectedGiftId } });
  }, [gameState.playerUp]);

  // UTILITY FUNCTIONS
  const displayGameEndAlert = () => {
    return window.confirm(
      "All gifts have been taken! Click 'OK' to end the game, otherwise click 'Cancel', so you can steal another gift ;)"
    );
  };

  const checkIfGameEnds = () => {
    let everyGiftHasOwner = gameState.gifts.every(
      (gift) => gift.currentHolder != null
    );

    if (everyGiftHasOwner) {
      displayGameEndAlert() && setGameEnded(true);
    }
  };

  const startGame = (players) => {
    dispatch({ type: "SHUFFLE_PLAYERS", payload: { players } });
    setGameStart(true);
  };

  const toggleAnimation = () => {
    setAnimation((prevState) => {
      return {
        ...prevState,
        slideIn: !prevState.slideIn,
      };
    });
  };

  // JSX ELEMENTS
  const app = (
    <main>
      <div className="container">
        <GiftList
          playerUp={gameState.playerUp}
          gifts={gameState.gifts}
        ></GiftList>
        <ActionBar
          playerUp={gameState.playerUp}
          selectedGift={gameState.selectedGift}
          // handleStealGiftClick={handleStealGiftClick}
        />
      </div>

      <PanelComponent animation={animation}>
        <Button toggleAnimation={toggleAnimation} animation={animation} />
        <PlayersList
          players={gameState.players}
          isGameStarted={isGameStarted}
          gifts={gameState.gifts}
        />
      </PanelComponent>
    </main>
  );

  const startGameScreen = (
    <section>
      <div className="container flex center--x">
        <button className="button-primary" onClick={() => startGame(PLAYERS)}>
          Play Game
        </button>
      </div>
    </section>
  );

  const gameEndScreen = (
    <section>
      <div className="container flex center--x">
        <h1>THE GAME HAS ENDED!</h1>
      </div>
    </section>
  );

  const showGameBoard = () => {
    if (isGameStarted) {
      return app;
    } else if (isGameEnded) {
      return gameEndScreen;
    } else {
      return startGameScreen;
    }
  };

  return (
    <>
      <GameContext.Provider value={{ gameState, dispatch }}>
        {showGameBoard()}
      </GameContext.Provider>
    </>
  );
}
