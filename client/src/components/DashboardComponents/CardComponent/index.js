import React from "react";
import "./style.css";


const CardComponent = (props) => {
    return (
        <div className="container card mt-3 w-75 shadow" id="cardCont">
            <h3 className="card-header bg-light">{props.headerText}</h3>
            <div className="card-body cardBody">
                {props.children}
            </div>
        </div>
    )
}

export default CardComponent;

