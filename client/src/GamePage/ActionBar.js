import React, { useContext } from "react";
import { GameContext } from ".";
import { confirmActionMessage } from "../Reducers/handlerFunctions";
import { actions } from "../Reducers/actions";
export default function ActionBar() {
  const { gameState, dispatch } = useContext(GameContext);
  const { selectedGift } = gameState;
  const { name, currentHolder, id } = selectedGift ? selectedGift : "";
  let giftName = currentHolder === null ? id : name;

  const styleActionBarContainer = selectedGift
    ? "action-bar-container slide-up"
    : "action-bar-container";

  const handleStealClick = (e) => {
    confirmActionMessage("steal") &&
      dispatch({ type: actions.STEAL_GIFT, payload: { selectedGift } });
  };
  const handleOpenClick = (e) => {
    confirmActionMessage("open") &&
      dispatch({ type: actions.OPEN_GIFT, payload: { selectedGift } });
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
          <h2> Gift Selection: {giftName} </h2>
        </div>
        <div className="button-wrapper flex">{displayButtons}</div>
      </div>
    </div>
  );

  return actionBar;
}
