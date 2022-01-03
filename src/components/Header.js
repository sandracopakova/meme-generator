import React from "react";
import logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__img" />
      <span className="header__title">Meme generator</span>
      <span className="header__project">React Course - Project 3</span>
    </header>
  );
}
