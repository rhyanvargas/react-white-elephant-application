import React from "react";

export default function Button({ animation, toggleAnimation }) {
  const { slideIn } = animation;

  const closeButton = "Close X";

  const button = (
    <button
      className="panel-button button-primary"
      onClick={(e) => {
        e.preventDefault();
        toggleAnimation();
      }}
    >
      {slideIn ? closeButton : "View Player Info"}
    </button>
  );
  return <>{button} </>;
}
