import Users from './users';
import Animals from './animals';
import Employees from './employees';
import Birds from './birds';
import React from 'react';
import ReactDOM from 'react-dom';
class LivingThingsUseState extends React.Component{
    displayEmployeeList(){
        ReactDOM.render(<Employees/>,document.getElementById("DisplayUseState"))
    }
    displayUserList(){
        ReactDOM.render(<Users/>,document.getElementById("DisplayUseState"))
    }
    displayAnimalList(){
        ReactDOM.render(<Animals/>,document.getElementById("DisplayUseState"))
    }
    displayBirdsList(){
        ReactDOM.render(<Birds/>,document.getElementById("DisplayUseState"))
    }
    hideList(){
        ReactDOM.unmountComponentAtNode(document.getElementById("DisplayUseState"))
    }
    render(){
        return(
            <div>
                <h4>Using UseState</h4>
                <div className="col-sm-6 d-flex justify-content-around mx-auto border p-3">
                <button className="btn btn-primary" onClick={()=>this.displayEmployeeList()}> Employee </button> 
                <button className="btn btn-primary" onClick={()=>this.displayUserList()}> User </button> 
                <button className="btn btn-primary" onClick={()=>this.displayAnimalList()}> Animals </button> 
                <button className="btn btn-primary" onClick={()=>this.displayBirdsList()}> Birds</button> 
                <button className="btn btn-success" onClick={()=>this.hideList()}> Hide Details</button>
                </div>
                <table id="DisplayUseState" className="table"></table>
            </div>
            
        )
    }
}
export default LivingThingsUseState;