import React from 'react';
import '../InfoCards/infocards.css';

function InfoCards(props) {
  const modalId = `modal-${props._id}`;

  return (
    <div>
      <div className="col-10 col-md-5 mx-1">
        <div className="card">
          <img
            src={props.imagen}
            alt=""
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          />
          <h2 className="card-title">{props.nombre}</h2>
          <div className="card-body"></div>
        </div>
      </div>

      <div>
        <div
          className="modal fade"
          id={modalId}
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
                      <img src={props.imagen} alt="" />
                      <h2 className="card-title">{props.nombre}</h2>
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
    </div>
  );
}

export default InfoCards;
