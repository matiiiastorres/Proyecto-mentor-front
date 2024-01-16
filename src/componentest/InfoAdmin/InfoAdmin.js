import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InfoAdminCard from '../InfoAdminCard/InfoAdminCard';

function InfoAdmin() {
  const urlBE = process.env.REACT_APP_URL_BE;
  const [data, getadata] = useState([]);

  const getInfo = async () => {
    const res = await fetch(`${urlBE}/info`);
    const json = await res.json();
    getadata(json.info);
  };

  useEffect(() => {
    getInfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="container contenedor-cards-areas">
      <table className="tabla-consultas w-100 mb-5">
        <thead className="encabezado-tabla">
          <tr>
            <th className="fw-bold d-none d-md-table-cell p-2">ID</th>
            <th className="fw-bold p-2">Nombre</th>
            <th className="fw-bold p-2">Imagen</th>
            {/* <th className="fw-bold p-2">Informacion</th> */}
            <th></th>
          </tr>
        </thead>
        {data.map((item) => (
          <InfoAdminCard
            nombre={item.nombre}
            informacion={item.informacion}
            imagen={item.imagen}
            id={item._id}
            key={item._id}
          />
        ))}
      </table>
    </section>
  );
}

export default InfoAdmin;
