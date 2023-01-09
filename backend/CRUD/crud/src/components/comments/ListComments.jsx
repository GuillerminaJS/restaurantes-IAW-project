import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const ListComments = ({comment, deleteComment}) => {
  return (
    <div>
        <h2>Comments data</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Comment</th>
                    <th>User ID</th>
                    <th>Assesment</th>
                </tr>
            </thead>
            <tbody>
                {
                    comment.map((e , index)=>
                    <tr key={e._id}>
                        <td>{index+1}</td>
                        <td>{e.comment}</td>
                        <td>{e.user.name}</td>
                        <td>{e.assesment}</td>
                        <td><FaTrashAlt onClick={event => deleteComment(e._id)}/></td>
                    </tr>
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default ListComments