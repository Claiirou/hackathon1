import React, { useState } from "react";
import brewery from "../assets/brewery.png";
import aperitif from "../assets/aperitif.png";
import "../styles/calculateur.css";
import alcool from "../assets/alcools.json";
import apero from "../assets/apero.json";
import bieres from "../assets/bieres.json";
import softs from "../assets/softs.json";
import saucisson from "../assets/saucissonOlive.json";
import bottle from "../assets/bottle.png";
import food from "../assets/assiette.png";

function Calculateur() {
  const [isChosen, setIsChosen] = useState("");
  const [usersChoice] = useState([]);
  const [isChosenFood, setIsChosenFood] = useState("");
  const [usersChoiceFood] = useState([]);
  const [toutLalcool] = useState([...alcool, ...bieres, ...softs]);
  const [touteLaBouffe] = useState([...saucisson, ...apero]);

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
    console.log(totalScore);
    console.log(syntheseAlcool);
    console.log(syntheseFood);
  }

  return (
    <div className="calculateurContent">
      <h1 className="titleCalculateur">Alors, quoi de prévu pour l'apéro ?</h1>
      <div className="selectContainer">
        <div className="selectBottle">
          <img src={brewery} alt="brewery" className="breweryImg" />

          <div className="bottleContent">
            <select
              className="beer-input"
              value={isChosen}
              onChange={(e) => pickOneDrink(e.target.value)}
            >
              <option key={""} value={""}>
                -- Boissons -- (portion: pour 50 cl environ)
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
              <div className="drinks-added">
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
                -- Le Solide -- (portion: pour 100 g environ)
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
              <div className="food-added">
                <img src={food} alt={u.nom_francais} />
                <p>{u.nom_francais}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button type="submit" className="calculBtn" onClick={addItAllUp}>
        Calcul
      </button>
    </div>
  );
}

export default Calculateur;
