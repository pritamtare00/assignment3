import React from 'react';
const Users =(props) =>{
    return(
        <>
        <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            </tr>
        </thead>
        <tbody>
        {props.users.map((item,index) =>(
            <tr >
                <td key="index">{item.name}</td>
                <td key="index">{item.age}</td>
                <td key="index">{item.gender}</td>
            </tr>
        ))}
        </tbody>
       </>
    );
}
export default Users;