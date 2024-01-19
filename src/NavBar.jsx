import React from "react";
import "../src/NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Películas</a>
        </li>
        <li>
          <a href="/">Series</a>
        </li>
        <li>
          <a href="/">Nosotros</a>
        </li>
      </ul>
    </div>
  );
}
