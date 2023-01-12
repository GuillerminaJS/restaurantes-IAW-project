import React, { useRef } from 'react'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import ListRestaurants from './ListRestaurants';
import RestaurantService from '../../../services/RestaurantService';
import TypeService from '../../../services/TypeService';
import { useEffect } from 'react';

import './restaurant.css'

const FormRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [message, setMessage] = useState("");
    const [types, setTypes] = useState([]);

    const inputName = useRef(null);
    const inputDescription = useRef(null);
    const inputImage = useRef(null);
    const inputDirection = useRef(null);
    const inputPhone = useRef(null);
    const inputPlates = useRef(null);
    const inputAveragePrice = useRef(null);
    const inputType = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const restaurant = {
            "name": inputName.current.value,
            "description": inputDescription.current.value,
            "img": inputImage.current.value,
            "direction": inputDirection.current.value,
            "phone": inputPhone.current.value,
            "plates": inputPlates.current.value,
            "averagePrice": inputAveragePrice.current.value,
            "type": inputType.current.value
        }
        RestaurantService.new(restaurant).then(data =>{
            document.getElementById("frm-restaurant").reset();
            setMessage(data.message)
        });
        
    } 

    const handleDelete = (id) => {
        RestaurantService.delete(id).then(data => setMessage(data.message));
    }
    
    useEffect(()=>{
        RestaurantService.getRestaurants().then(data=>setRestaurants(data));
    },[message]);

    useEffect(()=>{
        TypeService.getType().then(data=>setTypes(data));
    },[]);

  return (
    <div className='form-container'>
    <form id="frm-restaurant" name="frm-restaurant" onSubmit={e => handleSubmit(e)}>
        <h2>Restaurant data</h2>
        <section className='firstRow'>
            
                <label htmlFor='restaurant-name'>Name</label>
                <input type="text" maxLength='20' id="restaurant-name" required placeholder='name' ref={inputName} />
            
                <label htmlFor='restaurant-description'>Description</label>
                <input type="text" maxLength='20' id="restaurant-description" required placeholder='description' ref={inputDescription} />
           
                <label htmlFor='restaurant-img'>Image</label>
                <input type="text" maxLength='20' id="restaurant-img" required placeholder='image' ref={inputImage} />
           
                <label htmlFor='restaurant-dir'>Direction</label>
                <input type="text" maxLength='20' id="restaurant-dir" required placeholder='direction' ref={inputDirection} />
            
                <label htmlFor='restaurant-phone'>Phone</label>
                <input type="text" maxLength='20' id="restaurant-phone" required placeholder='phone' ref={inputPhone} />
           
                <label htmlFor='restaurant-plates'>Plates</label>
                <input type="text" maxLength='20' id="restaurant-plates" required placeholder='plaets' ref={inputPlates} />
           
                <label htmlFor='restaurant-averagePrice'>Average price</label>
                <input type="text" maxLength='20' id="restaurant-averagePrice" required placeholder='plaets' ref={inputAveragePrice} />
           
           
                <label>Types</label>
                <select name="typeRestaurant" id="typeRestaurant" ref={inputType}>
                    {
                        types.map(e=>
                            <option key={e._id} value={e._id}> {e.name}</option>
                        )
                    }
                </select>
          
            
        </section>
        <section className='panelButton'>
            <div className='input-box'>
                <button><FaEdit size='16' /> New Comment</button>
            </div>
        </section>
    </form>
    {message && <div className='action-message'>{message}</div>}
    
    <section id='restaurantsList'>
            <h2>Restaurants List</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Direction</th>
                        <th>Phone</th>
                        <th>Plates</th>
                        <th>Type</th>
                        <th>Img</th>
                        <th>Average Price</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((e, index) => <ListRestaurants key={e._id} 
                                                                index={index + 1}{...e}
                                                                handleDelete={handleDelete}
                                                                setMessage={setMessage}
                    />)}
                </tbody>
            </table>
        </section>
</div>
  )
}

export default FormRestaurants