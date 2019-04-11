import React from "react";
import DropdownItem from "../DropdownItem";

// Here we create a dropdown button where parents will select their student
// using one of the DropdownItem button components inside the dropdown menu

// Right now, we get the dummy data to show up in the dropdown by adding 'simple' class name - we need to initialize it for use with the 'selection' class name
// Also, dropdown currently is showing up behind elements further down the page - change z-index?
// Also, not sure how to move child icon to left of 'Select Child' field

function Dropdown() {
    return (
        <div className="ui simple selection dropdown">
            <input type="hidden" name="student" />
            <i className="dropdown icon"></i>
            <div className="left icon default text">Select Child</div>
            <i className="child icon"></i>
            <div className="menu">
                <DropdownItem />
            </div>
        </div>
    )
}

export default Dropdown;