import React from "react";
import "./style.css";

const ClassInfoContainer = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 border border-solid border-light p-3 text-white text-center rounded classInfo" onClick={props.clickClass}>
            <h3>{props.name}</h3>
            <h5>{props.time}</h5>
            <h5>{props.studentArr.length} Students</h5>
        </div>
    )
}

export default ClassInfoContainer;