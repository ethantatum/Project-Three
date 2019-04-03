import React from "react";

// Idea here would be we get the student names and ids from the DB and populate our dropdown with the names, 
// assigning each an ID corresponding to the student

function DropdownItem(props) {
    return (
        <button class="dropdown-item" type="button" id={props._id}>{props.name}</button>
    )
}

export default DropdownItem;