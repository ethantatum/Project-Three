import React from "react";
import "./style.css";

const AddClass = (props) => {
    return (
        <div className="classInfo" role="button" onClick={props.handleAddClick}>
            {props.children}
        </div>
    )
}

export default AddClass;