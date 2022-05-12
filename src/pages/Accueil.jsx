import React from "react";
import { Link } from "react-router-dom";
import "../styles/accueil.css";
import bouchon from "../assets/bouchon.mp3";
import logo2 from "../assets/logo2.png";

const Accueil = () => {
  const sonBouchon = new Audio(bouchon);

  const start = () => {
    sonBouchon.play();
  };

  const handleClick = () => {
    start();
  };

  return (
    <div>
      {" "}
      <div className="textImgHome">
        <img src={logo2} alt="logo" className="logoHome"></img>
        <div className="text1">
          <p>Améliorons notre impact environnemental... même à l’apéro !</p>
          <p>
            Tout le monde le sait : la planète se réchauffe. Pour se rafraîchir
            le corps et l’esprit, rien de tel qu’un bon apéro… écoresponsable ;)
          </p>
        </div>
        <p className="text2">
          En moyenne, un adulte français boit l’équivalent de 12 litres d’alcool
          pur par an, ce qui correspond à une émission de 250 kg de CO2 par
          français et par an.
        </p>
      </div>
      <h2 className="titleHome">Le guide de l'apéro écoresponsable</h2>
      <div className="buttonDiv">
        <Link to="/Calculateur">
          {" "}
          <button type="button" className="buttonHome" onClick={handleClick}>
            Let's Drink !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;
