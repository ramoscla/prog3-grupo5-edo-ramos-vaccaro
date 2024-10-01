import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src="./img/logo.png" alt="logo" />
      </a>
      <Navbar />
    </div>
  );
};

export default Header;
