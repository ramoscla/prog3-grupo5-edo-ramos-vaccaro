import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favoritos" className="nav-links">
            Favoritas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/top" className="nav-links">
            Mejor Puntuados
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/populares" className="nav-links">
            Populares
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
