import React from "react";
import "../css/cardStyle.css";
import Swal from "sweetalert2";

import "animate.css";

export const CardTime = ({ title, date, imgUrl }) => {
  const transformar_fecha = fecha => {
    const [año, mes, dia] = fecha.split("-");

    return `${dia}. ${mes}. ${año}`;
  };
  const fech = transformar_fecha(date);
  const transformar_fecha2 = fecha => {
    const [año, mes, dia] = fecha.split("-");
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    return `${dia} de ${meses[Number(mes - 1)]} del ${año}`;
  };
  const clickImagen = () => {
    Swal.fire({
      title: title,
      text: fech,
      showConfirmButton: false,
      imageUrl: imgUrl,
      imageAlt: title,
      customClass: {
        popup: "mar",
        image: "imagen",
        title: "font2",
        confirmButton: "color-principal",
        htmlContainer: "font"
      },
      showClass: {
        popup: "animate__animated animate__bounceInDown"
      },
      hideClass: {
        popup: "animate__animated animate__backOutUp"
      }
    });
  };

  return (
    <div className="evento">
      <div onClick={clickImagen} className="foto" data-aos="fade-up">
        <img src={imgUrl} alt="" />
        <p className="pie resaltar">{title}</p>
        <p className="resaltar sec">{fech}</p>
      </div>
      <h3 className="fecha resaltar">{transformar_fecha2(date)}</h3>
    </div>
  );
};
