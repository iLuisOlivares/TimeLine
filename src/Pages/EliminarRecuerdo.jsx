import React, { useState, useEffect } from "react";
import "../css/Administrar.css";
import axios from "axios";
import { getRecuerdos } from "../helpers/fetchGet";
import DataTable, { createTheme } from "react-data-table-component";
import "styled-components";
import differenceBy from "lodash/differenceBy";
import { ButtonComponent } from "../Components/ButtonComponent";

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
  const [data, setData] = useState(null);

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            r => r.titulo
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        console.log(selectedRows);
        selectedRows.map(r => {
          peticionDelete(r.id);
        });
        setData(differenceBy(data, selectedRows, "id"));
      }
    };

    return (
      <button className="boton" key="delete" onClick={handleDelete} icon>
        Eliminar
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  const peticionDelete = async id => {
    await axios
      .post("http://localhost:8080/api/recuerdos/update/" + id)
      .then(response => {
        console.log("eliminados");
      });
  };

  useEffect(() => {
    getRecuerdos(setData);
  }, []);

  const columns = [
    {
      name: "Id",
      selector: row => row.id
    },
    {
      name: "Titulo",
      selector: row => row.titulo,
      sortable: true
    },
    {
      name: "Fecha",
      selector: row => row.fecha,
      sortable: true
    }
  ];

  return (
    <div className="view">
      <div className="top">
        <div className="tabla">
          {data == null ? (
            <div className="cont">
              <p>Cargando...</p>
            </div>
          ) : (
            <div>
              <DataTable
                title="Recuerdos"
                direction="auto"
                fixedHeader
                fixedHeaderScrollHeight="380px"
                columns={columns}
                data={data}
                pagination
                responsive
                highlightOnHover
                dense
                striped
                contextActions={contextActions}
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
              ></DataTable>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
