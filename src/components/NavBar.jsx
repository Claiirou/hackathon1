import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/NavBar.css";

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? "orange" : "white",
});

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li>
          <NavLink to="/" style={getActiveLinkStyle}>
            <p>Accueil</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculateur" style={getActiveLinkStyle}>
            <p>Calculateur</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/selection" style={getActiveLinkStyle}>
            <p>Sélection</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
