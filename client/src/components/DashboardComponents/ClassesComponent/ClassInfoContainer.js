import React from "react";
// import "./style.css";

const ClassInfoContainer = (props) => {
    return (
        <div className="m-1 p-3 bg-dark text-white text-center rounded classInfo" onClick={props.clickClass}>
            <h3>{props.name}</h3>
            <h5>{props.time}</h5>
            <h5>{props.studentArr.length} Students</h5>
        </div>
    )
}

export default ClassInfoContainer;