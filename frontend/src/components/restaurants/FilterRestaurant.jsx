import React,{useState, useEffect} from 'react'
import TypeService from '../../services/TypeService';
import RestaurantService from '../../services/RestaurantService';

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

      <div>
      <input type="text" name='filterName' placeholder='Search'
        onChange={event=> { setQuery(event.target.value) }}/>
      </div>

      <select name='filterAp' 
            onChange={event=>{ JSON.stringify(setFilterAp(event.target.value)) } }>
        
            <option value="">-</option>
            {
                ap.map(e=> <option key={e._id} value={e.averagePrice}>{e.averagePrice}€</option>)
            }
        </select>
          
      <select name='filterMaterial' 
            onChange={event=>{ setFilterType(event.target.value) } }>
        
            <option value="">Tipos</option>
            {
                types.map(e=> <option key={e._id} value={e.name}>Comida {e.name}</option>)
            }
        </select>
    </div>
  )
}

export default FilterRestaurant