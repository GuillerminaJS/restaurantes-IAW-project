import React,{useState, useEffect} from 'react'
import { FaUserCircle, FaStar } from "react-icons/fa";
import CommentService from '../../services/CommentService';
import UserService from '../../services/UserService';

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

    <div className='listC'>
        <td className='displayUsr'>
        <FaUserCircle/><p className='Usr'> {user.username}</p>
        </td>

        <div className='listC2'>
        <td className="comentarioUsr">
            <input type="text" readOnly value={commentValue}/>
            
        </td>
        <td className='valoracion'>
        
            <p>{assesment}<FaStar/></p>
            
        </td>
        </div>
        

    </div>
  )
}

export default ListComments