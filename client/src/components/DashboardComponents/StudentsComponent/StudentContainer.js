import React from "react";
import "./style.css";

const StudentContainer = (props) => {
    return (
        <div className="row studentInfo" >
            {/* <div className="col-4">
                <img src={props.image}></img>
            </div> */}
            <div id="studContName">
                <h2>{props.firstname} {props.lastname}</h2>
                {/* <h2>{props.class}</h2> */}
            </div>
            <div id="studContButtons">
                <button type="button" class="btn btn-light btn-lg studContBtn">Behaviors</button><br></br>
                <button type="button" class="btn btn-light btn-lg studContBtn">Comments</button>
            </div>
        </div>
    )
}

export default StudentContainer;