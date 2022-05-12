import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
