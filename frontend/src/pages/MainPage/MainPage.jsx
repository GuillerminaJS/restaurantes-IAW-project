import React from 'react'
import CarouselE from '../../components/CarouselE'
import './mainPage.css'


import CookieConsent from "react-cookie-consent";

const MainPage = () => {

  return (
    
    <main>

      <CookieConsent
        location="bottom"
        buttonText="yay :)"
        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}
        declineButtonText="nay :("
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>
      
      <CarouselE/>
      <div className='mp-div1'>
        <div className='filter-container'>
          <input type="text"/>
          <input type="number" />
          <select name="" id="">
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>
        </div>
        <div className='description-container'>
          <div className='div1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, qui! Deserunt deleniti aperiam esse tempora quidem similique architecto obcaecati sequi praesentium aspernatur ullam aliquid dolores quo, rem tempore soluta fugit.</div>
          <div className='div1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum vero autem non perferendis iusto dicta ipsa ipsum amet cumque accusamus, rem nemo quisquam facilis provident, harum, maiores commodi inventore?</div>
        </div>
      </div>
      <div className='mp-div2'>
        <section>a</section> 

        <aside>
        
          <h2>Noticias y novedades</h2>

          <section>Noticia 1</section>

          <section>Noticia 2</section>

          <section>Noticia 3</section>

        </aside>
      </div>
    </main>
    
  )
}

export default MainPage