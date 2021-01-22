import React from "react";

export default function Header() {
  // const closeButton = (
  //   <div className="panel-button button-primary close">Close X</div>
  // );

  // const button = (
  //   <button
  //     className="panel-button button-primary"
  //     onClick={(e) => {
  //       toggleAnimation("slideIn");
  //     }}
  //   >
  //     View Player Info
  //   </button>
  // );

  const header = (
    <header className="">
      <nav className="flex between center--y">
        <div className="logo-container flex">Logo</div>
        <ul className="nav-link-container flex start">
          <li> Link 1</li>
          <li> Link 2</li>
          {/* {button} */}
        </ul>
      </nav>
    </header>
  );
  return <>{header}</>;
}
