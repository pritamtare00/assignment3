import Users from './users';
import Animals from './animals';
import Employees from './employees';
import Birds from './birds';
import React from 'react';
import ReactDOM from 'react-dom';
const LivingThingsProps = () => {
        const birds= [
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
            {
                name:"lorem",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
        ];
        const employees =  [
            {
                name:"lorem ipsum",
                skills:"UI",
                company:"lorem",
            },
            {
                name:"lorem",
                skills:"js",
                company:"ipsum",
            },
            {
                name:"test",
                skills:"Sales",
                company:"lorem",
            },
        ];
        const users = [
            {
                name:"lorem ipsum",
                age:30,
                gender:"Female",
            },
            {
                name:"john",
                age:23,
                gender:"Male",
            },
            {
                name:"leena",
                age:25,
                gender:"Female",
            },
        ];
        const animals = [
            {
                name:"ipsum",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                name:"ipsum",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            },
            {
                name:"ipsum",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book                                           ",
            },
        ];
    const displayEmployeeList = () =>{
        ReactDOM.render(<Employees employees={employees}/>,document.getElementById("DisplayProps"))
    }
    const displayUserList = () =>{
        ReactDOM.render(<Users users={users}/>,document.getElementById("DisplayProps"))
    }
    const displayAnimalList = () =>{
        ReactDOM.render(<Animals animals={animals}/>,document.getElementById("DisplayProps"))
    }
    const displayBirdsList = () =>{
        ReactDOM.render(<Birds birds={birds}/>,document.getElementById("DisplayProps"))
    }
    const hideList = () =>{
        ReactDOM.unmountComponentAtNode(document.getElementById("DisplayProps"))
    }
    return(
        <div>
            <h4>Using Props</h4>
            <div className="col-sm-6 d-flex justify-content-around mx-auto border p-3">
            <button className="btn btn-primary" onClick={()=>displayEmployeeList()}> Employee </button> 
            <button className="btn btn-primary" onClick={()=>displayUserList()}> User </button> 
            <button className="btn btn-primary" onClick={()=>displayAnimalList()}> Animals </button> 
            <button className="btn btn-primary" onClick={()=>displayBirdsList()}> Birds</button> 
            <button className="btn btn-success" onClick={()=>hideList()}> Hide Details</button>
            </div>
            <table id="DisplayProps" className="table"></table>
        </div>
        
    )
}
export default LivingThingsProps;