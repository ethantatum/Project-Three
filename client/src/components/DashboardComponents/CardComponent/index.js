import React from "react";
import "./style.css";


const CardComponent = (props) => {
    return (
        <div className="card w-75" id="cardCont">
            <h5 className="card-header">{props.headerText}</h5>
            <div className="card-body cardBody">
                {props.children}
            </div>
        </div>
    )
}

export default CardComponent;

