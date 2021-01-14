import React from "react";

export default function ActionBar({
  isActive,
  selectedGift,
  playerUp,
  handleOpenGiftClick,
}) {
  const { name } = selectedGift;

  const styleActionBarContainer =
    selectedGift !== null && isActive
      ? "action-bar-container slide-up"
      : "action-bar-container";

  const handleClick = (e) => {
    handleOpenGiftClick(playerUp, selectedGift);
  };

  const displayButtons = selectedGift.currentHolder ? (
    <button className="button-warning action-button"> Steal </button>
  ) : (
    <button onClick={handleClick} className="button-success action-button">
      Open
    </button>
  );

  const actionBar = (
    <div className={styleActionBarContainer}>
      <div className="action-bar-wrapper flex center--x center--y">
        <h1> Gift Selection: {name} </h1>
        <div className="button-wrapper flex">{displayButtons}</div>
      </div>
    </div>
  );

  return actionBar;
}
