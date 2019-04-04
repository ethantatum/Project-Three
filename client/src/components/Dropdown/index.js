import React from "react";
import DropdownItem from "../DropdownItem";

// Here we create a dropdown button where parents will select their student
// using one of the DropdownItem button components inside the dropdown menu

function Dropdown() {
    return (
        <div className="dropdown">
            <button 
                className="btn btn-primary dropdown-toggle" 
                type="button" 
                id="studentDropdown" 
                data-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false">
                Student                                  
            </button>
            <div className="dropdown-menu">
                <h6 className="dropdown-header">Please select your child</h6>
                <DropdownItem />
            </div>
        </div>
    )
}

export default Dropdown;