
import { Routes, Route, Link } from "react-router-dom";
import { EliminarRecuerdo } from "./Pages/EliminarRecuerdo";
import { Inicio } from "./Pages/Inicio";
import { NuevoRecuerdo } from "./Pages/NuevoRecuerdo";
import { BotonDesplegable } from './Components/BotonDesplegable';

function App() {


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="Nuevo" element={<NuevoRecuerdo />} />
      <Route path="Administrar" element={<EliminarRecuerdo />} />
    </Routes>
    <BotonDesplegable/>

  </div>
    
  );
}

export default App;
