import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import header_wood from "../assets/header_wood.png";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";
import NavBar from "./NavBar";

export default function Header() {
  let location = useLocation();

  const headerbackground = {
    backgroundImage: `url(${header_wood})`,
  };

  return (
    <div className="headerContainer" style={headerbackground}>
      <div className="header">
        {location.pathname === "/" ? (
          ""
        ) : (
          <img src={logo} alt="logo" className="logoHeader"></img>
        )}
        <Link to="/">
          <h1 className="titleHeader">Cou-a-bou-ar</h1>
        </Link>
      </div>
      <NavBar />
    </div>
  );
}
