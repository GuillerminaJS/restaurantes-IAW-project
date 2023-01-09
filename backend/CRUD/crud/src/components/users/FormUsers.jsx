import React, { useRef } from 'react'
import UserService from '../../services/UserService'
import { FaEdit } from "react-icons/fa";
import RowUser from './RowUser.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

const FormType = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputSurnames = useRef(null);
    const inputRole = useRef(null);
    const inputLanguage = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const user ={
            "name": inputName.current.value,
            "surnames": inputSurnames.current.value,
            "role": inputRole.current.value,
            "language": inputLanguage.current.value
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
                    <div className='inputBox'>
                        <label htmlFor="name-user">Name</label>
                        <input type="text" maxLength='20' id="name-cat" required placeholder='user name' ref={inputName} />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="surnames-user">Surnames</label>
                        <input type="" id="surnames-user" placeholder='surnames' ref={inputSurnames} />
                    </div>

                    <div className='inputBox'>
                        <label htmlFor="role-user">Role</label>
                        <input type="" id="role-user" placeholder='role' ref={inputRole} />
                    </div>

                    <div className='inputBox'>
                        <label htmlFor="language-user">Language</label>
                        <input type="" id="language-user" placeholder='language' ref={inputLanguage} />
                    </div>
                </section>
                <section className='panelButton'>
                    <button><FaEdit size='16' /> New category</button>
                </section>
        </form>

        {message && <div className='action-message'>{message}</div>}

            <section id="categoriesList">
                <h2>Users list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
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

export default FormType