import React, { useState, useEffect } from "react";
import "../css/Administrar.css";
import axios from "axios";
import { getRecuerdos } from "../helpers/fetchGet";
import DataTable from "react-data-table-component";
import "styled-components";
import differenceBy from "lodash/differenceBy";

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
          `Estas segura que quieres eliminar?:\r ${selectedRows.map(
            r => r.titulo
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        selectedRows.map(r => peticionDelete(r.id));
        setData(differenceBy(data, selectedRows, "id"));
      }
    };

    return (
      <button className="boton" key="delete" onClick={handleDelete}>
        Eliminar
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  const columns = [
    
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

  const peticionDelete = async id => {
    await axios
      .post("https://recuerdos-app-karen.herokuapp.com/api/recuerdos/update/" + id)
      .then(response => {
        console.log("eliminados");
      });
  };

  useEffect(() => {
    getRecuerdos(setData);
  }, []);
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
