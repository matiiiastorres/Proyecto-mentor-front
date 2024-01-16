import React from 'react';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { MdEdit, MdSave, MdDelete } from 'react-icons/md';

function InfoAdminCard(props) {
  const urlBE = process.env.REACT_APP_URL_BE;
  const [editar, setEditar] = useState(false);

  const setEdit = () => {
    setEditar(true);
  };

  const { register, handleSubmit } = useForm();

  const onClick = async (data) => {
    const resp = await fetch(`${urlBE}/info`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await resp.json();
    setEditar(false);
    alert(`Informacion ${json.infoEditada.nombre} editada correctamente`);
    window.location.reload();
  };

  const eliminar = async (data) => {
    const del = await fetch(`${urlBE}/info`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await del.json();
    console.log(json.message);
    alert(`Informacion ${json.infoEliminada.nombre} eliminada`);
    window.location.reload();
  };

  return (
    <>
      <tbody>
        <tr className="tabla-fila">
          {/* <td className="d-none d-md-table-cell px-2">
            <input
              type="text"
              value={props.id}
              readOnly="readonly"
              className="input-tablas-consultas"
              {...register('id')}
            />
          </td> */}
          <td className="px-2">
            {editar ? (
              <input
                type="text"
                className="input-tablas-consultas"
                {...register('nombre')}
                maxLength="20"
              />
            ) : (
              <input
                type="text"
                value={props.nombre}
                readOnly="readonly"
                className="input-tablas-consultas"
                maxLength="20"
              />
            )}
          </td>
          <td className="px-2">
            {editar ? (
              <input
                type="text"
                className="input-tablas-consultas nombre"
                {...register('imagen')}
              />
            ) : (
              <input
                type="text"
                value={props.imagen}
                readOnly="readonly"
                className="input-tablas-consultas nombre"
              />
            )}
          </td>
          <td className="px-2">
            {editar ? (
              <button
                className="tablas-consultas-boton editar"
                onClick={handleSubmit(onClick)}
              >
                <MdSave />
              </button>
            ) : (
              <button
                className="tablas-consultas-boton editar"
                onClick={setEdit}
              >
                <MdEdit />
              </button>
            )}
            <button
              className="tablas-consultas-boton eliminar"
              onClick={handleSubmit(eliminar)}
            >
              <MdDelete />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default InfoAdminCard;
