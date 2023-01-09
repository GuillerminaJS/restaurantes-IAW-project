import React, { useState } from 'react'
import TypeService from '../../services/TypeService';
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";
import './type.css'

const RowType = ({ index, _id, name, description, handleDelete, setMessage }) => {
    const [editType, setEditType] = useState(false);
    const [nameValue, setName] = useState(name);
    const [descriptionValue, setDescription] = useState(description);

    const handleSave = () => {
        if (nameValue===""){
            alert("Error: name is null");
            return false;
        }

        const type={
            "id":_id,
            "name":nameValue,
            "description":descriptionValue
        }
        
        TypeService.update(type).then(e=>{
            setMessage("Update type:"+e.name);
            setEditType(false);
        });
    }

  return (
    <tr className='row-type'>
        <td>{index}</td>
        <td><input type="text" value={nameValue} onChange={e=>setName(e.target.value)}  
            className={editType ? 'editForm' : "readOnlyForm"} 
            readOnly={!editType}
            />
        </td>
        <td><input type="text" value={descriptionValue} onChange={e=>setDescription(e.target.value)}
            className={editType ? 'editForm' : "readOnlyForm"}
            readOnly={!editType}
            />
        </td>
        <td className="actions">
            {
                (editType) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                    : <FaEdit onClick={() => setEditType(true)} color='blue' size='20'/>
            }
            <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>
    </tr>
  )
}


export default RowType