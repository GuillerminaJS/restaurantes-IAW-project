import React,{useState, useEffect} from 'react'
import TypeService from '../../services/TypeService';
import RestaurantService from '../../services/RestaurantService';

import {FaSistrix} from 'react-icons/fa'

const FilterRestaurant = ({setQuery, setFilterType, setFilterAp}) => {

  const [types, setTypes] = useState([]);
  const [ap, setAp] = useState([])
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    TypeService.getType().then(data=>setTypes(data));
},[]);

useEffect(()=>{
  RestaurantService.getRestaurants().then(data=>setAp(data));
},[]);

  return (
    <div className='filter-div'>

      <div className='input-div'>
      <input type="text" name='filterName' placeholder='Introduza nombre del restaurante'
        onChange={event=> { setQuery(event.target.value) }}/> <button className='btn-search'><FaSistrix /></button>
      </div>

      <label> Filtra precio medio
      <select name='filterAp' 
            onChange={event=>{ JSON.stringify(setFilterAp(event.target.value)) } }>
        
            <option value="">-</option>
            {
                ap.map(e=> <option key={e._id} value={e.averagePrice}>{e.averagePrice}€</option>)
            }
        </select>
      </label>
          
      <label>
        Filtra tipo de restaurante
        <select name='filterMaterial' 
              onChange={event=>{ setFilterType(event.target.value) } }>
          
              <option value="">-</option>
              {
                  types.map(e=> <option key={e._id} value={e.name}>Comida {e.name}</option>)
              }
          </select>
      </label>

    </div>
  )
}

export default FilterRestaurant