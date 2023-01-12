import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import CommentService from '../../../services/CommentService';
import UserService from '../../../services/UserService';
import ListComments from './ListComments';
import { FaEdit } from "react-icons/fa";
import './comments.css'


const FormComments = () => {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState([]);
;
    const inputComment = useRef(null);
    const inputUser = useRef(null);
    const inputAssesment = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const comment ={
            "comment": inputComment.current.value,
            "assesment": inputAssesment.current.value,
            "user": inputUser.current.value,
        }

        CommentService.new(comment).then(data =>{
            document.getElementById('frm-comment').reset();
            setMessage(data.message)
        });
    }

    const handleDelete = (id) => {
        CommentService.delete(id).then(data => setMessage(data.message));
    }

    useEffect(()=> {
        CommentService.getComment().then(data => setComments(data));
    },[message]);

    useEffect(()=>{
        UserService.getUser().then(data=>setUsers(data));
    },[]);

  return (
    <div className='form-container'>
        <form id="frm-comment" name="frm-comment" onSubmit={e => handleSubmit(e)}>
            <h2>Comment data</h2>
                <section className='firstRow'>
                    <div className='inputBox'>
                        <label htmlFor="comment-cm">Comment</label>
                        <input type="text" maxLength='20' id="comment-cm" required placeholder='comment' ref={inputComment} />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="assesment-cm">Assesment</label>
                        <input type="text" maxLength='20' id="assesment-cm" required placeholder='assesment' ref={inputAssesment} />
                    </div>
                    <div className='input-box'>
                        <label>User ID:</label>
                         <select name="userComment" id="userComment" ref={inputUser}>
                             {
                                 users.map(e=>
                                     <option key={e._id} value={e._id}>{e.username}</option>
                                     )
                             }
                         </select>
                    </div>
                </section>
                <section className='panelButton'>
                    <div className='input-box'>
                        <button><FaEdit size='16' /> New Comment</button>
                    </div>
                </section>
        </form>

        {message && <div className='action-message'>{message}</div>}

        <section id='commentsList'>
            <h2>Commments List</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Comment</th>
                        <th>Assesment</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((e, index) => <ListComments key={e._id} 
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

export default FormComments