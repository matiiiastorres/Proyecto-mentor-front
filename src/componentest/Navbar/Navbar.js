import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Boton1 from '../Boton1/Boton1';
import './navbar.css';

const Nabvar = () => {
  const [logeado, setlogin] = useState(false)
  const [usuario, setUsuario] = useState({})

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    if(!usuario){
      return
    }else{
      setUsuario(usuarios)
      setlogin(usuarios)
    }
  }

  useEffect(()=>{
    login()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const logout=()=>{
    localStorage.clear('Usuario')
    window.location.href='/'
  }

    return (
        <div>
          <nav className="navbar fixed-top top-0 navbar-expand-lg navbar-dark p-md-3">
            <div className="container-fluid">
              <a className="navbar-brand text-dark" href="/">Clinica Rolling Code</a>
              <button
                className="navbar-toggler text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-dark active" aria-current="page" href="/#nosotros"
                      >Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark active" href="/#areas">Especializaciones</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark active" href="/#contacto">Contacto</a>
                  </li>
                  <div className="d-flex">
                    <Boton1 link='/turnos' name="Turnos" />
                  </div>
                  {
                    logeado? 
                    <div className="dropdown ms-md-1">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      {usuario?.user.nombre}
                      </button>
                      <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
                        <li><a className='dropdown-item' href="/perfil">Perfil</a></li>
                        <li><button className='dropdown-item' onClick={logout}>Cerrar Sesión</button></li>
                      </ul>
                    </div>
                    // <li className="nav-item d-flex align-items-center"><a className='a-usuario' href='/perfil'> {usuario?.user.nombre} </a></li> : 
                    :                  
                    <div className="d-flex">
                      <Boton1 link='/login' name="Iniciar Sesion" />
                    </div>

                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Nabvar;