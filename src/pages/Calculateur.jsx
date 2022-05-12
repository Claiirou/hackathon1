import React from "react";
import brewery from "../assets/brewery.png";
import aperitif from "../assets/aperitif.png";
import "../styles/calculateur.css";
import Resultat from "../components/Resultat";

function Calculateur() {
  return (
    <div className="calculateurContent">
      <div className="titleCalculateur">
        Alors, quoi de prévu pour l'apéro ?
      </div>
      <div className="selectBottle">
        <img src={brewery} alt="brewery" className="breweryImg" />
        <div className="bottleContent">Est-ce qu'il y a de la place ?</div>
      </div>
      <div className="selectAperitif">
        <img src={aperitif} alt="aperitif" className="aperitifImg" />
        <div className="aperitifContent">
          Est-ce qu'il y de la place ici aussi ?
        </div>
      </div>
      <button type="submit" className="calculBtn">
        Calcul
      </button>
      <Resultat resultat={0.5} />
    </div>
  );
}

export default Calculateur;
