import React, {useState, useEffect} from 'react'
import RestaurantService from '../../../services/RestaurantService';
import TypeService from '../../../services/TypeService';
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";

const ListRestaurants = ({_id, name, description, direction, phone, plates, type, img, averagePrice, handleDelete, setMessage, index}) => {

    const [types, setTypes] = useState([]);
    const [editRestaurant, setEditRestaurant] = useState(false);
    const[nameValue, setName] = useState(name);
    const[descriptionValue, setDescription] = useState(description);
    const[directionValue, setDirection] = useState(direction);
    const[phoneValue, setPhone] = useState(phone);
    const[platesValue, setPlates] = useState(plates);
    const[typeValue, setType] = useState(type._id);
    const[imgValue, setImg] = useState(img);
    const[averagePriceValue, setAveragePrice] = useState(averagePrice);

    const handleSave = ()=> {
        if (nameValue===""){
            alert("Error: name is null");
            return false;
        }

        const restaurant={
            "id": _id,
            "name": nameValue,
            "description": descriptionValue,
            "direction": directionValue,
            "phone": phoneValue,
            "plates": platesValue,
            "type": typeValue,
            "img": imgValue,
            "averagePrice": averagePriceValue
        }

        RestaurantService.update(restaurant).then(e=>{
            setMessage("Updated restaurant:" + e._id);
            setEditRestaurant(false);
        })
    }

    useEffect(()=>{
        TypeService.getType().then(data=>setTypes(data));
    },[]);

  return (

    <tr>
        <td>{index}</td>
        <td><input type="text" value={nameValue} onChange={e=>setName(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td><input type="text" value={descriptionValue} onChange={e=>setDescription(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td><input type="text" value={directionValue} onChange={e=>setDirection(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td><input type="text" value={phoneValue} onChange={e=>setPhone(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td><input type="text" value={platesValue} onChange={e=>setPlates(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td>
            {!editRestaurant ? type.name
                :
                <select defaultValue={typeValue} onChange={e=>setType(e.target.value)}
                // className={editRestaurant ? 'edit' : 'readOnlyForm'} 
                >
                 {
                     types.map(e =>
                         <option key={e._id} value={e._id} >{e.name}</option>
                         )
                 }
                </select>
            }
            
        </td>
        <td><input type="text" value={imgValue} onChange={e=>setImg(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        <td><input type="text" value={averagePriceValue} onChange={e=>setAveragePrice(e.target.value)}
           className={editRestaurant ? 'edit' : 'readOnlyForm'}
           readOnly={!editRestaurant}
           />
        </td>
        
        <td className="actions">
                {
                    (editRestaurant) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditRestaurant(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>
    </tr>
  )
}

export default ListRestaurants