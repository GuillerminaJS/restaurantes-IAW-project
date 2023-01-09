import React from 'react'
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselE = () => {
  return (
    <Carousel>
        <div className='imgC'>
            <img src="/assets/img/carousel1.jpg" alt="img1" />
        </div>
        <div className='imgC'>
            <img src="/assets/img/carousel2.jpg" alt="img2" />
        </div>
        <div className='imgC'>
            <img src="/assets/img/carousel3.jpg" alt="img3" />
        </div>
      </Carousel>
  )
}

export default CarouselE