import React from "react";
import GaugeChart from "react-gauge-chart";
import "../styles/calculateur.css";

function Resultat({ resultat }) {
  return (
    <div>
      <div className="finalMessage">{`Cette consommation représente ${Math.floor(
        resultat * 100
      )}% de l'émission hebdomadaire moyenne de CO2 en France liée à l'alcool`}</div>
      <GaugeChart id="gauge-chart2" nrOfLevels={4} percent={resultat} />
    </div>
  );
}

export default Resultat;
