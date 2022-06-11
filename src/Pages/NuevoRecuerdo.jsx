import React, { useState } from "react";
import "../css/nuevoRecuerdo.css";
import axios from "axios";

export const NuevoRecuerdo = () => {
  const [body, setBody] = useState({
    titulo: "",
    imgUrl: "",
    descripcion: "Con amor",
    fecha: "",
    activo: true
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBody(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const url = "http://localhost:8080/api/recuerdos/save";

  const peticionPost = async () => {
    await axios.post(url, body).then(response => {
      console.log(response);
    });
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(body);
    peticionPost(url, body);
  };
  return (
    <div className="top">
      <form onSubmit={handleOnSubmit} className="form">
        <div className="title">Hola!</div>
        <div className="subtitle">
          Aqui puedes registrar un nuevo recuerdo 🎆 🌉 🌆
        </div>
        <div className="input-container ic1">
          <input
            name="titulo"
            value={body.titulo}
            id="titulo"
            required
            className="input"
            type="text"
            onChange={handleChange}
            placeholder=" "
          />

          <div className="cut"></div>
          <label htmlFor="titulo" className="placeholder">
            Titulo
          </label>
        </div>
        <div className="input-container ic2">
          <input
            value={body.fecha}
            onChange={handleChange}
            id="fecha"
            required
            className="input"
            type="date"
            name="fecha"
          />
          <div className="cut"></div>
          <label htmlFor="fecha" className="placeholder">
            Fecha
          </label>
        </div>
        <div className="input-container ic2">
          <input
            accept="image/*"
            id="imagen"
            required
            className="esconder input file-select pointer"
            type="file"
            placeholder=" "
          />
          <div className="cut cut-short"></div>
          <label htmlFor="imagen" className="placeholder">
            Imagen
          </label>
        </div>
        <button type="submit" className="submit">
          Subir
        </button>
      </form>
    </div>
  );
};
