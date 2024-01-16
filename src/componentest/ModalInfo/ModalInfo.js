import React from 'react';
import './ModalInfo.css';

function ModalInfo(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalInfo"
      >
        abre para ver los resultados
      </button>

      <div
        className="modal fade"
        id="modalInfo"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="card-body">
                <div className="col-10 col-md-5 mx-1">
                  <div className="card">
                    <h2 className="card-title">{props.nombre}</h2>
                    <img src={props.imagen} alt="" />
                    <p className="card-text">{props.informacion}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
