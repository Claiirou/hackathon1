import React from "react";
import GaugeChart from "react-gauge-chart";

function Resultat({ resultat }) {
  return (
    <div>
      <GaugeChart id="gauge-chart2" nrOfLevels={4} percent={resultat} />
      <div className="reference">De la consommation annuelle française !</div>
    </div>
  );
}

export default Resultat;
