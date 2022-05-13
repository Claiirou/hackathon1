import { Routes, Route } from "react-router-dom";
import React from "react";
import Accueil from "../pages/Accueil";
import Calculateur from "../pages/Calculateur";
import Selection from "../pages/Selection";

export default function Main() {
  return (
    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/calculateur" element={<Calculateur />} />
        <Route path="/selection" element={<Selection />} />
      </Routes>
    </main>
  );
}
