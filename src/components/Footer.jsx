import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo2 from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo2} alt="logo" className="logoImageFooter" />
      </Link>
      <p className="footerText">COU-A-BOU-AR © 2022 Tous droits réservés.</p>
    </footer>
  );
}
