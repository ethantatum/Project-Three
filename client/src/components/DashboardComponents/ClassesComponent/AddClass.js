import React from "react";
import "./style.css";

const AddClass = (props) => {
    return (
        <div className="classInfo">
            {props.children}
        </div>
    )
}

export default AddClass;