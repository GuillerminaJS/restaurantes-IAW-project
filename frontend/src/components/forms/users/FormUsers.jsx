import React, { useRef } from 'react'
import UserService from '../../../services/UserService.js'
import { FaEdit } from "react-icons/fa";
import RowUser from './RowUser.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
// import './users.css '

const FormUsers = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    const inputUsername = useRef(null);
    const inputSurnames = useRef(null);
    const inputRole = useRef(null);
    const inputLanguage = useRef(null);
    const inputPassword = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user ={
            "username": inputUsername.current.value,
            "surnames": inputSurnames.current.value,
            "role": inputRole.current.value,
            "language": inputLanguage.current.value,
            "password": inputPassword.current.value
        }

        UserService.new(user).then(data =>{
            document.getElementById('frm-user').reset();
            setMessage(data.message)
        });
    }

    const handleDelete = (id) => {
        UserService.delete(id).then(data => setMessage(data.message));
    }

    useEffect(()=> {
        UserService.getUser().then(data => setUsers(data));
    },[message]);
    
  return (
    <div className='form-container'>
        <form id='frm-user' name='frm-user' onSubmit={e => handleSubmit(e)}>
        <h2>User data</h2>
                <section className='firstRow'>
                    
                        <label htmlFor="username-user">Name</label>
                        <input type="text" maxLength='20' id="username-user" required placeholder='username' ref={inputUsername} />
                
                        <label htmlFor="surnames-user">Surnames</label>
                        <input type="" id="surnames-user" placeholder='surnames' ref={inputSurnames} />
                 

                  
                        <label htmlFor="role-user">Role</label>
                        <input type="" id="role-user" placeholder='role' ref={inputRole} />
              

                
                        <label htmlFor="language-user">Language</label>
                        <input type="" id="language-user" placeholder='language' ref={inputLanguage} />
                  

                 
                        <label htmlFor="password-user">Password</label>
                        <input type="password" id="password-user" placeholder='password' ref={inputPassword} />

                </section>
                <section className='panelButton'>
                    <button><FaEdit size='16' /> New user</button>
                </section>
        </form>

        {message && <div className='action-message'>{message}</div>}

            <section id="categoriesList">
                <h2>Users list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Surnames</th>
                            <th>Role</th>
                            <th>Language</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, index) =><RowUser key={e._id} 
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

export default FormUsers