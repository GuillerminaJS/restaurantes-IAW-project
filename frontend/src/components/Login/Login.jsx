import React, { useState } from 'react'
import PropTypes from 'prop-types';

// async function loginUser(credentials) {
//     return fetch('aaaa', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'aaaa'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
// }

const Login = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

  return (
    <>
    <div className='login-wrapper'>
        <p>Porfavor haga login</p>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Usuario</p>
                <input type='text' onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Contraseña</p>
                <input type='password' onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
    
    </>

  )
}

Login.protTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login