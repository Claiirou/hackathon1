import React from "react";
import "../styles/selection.css";
import Cosmopolitan from "../assets/cosmopolitan-martini.png";
import Green from "../assets/green-gobelin.png";
import Greyhound from "../assets/greyhound.png";
import Queen from "../assets/queen-charlotte.png";
import Tequila from "../assets/tequila-sunrise.png";

function SelectionComponent() {
  return (
    <div className="greyhound">
      <div className="selectionContainer">
        <h2 className="cocktailTitle">Greyhound</h2>
        <img src={Greyhound} alt="greyhound" />
        <div className="textContainer"></div>
      </div>
    </div>
  );
}

export default SelectionComponent;
