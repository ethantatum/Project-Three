import React from "react";
import faker from "faker";

// Idea here would be we get the student names and ids from the DB and populate our dropdown with the names, 
// assigning each an ID corresponding to the student

// data-value={props.name} id={props._id}

function DropdownItem() {
    return (
        <React.Fragment>
            <div className="item" >
                <img className="ui mini avatar image" src={faker.image.avatar()} alt="student avatar" />
                {faker.name.firstName()}
            </div>
            <div className="item" >
                <img className="ui mini avatar image" src={faker.image.avatar()} alt="student avatar" />
                {faker.name.firstName()}
            </div>
            <div className="item" >
                <img className="ui mini avatar image" src={faker.image.avatar()} alt="student avatar" />
                {faker.name.firstName()}
            </div>
            <div className="item" >
                <img className="ui mini avatar image" src={faker.image.avatar()} alt="student avatar" />
                {faker.name.firstName()}
            </div>
            <div className="item" >
                <img className="ui mini avatar image" src={faker.image.avatar()} alt="student avatar" />
                {faker.name.firstName()}
            </div>
        </React.Fragment>
    )
}

export default DropdownItem;