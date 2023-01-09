import React from 'react'
import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav className='navigation'>
      <Link to="/">Inicio</Link>
      <Link to="/quienes-somos">Quienes somos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  )
}

export default Navigation