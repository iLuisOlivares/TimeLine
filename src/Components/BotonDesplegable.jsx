import React from "react";
import "../css/boton.css";
import { ModalComponent } from "./ModalComponent";

const plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-4.5 -4.5 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"></path>
  </svg>
);

const img = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -4 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M18 8.503V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.504l4.39-7.322a3 3 0 0 1 4.69-.582L18 8.503zm0 2.823l-3.828-3.814a1 1 0 0 0-1.563.195L8.836 14H17a1 1 0 0 0 1-1v-1.674zM3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm3 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
  </svg>
);

const deletes = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -5 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M2,0 L12,0 C13.1045695,0 14,0.8954305 14,2 L14,12 C14,13.1045695 13.1045695,14 12,14 L2,14 C0.8954305,14 0,13.1045695 0,12 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M2,4 L2,12 L12,12 L12,4 L2,4 Z M7,9.41421356 L5.58578644,10.8284271 C5.19526215,11.2189514 4.56209717,11.2189514 4.17157288,10.8284271 C3.78104858,10.4379028 3.78104858,9.80473785 4.17157288,9.41421356 L5.58578644,8 L4.17157288,6.58578644 C3.78104858,6.19526215 3.78104858,5.56209717 4.17157288,5.17157288 C4.56209717,4.78104858 5.19526215,4.78104858 5.58578644,5.17157288 L7,6.58578644 L8.41421356,5.17157288 C8.80473785,4.78104858 9.43790283,4.78104858 9.82842712,5.17157288 C10.2189514,5.56209717 10.2189514,6.19526215 9.82842712,6.58578644 L8.41421356,8 L9.82842712,9.41421356 C10.2189514,9.80473785 10.2189514,10.4379028 9.82842712,10.8284271 C9.43790283,11.2189514 8.80473785,11.2189514 8.41421356,10.8284271 L7,9.41421356 Z"></path>
  </svg>
);

const home = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 24 24"
    width="24"
    fill="currentColor"
  >
    <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path>
  </svg>
);

export const BotonDesplegable = ({ handleClick }) => {
  return (
    <div className="container-button">
      <input type="checkbox" id="btn-mas" />
      <div className="toolkit">
        <ModalComponent
          direccion={"/Administrar"}
          icon={deletes}
        ></ModalComponent>
        <ModalComponent direccion={"/Nuevo"} icon={img}></ModalComponent>
        <ModalComponent direccion={"/"} icon={home}></ModalComponent>
      </div>

      <div className="btn-2 click">
        <label htmlFor="btn-mas">
          <div className="click">{plus}</div>
        </label>
      </div>
    </div>
  );
};
