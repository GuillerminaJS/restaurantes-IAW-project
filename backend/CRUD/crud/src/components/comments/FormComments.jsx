import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import CommentService from '../../services/CommentService';
import UserService from '../../services/UserService';
import ListComments from './ListComments';
import { FaEdit } from "react-icons/fa";


const FormComments = () => {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [comment, setComment] = useState([])
;
    const inputComment = useRef(null);
    const inputUser = useRef(null);
    const inputAssesment = useRef(null);

    useEffect(()=>{
        CommentService.getComment().then(data=>setComment(data));
    },[message]);

    useEffect(()=>{
        UserService.getUser().then(data=>setUsers(data));
    },[]);

    const newComment = (e) => {
        e.preventDefault();
        alert("Nuevo comentario");
        const params={
            "comment":inputComment.current.value,
            "user":inputUser.current.value,
            "assesment":inputAssesment.current.value
        }
        CommentService.new(params).then( data=>{
            setMessage(data.message) 
            document.getElementById('frm-comment').reset();
        })
    }

    const deleteComment = (id) => {
        CommentService.delete(id).then(data => setMessage(data.message)  )
    }

  return (
    <div>
        <form id="frm-comment" onSubmit={e=> newComment(e)}>
            <h2>Comments data</h2>
                <div className='formContainer'>
                    <div className='input-box'>
                        <label>Comment:</label>
                        <input type="text" name="name" ref={inputComment}/>
                    </div>
                    <div className='input-box'>
                        <label>Assesment:</label>
                        <input type="string" name="assesment" ref={inputAssesment}/>
                    </div>
                    <div className='input-box'>
                        <label>User ID:</label>
                        <select name="userComment" id="userComment" ref={inputUser}>
                            {
                                users.map(e=>
                                    <option key={e._id} value={e._id}>{e.name}</option>
                                    )
                            }
                        </select>
                    </div>
                    <div className='input-box'>
                    <button><FaEdit size='16' /> New Comment</button>
                    </div>
                </div>
            </form>

            {message && <div>{message}</div>}
            <ListComments comment={comment} deleteComment={deleteComment}/>
    </div>
  )
}

export default FormComments