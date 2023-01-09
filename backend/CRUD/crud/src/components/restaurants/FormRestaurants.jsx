import React, { useRef } from 'react'
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import ListRestaurants from './ListRestaurants';
import RestaurantService from '../../services/RestaurantService';
import TypeService from '../../services/TypeService';
import { useEffect } from 'react';

const FormRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [message, setMessage] = useState("");
    const [types, setType] = useState([]);

    const inputName = useRef(null);
    const inputDescription = useRef(null);
    const inputImage = useRef(null);
    const inputDirection = useRef(null);
    const inputPhone = useRef(null);
    const inputPlates = useRef(null);
    const inputHalfPrice = useRef(null);
    const inputTypeFood = useRef(null);
    
    useEffect(()=>{
        RestaurantService.getRestaurants().then(data=>setRestaurants(data));
    },[message]);

    useEffect(()=>{
        TypeService.getType().then(data=>setType(data));
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const restaurant = {
            "name": inputName.current.value,
            "description": inputDescription.current.value,
            "img": inputImage.current.value,
            "direction": inputDirection.current.value,
            "phone": inputPhone.current.value,
            "plates": inputPlates.current.value,
            "halfPrice": inputHalfPrice.current.value,
            "type": inputTypeFood.current.value
        }
        RestaurantService.new(restaurant).then(data =>{
            document.getElementById("frm-restaurant").reset();
            setMessage(data.message)
        });
        
    } 


    const deleteRestaurant = (id) =>{
        RestaurantService.delete(id).then(data => setMessage(data.message))
    }

    

    


  return (
    <div className='form-container'>
    <form id="frm-restaurant" name="frm-restaurant" onSubmit={e => handleSubmit(e)}>
        <h2>Restaurant data</h2>
        <section className='firstRow'>
            <div className='inputBox'>
                <label>Name</label>
                <input type="text"  required placeholder='Restaurant name' ref={inputName} />
            </div>
            <div className="inputBox">
                <label>Description</label>
                <input type="text" placeholder='Restaurant description' ref={inputDescription} />
            </div>
            <div className='inputBox'>
                <label>Direction</label>
                <input type="text" placeholder='Restaurant direction' ref={inputDirection} />
            </div>
            <div className="inputBox">
                <label>Image</label>
                <input type="text" placeholder='Restaurant image name' ref={inputImage} />
            </div>
            <div className="inputBox">
                <label>Phone number</label>
                <input type="number" maxLength={9} placeholder='Phone number' required ref={inputPhone} />
            </div>
            <div className="inputBox">
                <label>Plates</label>
                <input type="text"  placeholder='Plates' required ref={inputPlates} />
            </div>
            <div className="inputBox">
                <label>Half Price</label>
                <input type="number"  placeholder='Half Price' required ref={inputHalfPrice} />
            </div>
            <div className="inputBox">
                <label>Types</label>
                <select name="typeRestaurant" id="typeRestaurant" ref={inputTypeFood}>
                    {
                        types.map(e=>
                            <option key={e._id} value={e._id}> {e.name}</option>
                        )
                    }
                </select>
            </div>
        </section>
        <section className='panelButton'>
            <button><FaEdit size='16' /> New restaurant</button>
        </section>

    </form>
    {message && <div className='action-message'>{message}</div>}
    <ListRestaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
</div>
  )
}

export default FormRestaurants