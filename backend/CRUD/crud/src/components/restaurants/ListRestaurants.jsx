import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ListRestaurants = ({restaurants, deleteRestaurant}) => {
  return (
    <div>
        <h2>Restaurants list</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Direction</th>
                    <th>Phone Number</th>
                    <th>Plates</th>
                    <th>Type</th>
                    <th>Half price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((e , index)=>
                    <tr key={e._id}>
                        <td>{index+1}</td>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                        <td>{e.direction}</td>
                        <td>{e.phone}</td>
                        <td>{e.plates}</td>
                        <td>{e.type.name}</td>
                        <td>{e.halfPrice}</td>
                        <td>{e.img}</td>
                        <td><FaTrashAlt onClick={event => deleteRestaurant(e._id)}/></td>
                    </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default ListRestaurants