import React from 'react'
import { Link } from 'react-router-dom';

const NavigationManage = ({item}) => {
  return (
    <nav>
        <Link to="/restaurant-mg" className={item === "restaurant" ? 'active' : ''}> Restaurantes</Link>
        <Link to="/types-mg" className={item==="type"?'active':''}>Types Food</Link>
        <Link to="/comments-mg" className={item==="comment"?'active':''}>Comments</Link>
        <Link to="/users-mg" className={item==="user"?'active':''}>Users</Link>
    </nav>
  )
}

export default NavigationManage