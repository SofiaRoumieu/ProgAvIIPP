import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Detalle from "../pages/Detalle";
import Listado from "../pages/Listado";

const Ruteador = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Listado />} />
                <Route path="/detalle/:name" element={<Detalle/>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default Ruteador