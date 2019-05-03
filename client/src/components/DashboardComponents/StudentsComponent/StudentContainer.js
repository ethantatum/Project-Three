import React from "react";
import LinkButton from './LinkButton';
// import "./style.css";

const StudentContainer = (props) => {
    return (
        <div className="container bg-primary studentInfo" >
            <div className="row bg-danger" id="studContName">
                <div className="py-2 col-xs-12 col-sm-6">
                    <h3 className="d-flex justify-content-center text-white">{props.firstname} {props.lastname}</h3>
                    <img className="d-flex justify-content-center img-thumbnail img-fluid" src={props.image} alt="avatar" />
                </div>
                <div className="py-2 col-xs-12 col-sm-6" id="studContButtons">
                    <LinkButton type="button" className="btn btn-light btn-lg d-flex justify-content-center studContBtn" onClick={() => props.updateHeader("behaviors", props.firstname)}to={`${props.match.url}/behaviors/${props.id}`}>Behaviors</LinkButton><br></br>
                    <LinkButton type="button" className="btn btn-light btn-lg d-flex justify-content-center studContBtn" to={`${props.match.url}/comments/${props.id}`}>Comments</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default StudentContainer;