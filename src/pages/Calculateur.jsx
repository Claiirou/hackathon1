import React from "react";
import brewery from "../assets/brewery.png";
import aperitif from "../assets/aperitif.png";
import "../styles/calculateur.css";
import alcool from '../assets/alcools.json';
import apero from '../assets/apero.json';
import bieres from '../assets/bieres.json';
import softs from '../assets/softs.json';
import saucisson from '../assets/saucissonOlive.json';
import bottle from '../assets/bottle.png';

function Calculateur() {
  
  return (
    <div className="calculateurContent">
      <div className="titleCalculateur">
        Alors, quoi de prévu pour l'apéro ?
      </div>
      <div className="selectBottle">
        <img src={brewery} alt="brewery" className="breweryImg" />
        <div className="bottleContent">
        {alcool.map((bot) => (<div className="drinks"><img className="bottle-image" src={bottle} alt={bot.nom_francais}/> <p>{bot.nom_francais}</p></div>))}
        </div>
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
    </div>
  );
}

export default Calculateur;
