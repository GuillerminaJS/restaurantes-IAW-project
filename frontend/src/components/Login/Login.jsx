import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {FaUserAlt, FaKey} from 'react-icons/fa'
import './login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:8800/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   

const Login = ({setToken}) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });

        if (token.message){
            alert(token.message)
        }else{
            setToken(token);
        }
      }



  return (
    <main className='login'>
      <div className='frm'>
        <h2>Porfavor haga login</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-frm'>
            <p><FaUserAlt className='useri'/>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
          </div>
          <div className='input-frm'>
            <p><FaKey className='passi'/>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className='input-btn'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      
    </main>
    
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login