import React from "react";
import brewery from "../assets/brewery.png";
import aperitif from "../assets/aperitif.png";
import "../styles/calculateur.css";
import ice from "../assets/ice.mp3";
import beer from "../assets/beer.gif";
// import alcool from "../assets/alcools.json";
// import apero from "../assets/apero.json";
// import bieres from "../assets/bieres.json";
// import softs from "../assets/softs.json";
// import saucisson from "../assets/saucissonOlive.json";

function Calculateur() {
  const sonIce = new Audio(ice);

  const start = () => {
    sonIce.play();
  };

  const [loading, setLoading] = React.useState(false);
  const initTime = 5;
  const [timer, setTimer] = React.useState(initTime);

  const handleClick = () => {
    start();
    setLoading(true);
    setTimer(initTime);
  };

  return (
    <div className="calculateurContent">
      <h1 className="titleCalculateur">Alors, quoi de prévu pour l'apéro ?</h1>
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
      <button type="submit" className="calculBtn" onClick={handleClick}>
        Calcul
      </button>
      {loading && <img className="gifBeer" src={beer} alt="beergif"></img>}
    </div>
  );
}

export default Calculateur;
