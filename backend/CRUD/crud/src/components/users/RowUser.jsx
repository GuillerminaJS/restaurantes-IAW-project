import React, { useState } from 'react'
import UserService from '../../services/UserService';
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";

const RowUser = ({ index, _id, name, surnames, role, language, handleDelete, setMessage }) => {
    const [editUser, setEditUser] = useState(false);
    const [nameValue, setName] = useState(name);
    const [surnameValue, setSurname] = useState(surnames);
    const [roleValue, setRole] = useState(role);
    const [languageValue, setLanguage] = useState(language);

    const handleSave = () => {
        if (nameValue===""){
            alert("Error: name is null");
            return false;
        }

        const user={
            "id":_id,
            "name":nameValue,
            "surnames": surnameValue,
            "role": roleValue,
            "language": languageValue
        }
        
        UserService.update(user).then(e=>{
            setMessage("Update user:"+e.name);
            setEditUser(false);
        });
    }

  return (
    <div>
        <tr>
            <td>{index}</td>
            <td><input type="text" value={nameValue} onChange={e=>setName(e.target.value)}  
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