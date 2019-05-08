import React from "react";
import "./style.css";

const AddStudent = (props) => {
    return (
        <div className="container bg-primary" role="button" onClick={props.handleAddClick}>
            {props.children}
        </div>
    )
}

export default AddStudent;