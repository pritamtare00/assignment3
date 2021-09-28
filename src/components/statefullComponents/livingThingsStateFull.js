import Users from './users';
import Animals from './animals';
import Employees from './employees';
import Birds from './birds';
import React from 'react';
import ReactDOM from 'react-dom';
class LivingThingsStateFull extends React.Component{
    displayEmployeeList(){
        ReactDOM.render(<Employees/>,document.getElementById("DisplayStateFull"))
    }
    displayUserList(){
        ReactDOM.render(<Users/>,document.getElementById("DisplayStateFull"))
    }
    displayAnimalList(){
        ReactDOM.render(<Animals/>,document.getElementById("DisplayStateFull"))
    }
    displayBirdsList(){
        ReactDOM.render(<Birds/>,document.getElementById("DisplayStateFull"))
    }
    hideList(){
        ReactDOM.unmountComponentAtNode(document.getElementById("DisplayStateFull"))
    }
    render(){
        return(
            <div>
                <h4>Using StateFull</h4>
                <div className="col-sm-6 d-flex justify-content-around mx-auto border p-3">
                <button className="btn btn-primary" onClick={()=>this.displayEmployeeList()}> Employee </button> 
                <button className="btn btn-primary" onClick={()=>this.displayUserList()}> User </button> 
                <button className="btn btn-primary" onClick={()=>this.displayAnimalList()}> Animals </button> 
                <button className="btn btn-primary" onClick={()=>this.displayBirdsList()}>  Birds </button> 
                <button className="btn btn-success" onClick={()=>this.hideList()}> Hide Details</button>
                </div>
                <table id="DisplayStateFull" className="table"></table>
            </div>
            
        )
    }
}
export default LivingThingsStateFull;