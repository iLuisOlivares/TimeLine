import { Routes, Route } from "react-router-dom";
import { EliminarRecuerdo } from "./Pages/EliminarRecuerdo";
import { Inicio } from "./Pages/Inicio";
import { NuevoRecuerdo } from "./Pages/NuevoRecuerdo";
import { BotonDesplegable } from "./Components/BotonDesplegable";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="Nuevo" element={<NuevoRecuerdo />} />
        <Route path="Administrar" element={<EliminarRecuerdo />} />
      </Routes>
      <BotonDesplegable />
    </div>
  );
}

export default App;
