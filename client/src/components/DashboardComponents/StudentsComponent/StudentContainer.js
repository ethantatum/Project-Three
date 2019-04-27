import React from "react";
import "./style.css";

const StudentContainer = (props) => {
    return (
        <div className="studentInfo" >
            <h2>{props.firstname}</h2>
            <h2>{props.lastname}</h2>
            <h2>{props.class}</h2>
        </div>
    )
}

export default StudentContainer;