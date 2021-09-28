import React from 'react';
import FunctionAsProps from './functionAsProps';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    counter=()=>{
        this.setState({
            count:(this.state.count+1),
        });
    }
    counterDec=()=>{
        this.setState({
            count:(this.state.count-1),
        });
    }
    render(){
        return(
            <>
                <div className="border col-lg-6 mx-auto my-5 bg-light p-3 shadow">
                <h2>Counter</h2>
                <h1>{this.state.count}</h1>
                <FunctionAsProps counter={this.counter} counterDec={this.counterDec}/>
                </div>
            </>
        )
    }
}
export default Counter;