import React, { useState } from "react";
import brewery from "../assets/brewery.png";
import aperitif from "../assets/aperitif.png";
import "../styles/calculateur.css";
import Resultat from "../components/Resultat";
import alcool from "../assets/alcools.json";
import apero from "../assets/apero.json";
import bieres from "../assets/bieres.json";
import softs from "../assets/softs.json";
import saucisson from "../assets/saucissonOlive.json";
import bottle from "../assets/bottle.png";
import nuts from "../assets/nuts.png";
import ice from "../assets/ice.mp3";
import beer from "../assets/beer.gif";

function Calculateur() {
  const [isChosen, setIsChosen] = useState("");
  const [usersChoice] = useState([]);
  const [isChosenFood, setIsChosenFood] = useState("");
  const [usersChoiceFood] = useState([]);
  const [toutLalcool] = useState([...alcool, ...bieres, ...softs]);
  const [touteLaBouffe] = useState([...saucisson, ...apero]);
  const sonIce = new Audio(ice);
  const [endLoading, setEndLoading] = useState(false);

  const start = () => {
    sonIce.play();
  };

  const [loading, setLoading] = useState(false);

  function pickOneDrink(value) {
    setIsChosen(value);
    usersChoice.push(
      toutLalcool.filter((oui) => oui.nom_francais === value)[0]
    );
  }

  function pickOneFood(value) {
    setIsChosenFood(value);
    usersChoiceFood.push(
      touteLaBouffe.filter((non) => non.nom_francais === value)[0]
    );
  }
  function addItAllUp() {
    const syntheseAlcool = [];
    usersChoice.forEach((ouestcequonva) =>
      syntheseAlcool.push(
        ouestcequonva.impact_environnemental["Changement climatique"].synthese /
          2
      )
    );

    const syntheseFood = [];
    usersChoiceFood.forEach((ouestcequonva) =>
      syntheseFood.push(
        ouestcequonva.impact_environnemental["Changement climatique"].synthese /
          10
      )
    );
    const summedArray = [...syntheseAlcool, ...syntheseFood];
    const totalScore =
      summedArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) /
      (250 / 52);
    return totalScore;
  }
  const bruitGif = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
    setTimeout(() => start(), 2000);
    setTimeout(() => setEndLoading(true), 4500);
  };
  function handleClick() {
    addItAllUp();
    bruitGif();
  }
  return (
    <div className="calculateurContent">
      <h1 className="titleCalculateur">Alors, quoi de prévu pour l'apéro ?</h1>
      <div className="selectBottle">
        <img src={brewery} alt="brewery" className="breweryImg" />

        <div className="bottleContent">
          <select
            className="beer-input"
            value={isChosen}
            onChange={(e) => pickOneDrink(e.target.value)}
          >
            <option key={""} value={""}>
              -- Boissons (pour 50cL) --
            </option>
            {bieres.map((bot) => (
              <option key={bot.ciqual_AGB} value={bot.nom_francais}>
                {bot.nom_francais}
              </option>
            ))}
            {alcool.map((bot) => (
              <option key={bot.ciqual_AGB} value={bot.nom_francais}>
                {bot.nom_francais}
              </option>
            ))}
            {softs.map((bot) => (
              <option key={bot.ciqual_AGB} value={bot.nom_francais}>
                {bot.nom_francais}
              </option>
            ))}
          </select>

          {usersChoice.map((u) => (
            <div key={u.ciqual_AGB} className="drinks-added">
              <img src={bottle} alt={u.nom_francais} />
              <p>{u.nom_francais}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="selectAperitif">
        <img src={aperitif} alt="aperitif" className="aperitifImg" />
        <div className="aperitifContent">
          <select
            className="beer-input"
            value={isChosenFood}
            onChange={(e) => pickOneFood(e.target.value)}
          >
            <option key={""} value={""}>
              -- Le Solide (pour 100g) --
            </option>
            {saucisson.map((bot) => (
              <option key={bot.ciqual_AGB} value={bot.nom_francais}>
                {bot.nom_francais}
              </option>
            ))}
            {apero.map((bot) => (
              <option key={bot.ciqual_AGB} value={bot.nom_francais}>
                {bot.nom_francais}
              </option>
            ))}
          </select>
          {usersChoiceFood.map((u) => (
            <div className="food-added" key={u.ciqual_AGB}>
              <img src={nuts} alt={u.nom_francais} />
              <p>{u.nom_francais}</p>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="calculBtn" onClick={handleClick}>
        Calcul
      </button>
      {loading && <img className="gifBeer" src={beer} alt="beergif"></img>}
      <div
        className="affichResult"
        style={
          endLoading ? { visibility: "initial" } : { visibility: "hidden" }
        }
      >
        <Resultat resultat={addItAllUp()} />
      </div>
    </div>
  );
}

export default Calculateur;
