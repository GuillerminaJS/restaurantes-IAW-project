import React, { useRef } from 'react'
import TypeService from '../../services/TypeService'
import { FaEdit } from "react-icons/fa";
import RowType from './RowType.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import './type.css'

const FormType = () => {
    const [types, setTypes] = useState([]);
    const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputDescription = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const type ={
            "name": inputName.current.value,
            "description": inputDescription.current.value
        }

        TypeService.new(type).then(data =>{
            document.getElementById('frm-type').reset();
            setMessage(data.message)
        });
    }

    const handleDelete = (id) => {
        TypeService.delete(id).then(data => setMessage(data.message));
    }

    useEffect(()=> {
        TypeService.getType().then(data => setTypes(data));
    },[message]);
    
  return (
    <div className='form-container'>
        <form id='frm-type' name='frm-type' onSubmit={e => handleSubmit(e)}>
        <h2>Type data</h2>
            <div className='input-type'>
                <label htmlFor="name-type">Name: </label>
                <input type="text" maxLength='20' id="name-cat" required placeholder='type name' ref={inputName} />

                <label htmlFor="description-type">Description: </label>
                <input type="" id="description-type" placeholder='description' ref={inputDescription} />

                <button><FaEdit size='16' /> New category</button>
            </div>
        </form>

        {message && <div className='action-message'>{message}</div>}

            <section id="categoriesList" className='section'>
                <h2>Types list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {types.map((e, index) =><RowType key={e._id} 
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