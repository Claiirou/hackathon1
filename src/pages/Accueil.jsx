import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Accueil = () => {
    return (
        <div className="routesContainer">
            <Routes>
                <Route path='/' element={<Accueil/>} />
            </Routes>
        </div>
    );
};

export default Accueil;