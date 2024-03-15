import React from "react";
import LittleLemonLogo from "./images/littlelemonlogo.png";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <img src={LittleLemonLogo} alt="little lemon logo" className="logo" />
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/online">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
