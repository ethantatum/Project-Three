import React from "react";
import LinkButton from './LinkButton';
import "./style.css";

const StudentContainer = (props) => {
    return (
        <div className="row studentInfo" >
            {/* <div className="col-4">
                <img src={props.image}></img>
            </div> */}
            <div id="studContName">
                <h2 className="text-white">{props.firstname} {props.lastname}</h2>
                <img className="img-thumbnail img-fluid" src={props.image} alt="avatar" />
                {/* <h2>{props.class}</h2> */}
            </div>
            <div id="studContButtons">
                <LinkButton type="button" className="btn btn-light btn-lg studContBtn" onClick={() => props.updateHeader("behaviors", props.firstname)}to={`${props.match.url}/behaviors/${props.id}`}>Behaviors</LinkButton><br></br>
                <LinkButton type="button" className="btn btn-light btn-lg studContBtn" to={`${props.match.url}/comments/${props.id}`}>Comments</LinkButton>
            </div>
        </div>
    )
}

export default StudentContainer;