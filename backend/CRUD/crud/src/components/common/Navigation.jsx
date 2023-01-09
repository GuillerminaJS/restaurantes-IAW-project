import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({item}) => {
  return (
    <nav>
        <Link to="/restaurants" className={item === "restaurant" ? 'active' : ''}> Restaurantes</Link>
        <Link to="/types" className={item==="type"?'active':''}>Types Food</Link>
        <Link to="/comments" className={item==="comment"?'active':''}>Comments</Link>
        <Link to="/users" className={item==="user"?'active':''}>Users</Link>
    </nav>
  )
}

export default Navigation