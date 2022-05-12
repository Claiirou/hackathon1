import React, { useState } from "react";
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
  const [isChosen, setIsChosen] = useState('');
  const [usersChoice] = useState([]);

function pickOne (value) {
  usersChoice.push(value);
  setIsChosen(value);
}
console.log(isChosen);

  return (
    <div className="calculateurContent">
      <div className="titleCalculateur">
        Alors, quoi de prévu pour l'apéro ?
      </div>
      <div className="selectBottle">
        <img src={brewery} alt="brewery" className="breweryImg" />
        <div className="bottleContent">
        
        <select 
          className="beer-input"
          value={isChosen} 
          onChange={(e) => pickOne(e.target.value)}>
            <option key={''} 
            value={''}>-- Boissons --</option>
          {bieres.map((bot) => 
        (<option 
          key={bot.ciqual_AGB} 
          value={bot.nom_francais}>{bot.nom_francais}</option>))}
          {alcool.map((bot) => 
        (<option 
          key={bot.ciqual_AGB} 
          value={bot.nom_francais}>{bot.nom_francais}</option>))}
          {softs.map((bot) => 
        (<option 
          key={bot.ciqual_AGB} 
          value={bot.nom_francais}>{bot.nom_francais}</option>))}
          </select>
          
          {usersChoice.map((u) => (
            <div className="drinks-added">
              <img src={bottle} alt={u}/>
              <p>{u}</p></div>
          ))}
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
