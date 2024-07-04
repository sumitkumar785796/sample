import React from 'react'

const StoreData = ({index,fname,age}) => {
    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td>{fname}</td>
                <td>{age}</td>
                <td>
                <button className="btn btn-success">Update</button>
                <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </>
    )
}

export default StoreData