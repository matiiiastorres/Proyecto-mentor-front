import React from 'react'
import './navbarAdmin.css'
import { Link } from 'react-router-dom'
import Logotipo from '../../Assets/Logotipo.png'
import {FaSignOutAlt} from 'react-icons/fa'

function NavbarAdmin() {

  const deleteLocal =()=>{
    localStorage.clear('admin')
  }
  return (
    <section className='navbar-admin'>
      <img src={Logotipo} alt="Logotipo clinica rolling code" className='logo-admin'/>
      <div className='items-admin-container'>
        <Link to="/usuarios-consultas" className='items-navbar-admin'>Usuarios</Link>
        <Link to="/turnos-consultas" className='items-navbar-admin'>Turnos</Link>
        <Link to="/areas-consultas" className='items-navbar-admin'>Altas de Areas</Link>
        <Link to="/medicos-consultas" className='items-navbar-admin'>Altas de Medicos</Link>
      </div>
      <Link to='/' >
        <button className='boton-admin' title='volver a pagina de usuarios' onClick={deleteLocal}><FaSignOutAlt/></button>
      </Link>
    </section>
  )
}

export default NavbarAdmin