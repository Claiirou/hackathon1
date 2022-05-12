import { Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "../pages/Accueil";
import Calculateur from "../pages/Calculateur";

export default function Main() {
  return (
    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/calculateur" element={<Calculateur />} />
      </Routes>
    </main>
  );
}
