import React from "react";
import "./style.css";

const AddStudent = (props) => {
    return (
        <div className="container bg-dark p-2" role="button" onClick={props.handleAddClick}>
            {props.children}
        </div>
    )
}

export default AddStudent;