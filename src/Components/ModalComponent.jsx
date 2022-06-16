import React from "react";
import { Link } from "react-router-dom";
export const ModalComponent = ({ icon, direccion }) => {
  return (
    <Link to={direccion}>
      <p href="." className="btn-1">
        {" "}
        {icon}
      </p>
    </Link>
  );
};
