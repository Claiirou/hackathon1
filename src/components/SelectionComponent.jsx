import React from "react";
import "../styles/selection.css";
import Cosmopolitan from "../assets/cosmopolitan-martini.png";
import Green from "../assets/green-gobelin.png";
import Greyhound from "../assets/greyhound.png";
import Queen from "../assets/queen-charlotte.png";
import Tequila from "../assets/tequila-sunrise.png";

function SelectionComponent() {
  return (
    <div>
      <div className="componentContainer">
        <h2 className="cocktailTitle">Greyhound</h2>
        <div className="selectionContainer">
          <img src={Greyhound} alt="Greyhound" />
          <div className="textContainerLeft">
            <p className="firstParagraph">Ingrédients</p>
            <p className="secondParagraph">Vodka</p>
            <p className="thirdParagraph">Pamplemousse</p>
          </div>
          <div className="textContainerRight">
            <p className="firstParagraph">
              CO<sub>2</sub> / produit
            </p>
            <p className="secondParagraph">1.16</p>
            <p className="thirdParagraph">0.41</p>
          </div>
        </div>
      </div>
      <div className="componentContainer">
        <h2 className="cocktailTitle">Queen Charlotte</h2>
        <div className="selectionContainer">
          <img src={Queen} alt="Queen Charlotte" />
          <div className="textContainerLeft">
            <p className="firstParagraph">Ingrédients</p>
            <p className="secondParagraph">Vin Rouge</p>
            <p className="thirdParagraph">Grenadine</p>
            <p className="fourthParagraph">Limonade</p>
          </div>
          <div className="textContainerRight">
            <p className="firstParagraph">
              CO<sub>2</sub> / produit
            </p>
            <p className="secondParagraph">1.13</p>
            <p className="thirdParagraph">1.06</p>
            <p className="fourthParagraph">0.57</p>
          </div>
        </div>
      </div>
      <div className="componentContainer">
        <h2 className="cocktailTitle">Green Gobelin</h2>
        <div className="selectionContainer">
          <img src={Green} alt="Green Gobelin" />
          <div className="textContainerLeft">
            <p className="firstParagraph">Ingrédients</p>
            <p className="secondParagraph">Cidre</p>
            <p className="thirdParagraph">Lager</p>
            <p className="fourthParagraph">Curaçao bleu</p>
          </div>
          <div className="textContainerRight">
            <p className="firstParagraph">
              CO<sub>2</sub> / produit
            </p>
            <p className="secondParagraph">0.98</p>
            <p className="thirdParagraph">1.09</p>
            <p className="fourthParagraph">1.25</p>
          </div>
        </div>
      </div>
      <div className="componentContainer">
        <h2 className="cocktailTitle">Tequila Sunrise</h2>
        <div className="selectionContainer">
          <img src={Tequila} alt="Tequila Sunrise" />
          <div className="textContainerLeft">
            <p className="firstParagraph">Ingrédients</p>
            <p className="secondParagraph">Tequila</p>
            <p className="thirdParagraph">Grenadine</p>
            <p className="fourthParagraph">Jus d’orange</p>
          </div>
          <div className="textContainerRight">
            <p className="firstParagraph">
              CO<sub>2</sub> / produit
            </p>
            <p className="secondParagraph">1.16</p>
            <p className="thirdParagraph">1.06</p>
            <p className="fourthParagraph">0.80</p>
          </div>
        </div>
      </div>
      <div className="componentContainer">
        <h2 className="cocktailTitle">Cosmopolitan Martini</h2>
        <div className="selectionContainer">
          <img src={Cosmopolitan} alt="Cosmopolitan Martini" />
          <div className="textContainerLeft">
            <p className="firstParagraph">Ingrédients</p>
            <p className="secondParagraph">Cointreau</p>
            <p className="thirdParagraph">Vodka</p>
            <p className="fourthParagraph">Jus de citron</p>
            <p className="fifthParagraph">Cranberry</p>
          </div>
          <div className="textContainerRight">
            <p className="firstParagraph">
              CO<sub>2</sub> / produit
            </p>
            <p className="secondParagraph">1.15</p>
            <p className="thirdParagraph">1.16</p>
            <p className="fourthParagraph">0.94</p>
            <p className="fifthParagraph">0.41</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionComponent;
