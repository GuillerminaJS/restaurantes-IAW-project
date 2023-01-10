import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <div>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </div>
      <div>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login