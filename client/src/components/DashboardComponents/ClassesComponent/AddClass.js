import React from "react";
// import "./style.css";

const AddClass = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 mx-auto m-1 p-2 text-white rounded add-class" role="button" onClick={props.handleAddClick}>
            {props.children}
        </div>
    )
}

export default AddClass;