import React from 'react';
const Birds =(props) =>{
    return(
        <>
        <thead>
            <tr>
            <th>Name</th>
            <th>Descrption</th>
            </tr>
        </thead>
        <tbody>
        {props.birds.map((item,index) =>(
            <tr >
                <td key="index">{item.name}</td>
                <td key="index">{item.description}</td>
            </tr>
        ))}
        </tbody>
        </>
    );
}
export default Birds;