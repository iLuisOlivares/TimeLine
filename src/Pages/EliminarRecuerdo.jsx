import React, { useState, useEffect } from "react";
import "../css/Administrar.css";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import { getRecuerdos } from "../helpers/fetchGet";

const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-3 -2 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path>
  </svg>
);

export const EliminarRecuerdo = () => {
  const url = "http://localhost:8080/api/recuerdos";

  const [body, setBody] = useState({
    id: null,
    activo: true
  });

  const [data, setData] = useState(null);

  const peticionGet = async () => {
    await axios.get(url).then(response => {
      console.log(response);
    });
  };

  const peticionDelete = async id => {
    await axios
      .post("http://localhost:8080/api/recuerdos/update/" + id)
      .then(response => {
        setData(data.filter(recuerdo => recuerdo.id !== id));
        console.log("eliminados");
      });
  };

  useEffect(() => {
    getRecuerdos(setData);
  }, []);

  return (
    <div className="top">
      <div className="tabla">
        {data == null ? (
          <div className="cont">
            <p>Cargando...</p>
          </div>
        ) : (
          <table className="table">
            <tr>
              <th className="columna">Id</th>
              <th className="columna">titulo</th>
              <th className="columna">fecha</th>
              <th className="columna"></th>
            </tr>
            {data.map(recuerdos => (
              <tr key={recuerdos.id}>
                <th>{recuerdos.id}</th>
                <th>{recuerdos.titulo}</th>
                <th>{recuerdos.fecha}</th>
                <th>
                  <button
                    onClick={() => {
                      peticionDelete(recuerdos.id);
                    }}
                  >
                    {trash}
                  </button>
                </th>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};
