// React stuff & imports
import React from 'react'
import { Link } from 'react-router-dom';
// ...

// Styles
import './footer.css'
// ...

const Footer = () => {
  return (

    <footer>

      <nav className="footer-nav">

        <ul className="footer-nav-list">

          <li>
            <h2 className="nav-title">Colaboradores</h2>
          </li>
          <li><a href="#">Mil y un Anuncios</a></li>
          <li><a href="#">Restaurantes a par</a></li>

        </ul>

        <ul className="footer-nav-list">
          
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/politica-cookies">Política cookies</Link>

        </ul>

        <ul className="footer-nav-list">

          <Link to="/politica-privacidad">Politica de privacidad</Link>
          <Link to="/dpo">DPO</Link>

        </ul>

        <ul className="footer-nav-list">

          <li>
            <h2 className="nav-title">Patrocinadores</h2>
          </li>
       
            <img src="/assets/img/patros.png"  className="patro"/>

        </ul>

      </nav>

      <section className="footer-bottom">

        <img src="/assets/img/payment.png" alt="payment method" className="payment-img"/>
        <p className="copyright">
          Copyright &copy; Dress all rights reserved.
        </p>

      </section>
      
    </footer>
  )
}

export default Footer