/* eslint-disable no-unused-vars */
import React from 'react'
import './hero.css'
import ImgMedicos from '../../Assets/Imagen medicos.png'
import Logotipo from '../../Assets/Logotipo.png'
import Whatsapp from '../whatsapp/Whatsapp'


function Hero() {
  return (
    <section className='hero d-flex flex-column align-items-center justify-content-center d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-evenly px-3 '>
      <div className='hero-txt-container'>
        <img src={Logotipo} alt="Logotipo" className='hero-logo' />
        <h2 className='hero-txt'>Ofrecemos un servicio de salud polivalente, que incluye entre sus prestaciones a las cuatro especialidades básicas (clínica médica, cirugía general, pediatría y gineco-obstetricia).</h2>
      </div>
      <div className='hero-img-container d-none d-lg-flex'>
        <img src={ImgMedicos} alt="Medicos de la clinica" className='hero-img' />
      </div>
    </section>
  )
}

export default Hero