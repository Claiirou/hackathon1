import { Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "../pages/Accueil";

export default function Main() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}
