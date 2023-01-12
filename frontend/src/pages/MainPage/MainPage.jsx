import React, {useState, useEffect} from 'react'
import CarouselE from '../../components/CarouselE'
import './mainPage.css'

import RestaurantsGrid from '../../components/restaurants/RestaurantsGrid';
import FilterRestaurant from '../../components/restaurants/FilterRestaurant';
import RestaurantService from '../../services/RestaurantService.js';

import CookieConsent from "react-cookie-consent";

const MainPage = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterAp, setFilterAp] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    return restaurants.filter(e=>
      e.name.toUpperCase().includes(query.toUpperCase()) && e.type.name.includes(filterType) && JSON.stringify(e.averagePrice).includes(filterAp)
      );
      
  }
  

  useEffect(
    ()=>{
      RestaurantService.getRestaurants().then(data => setRestaurants(data));
    },[])

  return (
    
    <main>

      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        enableDeclineButton
        onDecline={() => {
          alert("Cookies no aplicadas");
        }}
        declineButtonText="No aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        
      >
        Esta pagina web usa cookies para mejorar la experiencia del usuario{" "}
      </CookieConsent>
      
      <CarouselE/>
      <div className='mp-div1'>
        
        <div className='filter-container'>
          <FilterRestaurant setQuery={setQuery} setFilterType={setFilterType} setFilterAp={setFilterAp}/>
        </div>
        <div className='description-container'>
          <div className='div1'>Uberante  es una plataforma online en la que se recogen millones de opiniones sobre restaurantes. </div>
          <div className='div1'>En esta página se pueden encontrar todo tipo de opiniones y búsquedas de restaurantes, tanto como precio medio como por tipos de comida, también se puede buscar por nombre para ver que opinan nuestros usuarios sobre el restaurante. Tú también puedes colaborar y opinar sobre los restaurantes.</div>
        </div>
      </div>
      <div className='mp-div2'>
        <section><RestaurantsGrid handleSearch={handleSearch}/></section> 

        <aside>
        
          <h2 className='tituloNoticias'>Noticias y novedades</h2>

          <section className='noticia'>
            <h5>Pepita Burger Bar</h5>
            <p>¡Solo HOY un 2x1 en todas las nuestras hamburguesas de la carta!</p>
          </section>

          <section className='noticia'>
            <h5>Koh</h5>
            <p>Ven y prueba nuestro nuevo plato estrella, cangrejo rebozado con salsa teriyaki. Ven y atrévete a probarlo.</p>
          </section>

          <section className='noticia'>
            <h5>Wineing</h5>
            <p>Oferta exclusiva de cata de vinos con tapas incluidas, solo hasta fin de existencias.</p>
          </section>

          <section className='noticia'>
            <h5>Pepita Burger Bar</h5>
            <p>¡Solo HOY un 2x1 en todas las nuestras hamburguesas de la carta!</p>
          </section>

          <section className='noticia'>
            <h5>Koh</h5>
            <p>Ven y prueba nuestro nuevo plato estrella, cangrejo rebozado con salsa teriyaki. Ven y atrévete a probarlo.</p>
          </section>

          <section className='noticia'>
            <h5>Wineing</h5>
            <p>Oferta exclusiva de cata de vinos con tapas incluidas, solo hasta fin de existencias.</p>
          </section>

          <section className='noticia'>
            <h5>Koh</h5>
            <p>Ven y prueba nuestro nuevo plato estrella, cangrejo rebozado con salsa teriyaki. Ven y atrévete a probarlo.</p>
          </section>

        </aside>
      </div>
    </main>
    
  )
}

export default MainPage