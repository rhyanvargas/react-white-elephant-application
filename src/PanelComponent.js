import React from "react";

export default function PanelComponent({ animation, children }) {
  const styles = "panel-section".concat(animation.slideIn ? " slide-in" : "");
  return <section className={styles}>{children}</section>;
}
