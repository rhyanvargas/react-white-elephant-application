import React from "react";

export default function ActionBar({ isActive, selectedGift, playerUp }) {
  const { name } = selectedGift;

  const handleClick = (e) => {
    window.confirm(`${playerUp.name} do you want to open the ${name} gift?`) &&
      alert("YOU HIT OK");
  };

  const actionBar = (
    <div className="action-bar-container">
      <div className="action-bar-wrapper flex center--x center--y">
        <h1> Gift Selection: {name} </h1>
        <div className="button-wrapper flex">
          <button
            onClick={handleClick}
            className="button-primary action-button"
          >
            {" "}
            Open{" "}
          </button>
          <button className="button-secondary action-button"> Steal </button>
        </div>
      </div>
    </div>
  );

  return isActive && actionBar;
}
