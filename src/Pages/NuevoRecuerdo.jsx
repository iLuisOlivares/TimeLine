import React, { useState, useRef } from "react";
import "../css/nuevoRecuerdo.css";
import axios from "axios";
import Swal from "sweetalert2";

export const NuevoRecuerdo = () => {
  const [uploadImg, setUpload] = useState(false);
  const [body, setBody] = useState({
    titulo: "",
    imgUrl: "",
    descripcion: "Con amor",
    fecha: "",
    activo: true
  });
  const inputElement = useRef();

  const subir_imagen = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "recuerdosPreset");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/iluiss/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    const name = "imgUrl";
    setBody(prevState => ({
      ...prevState,
      [name]: file.secure_url
    }));
    setUpload(true);
  };

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
    if (uploadImg === false) {
      Swal.fire({
        title: "No se ha cargado la imagen",
        text: "Vuelve a intentarlo en 1 segundo",
        position: "top-end",
        icon: "error",
        timer: 2000,
        showConfirmButton: false
      });
    } else {
      Swal.fire({
        icon: "success",
        position: "top-end",
        timer: 1500,
        title: "Tu recuerdo ha sido guardado exitosamente!!",
        showConfirmButton: false
      });

      peticionPost(url, body);
      setBody({
        titulo: "",
        imgUrl: "",
        descripcion: "Con amor",
        fecha: "",
        activo: true
      })
      inputElement.current.value = ""
    }
  };
  return (
    <div className="top">
      <form onSubmit={handleOnSubmit} className="form">
        <div className="title">Hola!</div>
        <div className="subtitle">
          Aqui puedes registrar un nuevo recuerdo{" "}
          <span role="img" aria-label="word">🎆 🌉 🌆</span>
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
            onChange={subir_imagen}
            ref={inputElement}
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
