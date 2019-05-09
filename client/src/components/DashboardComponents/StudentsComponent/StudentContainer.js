import React from "react";
import LinkButton from './LinkButton';
// import "./style.css";

const StudentContainer = (props) => {
    return (
        <div className="container bg-primary" >
            <div className="row bg-info d-flex" id="studContName">
                <div className="py-2 col-xs-12 col-sm-6">
                    <h3 className="justify-content-center text-white mb-2">{props.firstname} {props.lastname}</h3>
                    <img className="justify-content-center img-thumbnail img-fluid" src={props.image} alt="avatar" />
                </div>
                <div className="py-2 col-xs-12 col-sm-6 my-auto">
                    <LinkButton type="button" role="button" className="btn btn-light btn-lg btn-block studContBtn" to={`${props.match.url}/behaviors/${props.id}`}>Behaviors</LinkButton>
                    <LinkButton type="button" role="button" className="btn btn-light btn-lg btn-block studContBtn" to={`${props.match.url}/comments/${props.id}`}>Comments</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default StudentContainer;