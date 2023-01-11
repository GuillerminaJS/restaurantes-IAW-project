import React, { useState } from 'react'
import UserService from '../../../services/UserService.js';
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";

const RowUser = ({ index, _id, username, surnames, role, language, handleDelete, setMessage}) => {
    const [editUser, setEditUser] = useState(false);
    const [usernameValue, setName] = useState(username);
    const [surnameValue, setSurname] = useState(surnames);
    const [roleValue, setRole] = useState(role);
    const [languageValue, setLanguage] = useState(language);

    const handleSave = () => {
        if (usernameValue===""){
            alert("Error: name is null");
            return false;
        }

        const user={
            "id": _id,
            "username": usernameValue,
            "surnames": surnameValue,
            "role": roleValue,
            "language": languageValue,
        }
        
        UserService.update(user).then(e=>{
            setMessage("Update user:"+e.username);
            setEditUser(false);
        });
    }

  return (
    <div>
        <tr>
            <td>{index}</td>
            <td><input type="text" value={usernameValue} onChange={e=>setName(e.target.value)}  
                className={editUser ? 'editForm' : "readOnlyForm"} 
                readOnly={!editUser}
                />
            </td>
            <td><input type="text" value={surnameValue} onChange={e=>setSurname(e.target.value)}
                className={editUser ? 'editForm' : "readOnlyForm"}
                readOnly={!editUser}
                />
            </td>

            <td><input type="text" value={roleValue} onChange={e=>setRole(e.target.value)}
                className={editUser ? 'editForm' : "readOnlyForm"}
                readOnly={!editUser}
                />
            </td>

            <td><input type="text" value={languageValue} onChange={e=>setLanguage(e.target.value)}
                className={editUser ? 'editForm' : "readOnlyForm"}
                readOnly={!editUser}
                />
            </td>

            <td className="actions">
                {
                    (editUser) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditUser(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>
        </tr>
    </div>
  )
}


export default RowUser