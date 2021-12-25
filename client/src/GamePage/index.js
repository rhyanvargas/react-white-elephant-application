import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import GiftList from "./GiftList";
import PanelComponent from "./PanelComponent";
import "../App.css";
import { PLAYERS, SAMPLE_GIFTS } from "../MockData";
import PlayersList from "./PlayersList";
import GameSummary from "../GameSummary";
import ActionBar from "./ActionBar";
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
    let everyGiftHasOwner = gameState.gifts.every(
      (gift) => gift.currentHolder != null
    );

    if (everyGiftHasOwner) {
      displayGameEndAlert() && setGameEnded(true);
    }
  }, [gameState.gifts]);

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
        <GiftList />
        <ActionBar />
      </div>

      <PanelComponent animation={animation}>
        <Button toggleAnimation={toggleAnimation} animation={animation} />
        <PlayersList isGameStarted={isGameStarted} />
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
    <>
      <GameSummary players={gameState.players} gifts={gameState.gifts} />{" "}
    </>
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

  return (
    <>
      <GameContext.Provider value={{ gameState, dispatch }}>
        {showGameBoard()}
      </GameContext.Provider>
    </>
  );
}
