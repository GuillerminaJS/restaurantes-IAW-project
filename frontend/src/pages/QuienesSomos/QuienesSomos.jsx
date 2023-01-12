import React from 'react'
import Header from '../../components/common/Header/Header'
import './quienesSomos.css'

const QuienesSomos = () => {
  return (
    <main className='quienesSomos'>
        <h1> Bienvenido a UBERANTE. </h1>
        <img src={`assets/img/equipoAdministrativo.jpg`} alt="" className='equipo'/>
        <p> Bienvenido en la pagina de reseñas de restaurante </p>
    </main>
  )
}

export default QuienesSomos