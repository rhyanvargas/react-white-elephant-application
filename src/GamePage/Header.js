import React from "react";
import { Links } from "../App";

export default function Header() {
  const header = (
    <header className="">
      <nav className="flex between center--y">
        <div className="logo-container flex">Logo</div>
        <>{Links}</>
      </nav>
    </header>
  );
  return <>{header}</>;
}
