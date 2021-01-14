import React from "react";

export default function ActionBar({
  isActive,
  selectedGift,
  playerUp,
  handleOpenGiftClick,
}) {
  const { name } = selectedGift;

  const styleActionBarContainer = isActive
    ? "action-bar-container slide-up"
    : "action-bar-container";

  const handleClick = (e) => {
    handleOpenGiftClick(playerUp, selectedGift);
  };

  const actionBar = (
    <div className={styleActionBarContainer}>
      <div className="action-bar-wrapper flex center--x center--y">
        <h1> Gift Selection: {name} </h1>
        <div className="button-wrapper flex">
          <button
            onClick={handleClick}
            className="button-primary action-button"
          >
            Open
          </button>
          <button className="button-secondary action-button"> Steal </button>
        </div>
      </div>
    </div>
  );

  return actionBar;
}
