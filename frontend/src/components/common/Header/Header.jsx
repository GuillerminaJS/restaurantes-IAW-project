// React stuff & imports
import React, {useContext} from 'react'
import { FaUser, FaWrench } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// ...

// CSS
import './header.css'
// ...

// Components
import Navigation from './Navigation'
// ...

// Services
import UserContext from '../../../context/UserContext'
import {ROLES} from '../../../constants/app_constants.js'
// ...

function Header() {

  const userDataContext = useContext(UserContext);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    
    <header>

      <div className='logo-container'>
        <img src='/assets/img/logo.png' className='logo' alt='' />
      </div>

      <div className='nav-container'>
        <Navigation />
      </div>

      

      <div className='user-container'>
        <div className='user-display'>
          <FaUser className='fauser'/>
          <span className='name-user'>{userDataContext.name} {userDataContext.surnames}</span>
          <span className='lang'>{userDataContext.language} </span>
        </div>
        
        <div className='login-opt cont'>
          <button onClick={refreshPage} className='buttons'>Log out</button>
          <Link to="/login" className='buttons'>Change account</Link>
        </div>

        <div>
        {
          userDataContext.role === ROLES.ADMIN &&
          <Link to="/select-crud" className='admin-accessBtn'><FaWrench className='icon'/>Management</Link>
        }
        </div>

      </div>

    </header>
    
  );
}

export default Header