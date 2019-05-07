import React from "react";
// import "./style.css";

const ClassInfoContainer = (props) => {
    return (
        <div className="m-1 p-1 bg-dark text-white classInfo" onClick={props.clickClass}>
            <h2>{props.name}</h2>
            <h3>{props.time}</h3>
            <h4>{props.studentArr.length} Students</h4>
        </div>
    )
}

export default ClassInfoContainer;