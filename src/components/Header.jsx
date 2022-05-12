import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import header_wood from "../assets/header_wood.png";

export default function Header() {
  const headerbackground = {
    backgroundImage: `url(${header_wood})`,
  };

  return (
    <div className="header" style={headerbackground}>
      <Link to="/">
        <h1 className="titleHeader">Cou-a-bou-ar</h1>
      </Link>
    </div>
  );
}
