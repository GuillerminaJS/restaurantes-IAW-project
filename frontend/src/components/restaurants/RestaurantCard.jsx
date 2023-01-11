import React from 'react'
import { Link } from 'react-router-dom';
import {FaRegPlusSquare} from 'react-icons/fa';

const RestaurantCard = ({_id, name, averagePrice, type, img}) => {
  return (
    <article>
        <img src={`http://localhost:8800/api/images/${img}`} alt="" />
        <h2>{name}</h2>
        <div className='subart'>
          <div className='subinfo'>
            <p>{averagePrice}</p>
            <p>{type.name}</p>
          </div>
          <Link to={"/restaurants/"+_id}><FaRegPlusSquare/></Link>
        </div>
        
    </article>
  )
}

export default RestaurantCard