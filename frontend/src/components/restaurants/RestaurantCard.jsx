import React from 'react'
import { Link } from 'react-router-dom';
import {FaRegPlusSquare} from 'react-icons/fa';

const RestaurantCard = ({_id, name, averagePrice, type}) => {
  return (
    <article>
        <h2>{name}</h2>
        <Link to={"/restaurants/"+_id}><FaRegPlusSquare/></Link>
    </article>
  )
}

export default RestaurantCard