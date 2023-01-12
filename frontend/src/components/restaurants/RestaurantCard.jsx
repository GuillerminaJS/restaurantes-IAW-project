import React from 'react'
import { Link } from 'react-router-dom';
import {FaRegPlusSquare, FaGripLinesVertical} from 'react-icons/fa';

const RestaurantCard = ({_id, name, averagePrice, type, img}) => {
  return (
    <article className='card-grid'>
        <img src={`http://localhost:8800/api/images/${img}`} alt="" />
        <h2>{name}</h2>
        <div className='subart'>
          <div className='subinfo'>
            <p> Precio medio: {averagePrice}€</p>
            <p> Restaurante de comida{type.name}</p>
          </div>
          <Link to={"/restaurants/"+_id} className="detail-btn"><FaRegPlusSquare/></Link>
        </div>
        
    </article>
  )
}

export default RestaurantCard