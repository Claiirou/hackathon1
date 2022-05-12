import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Calculateur from "./pages/Calculateur";

function App() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/calculateur" element={<Calculateur />} />
      </Routes>
    </div>
  );
}

export default App;
