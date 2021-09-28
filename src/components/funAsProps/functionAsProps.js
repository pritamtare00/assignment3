import React from 'react';
const FunctionAsProps = props =>{
    return(
        <div className="col-sm-10 d-flex justify-content-around mx-auto border p-3 ">
            <button className="btn btn-primary mx-2" onClick={()=>props.counter()}>Increament Counter</button>

            <button className="btn btn-primary mx-2" onClick={()=>props.counterDec()}>Decreament Counter</button>
        </div>
    )
}
export default FunctionAsProps