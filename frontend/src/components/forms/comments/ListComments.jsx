import React, {useState, useEffect} from 'react'
import CommentService from '../../../services/CommentService.js'
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";
import UserService from '../../../services/UserService.js'

const ListComments = ({_id, comment, assesment, user, handleDelete, setMessage, index}) => {

    const [users, setUsers] = useState([]);
    const [editComment, setEditComment] = useState(false);
    const [commentValue, setComment] = useState(comment);
    const [assesmentValue, setAssesment] = useState(assesment);
    const [userValue, setUser] = useState(user._id);

    const handleSave = () => {
        if (commentValue==="") {
            alert("Error: comment is null");
            return false;
        }

        const comment={
            "id": _id,
            "comment":commentValue,
            "assesment":assesmentValue,
            "user":userValue

        }

        CommentService.update(comment).then(e=>{
            setMessage("Updated comment:" + e._id);
            setEditComment(false);
        })
    }

    useEffect(()=>{
        UserService.getUser().then(data=>setUsers(data));
    },[]);

  return (

    <div>
        <td>{index}</td>
        <td>
            {!editComment ? user.username
                :
                <select defaultValue={userValue} onChange={e=>setUser(e.target.value)}
                className={editComment ? 'edit' : 'readOnlyForm'} 
                >
                 {
                     users.map(e =>
                         <option key={e._id} value={e._id} >{e.username}</option>
                         )
                 }
                </select>
            }
            
        </td>
        <td><input type="text" value={commentValue} onChange={e=>setComment(e.target.value)} 
            className={editComment ? 'edit' : "readOnlyForm"}
            readOnly={!editComment}
            />
        </td>
        <td><input type="text" value={assesmentValue} onChange={e=>setAssesment(e.target.value)} 
            className={editComment ? 'edit' : "readOnlyForm"}
            readOnly={!editComment}
            />
        </td>
        
        <td className="actions">
                {
                    (editComment) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditComment(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>

    </div>
  )
}

export default ListComments