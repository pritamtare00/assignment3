import React from 'react';
const Employees =({employees}) =>{
    return(
        <>
        <thead>
            <tr>
            <th>Name</th>
            <th>skills</th>
            <th>company</th>
            </tr>
        </thead>
        <tbody>
        {employees.map((item,index) =>(
            <tr >
                <td key="index">{item.name}</td>
                <td key="index">{item.skills}</td>
                <td key="index">{item.company}</td>
            </tr>
        ))}
        </tbody>
        </>
    );
}
export default Employees;