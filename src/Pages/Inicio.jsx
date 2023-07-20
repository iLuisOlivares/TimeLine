import React from "react";
import "../css/container.css";
import { CardTime } from "../Components/CardTime";
import { useFetch } from "../hooks/useFetch";

export const Inicio = () => {
  const url = "http://localhost:8080/api/recuerdos";
  const { data, loading } = useFetch(url);
  return (
    <div>
      <div className="hero">
        <p className="titulo">
          Nuestros <span className="span">recuerdos </span>
        </p>
      </div>
      {loading === true ? (
        <div className="cargando">
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="container">
          {data.map(recuerdo => (
            <CardTime
              key={recuerdo.id}
              title={recuerdo.titulo}
              date={recuerdo.fecha}
              imgUrl={recuerdo.imgUrl}
            ></CardTime>
          ))}
        </div>
      )}
    </div>
  );
};
