import React, { useContext } from "react";
import { GameContext } from "../GamePage";
import { confirmActionMessage } from "../Utilities/handlerFunctions";

export default function ActionBar() {
  const { gameState, dispatch } = useContext(GameContext);
  const { selectedGift } = gameState;
  const { name } = selectedGift ? selectedGift : "";

  const styleActionBarContainer = selectedGift
    ? "action-bar-container slide-up"
    : "action-bar-container";

  const handleStealClick = (e) => {
    confirmActionMessage("steal") &&
      dispatch({ type: "STEAL_GIFT", payload: { selectedGift } });
  };
  const handleOpenClick = (e) => {
    confirmActionMessage("open") &&
      dispatch({ type: "OPEN_GIFT", payload: { selectedGift } });
  };

  const displayButtons =
    selectedGift && selectedGift.currentHolder ? (
      <button
        onClick={handleStealClick}
        className="button-warning action-button"
      >
        Steal
      </button>
    ) : (
      <button
        onClick={handleOpenClick}
        className="button-success action-button"
      >
        Open
      </button>
    );

  const actionBar = (
    <div className={styleActionBarContainer}>
      <div className="action-bar-wrapper flex center--x center--y">
        <div>
          <h2> Gift Selection: {name} </h2>
        </div>
        <div className="button-wrapper flex">{displayButtons}</div>
      </div>
    </div>
  );

  return actionBar;
}
