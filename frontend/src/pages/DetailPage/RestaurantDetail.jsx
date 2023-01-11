import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { URL_API_RESTAURANTS } from '../../constants/app_constants';

const RestaurantDetail = () => {

  const [restaurant, setRestaurant] = useState(null);
  const {idRestaurant} = useParams();

  const getRestaurant = async(idRestaurant) => {
    try{
      const res = await fetch(URL_API_RESTAURANTS);
      const data = await res.json();
      const restaurantData = data.find(e=>e._id==idRestaurant);
      setRestaurant(restaurantData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    ()=>{
      getRestaurant(idRestaurant);
    },[])
    http://localhost:8800/api/images/restaurante1.jpeg
  return (
    <main>
      {
        restaurant &&
        <article>
          <img src={`http://localhost:8800/api/images/${restaurant.img}`} alt="" />
          <h2>{restaurant.name}</h2>
        </article>
      }
    </main>
  )
}

export default RestaurantDetail