import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import header_wood from "../assets/header_wood.png";
import { useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();

  const headerbackground = {
    backgroundImage: `url(${header_wood})`,
  };

  return (
    <div className="header" style={headerbackground}>
      {location.pathname === "/" ? <div> Accueil </div> : <div>Calcul </div>}
      <Link to="/">
        <h1 className="titleHeader">Cou-a-bou-ar</h1>
      </Link>
    </div>
  );
}
