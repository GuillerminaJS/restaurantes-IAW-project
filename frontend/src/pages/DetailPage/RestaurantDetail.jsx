import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import CommentService from '../../services/CommentService';
import UserService from '../../services/UserService';

import DetailComments from './DetailComments';
import {FaAlignJustify, FaCircle} from 'react-icons/fa'

import { URL_API_RESTAURANTS } from '../../constants/app_constants';
import { URL_API_COMMENTS } from '../../constants/app_constants';

import './detail.css'

const RestaurantDetail = () => {

  const [users, setUsers] = useState('');
  const [comments, setComments] = useState([])
  const [restaurant, setRestaurant] = useState(null);
  const [commentsRId, setCommentsRId] = useState(false)
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

  const verifyComment = async(idRestaurant) => {
    const res = await fetch(URL_API_COMMENTS);
    const data = await res.json();
    if ( data.find(e=>e.restaurant._id!==idRestaurant)){

    }else{
      setCommentsRId(true)
    }
  }

  useEffect(()=> {
    CommentService.getComment().then(data => setComments(data));
},[]);

useEffect(()=>{
  UserService.getUser().then(data=>setUsers(data));
},[]);

  useEffect(
    ()=>{
      getRestaurant(idRestaurant);
      verifyComment(idRestaurant);
    },[])

  return (
    <main className='main-dtl'>
      {
        restaurant &&
        <>
        <article className='detalleart'>
          <div className='left'>
            <img src={`http://localhost:8800/api/images/${restaurant.img}`} alt="" />
            <div className='info1'>
              <p>|Direccion: {restaurant.direction}</p>|
              <p>|Telefono: {restaurant.phone}</p>|
            </div>

            <div className='menu'>
              <p>Menu</p>
              <p><FaCircle className='dot'/> {restaurant.plates}</p>
            </div>
            
          </div>
          <div className='right'>
            <h1>{restaurant.name}</h1>
            <div className='desc'>
              <h4>Descripcion</h4>
              <p>{restaurant.description}</p>
            </div>
          </div>
          
          
        </article>
        <section className='seccionComentario'>
          <DetailComments />
          {/* {comments.map( e=> 

            <div>
              { commentsRId ? '' : <p>{e.comment}</p>}
            </div>
          

            // {
            //   !commentsRId ? ''
            //   :
            //   <p>e.comment</p>
            // }

        //   { e.restaurant._id ? ''
        //     :
        //     <p>{e.comment}</p>
        // }
            
          )

          } */}
        </section>
        </>
      }
    </main>
  )
}

export default RestaurantDetail