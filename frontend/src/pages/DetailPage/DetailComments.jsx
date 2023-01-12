import React, { useRef, useEffect, useState } from 'react'
import CommentService from '../../services/CommentService'
import UserService from '../../services/UserService'
import { FaPaperPlane } from "react-icons/fa";
import ListDComments from './ListDComments';

const DetailComments = () => {

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
            // "restaurant": idRestaurant  

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
        <section id='commentsList' >
            <h5 className='tituloComentario'>| Comentarios</h5>
            <table>

                <tbody>
                    {comments.map((e, index) => <ListDComments key={e._id} 
                                                                index={index + 1}{...e}
                                                                handleDelete={handleDelete}
                                                                setMessage={setMessage}
                    />)}
                </tbody>
            </table>
        </section>
        <form id="frm-comment" name="frm-comment" onSubmit={e => handleSubmit(e)}>  
                <section className='firstRow'>

                        <label>Usuario: </label>
                         <select name="userComment" id="userComment" ref={inputUser}>
                             {
                                 users.map(e=>
                                     <option key={e._id} value={e._id}>{e.username}</option>
                                     )
                             }
                         </select>
                        <input type="text" maxLength='20' id="comment-cm" required placeholder='comment' ref={inputComment} />
                   
                        <label htmlFor="assesment-cm">Valoracion</label>
                        <input type="text" maxLength='20' id="assesment-cm" required placeholder='assesment' ref={inputAssesment} />
                
                        
                        <button className='publicar'><FaPaperPlane /></button>
                </section>

        </form>

        {message && <div className='action-message'>{message}</div>}

        
    </div>
  )
}

export default DetailComments