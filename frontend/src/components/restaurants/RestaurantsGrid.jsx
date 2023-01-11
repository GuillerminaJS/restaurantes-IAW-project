import React, {useState, useEffect} from 'react'
import RestaurantService from '../../services/RestaurantService.js';
import './restaurants.css';
import RestaurantCard from './RestaurantCard'

const RestaurantsGrid = ({ handleSearch }) => {

  // const [restaurant, setRestaurant] = useState([]);
    
  //   useEffect(() => {
  //       RestaurantService.getRestaurants().then(data=> setRestaurant(data));
  //   },[])
  return (

    <main className='restaurants-grid'>
      {/* {restaurant.map( e =>

            
        )} */}
        {
          handleSearch().map(e =>
            <RestaurantCard key={e.id} {...e}/>
          )
        }
    </main>
  )
}

export default RestaurantsGrid