import React from "react";
import LinkButton from './LinkButton';
// import "./style.css";

const StudentContainer = (props) => {
    return (
        <React.Fragment>
                <div className="col-xs-12 col-sm-6 border border-solid border-light p-2 bg-dark text-white text-center rounded" id="studContName">
                    <h3 className="justify-content-center text-white mb-2">{props.firstname} {props.lastname}</h3>
                    <img className="justify-content-center img-thumbnail img-fluid" src={props.image} alt="avatar" />
                
                    <LinkButton type="button" role="button" className="m-1 btn btn-light btn-lg studContBtn" to={`${props.match.url}/behaviors/${props.id}`}>Behaviors</LinkButton>
                    <LinkButton type="button" role="button" className="m-1 btn btn-light btn-lg studContBtn" to={`${props.match.url}/comments/${props.id}`}>Comments</LinkButton>
                </div>
        </React.Fragment>
    )
}

export default StudentContainer;