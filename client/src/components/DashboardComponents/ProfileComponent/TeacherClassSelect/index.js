import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const classOptions = [
    { key: "burgundy", text: "Burgundy", value: "burgundy" },
    { key: "emerald", text: "Emerald", value: "emerald" },
    { key: "paisley", text: "Paisley", value: "paisley" }

]

class TeacherClassSelect extends Component {
    state = {
        constructor(props {
            super(props);
        })
        name: {
            firstName: "",
            lastName: ""
        },
        image: "",
        classroom: []
    }

    // Helper function checks if there is any content in required input fields
    validateForm() {
        return this.state.name.firstName.length > 0 && this.state.name.lastName.length > 0 && this.state.classroom.length > 0;
    }

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSelect() {

    }


    render() {
        return (
            <React.Fragment>
            <div className="ui inverted left icon input">
                <input
                    type="text"
                    placeholder="First Name"
                    value={this.state.name.firstName}
                    onChange={this.handleChange}
                    name="firstName"
                ></input>
                <i className="keyboard icon"></i>
            </div>
            <div className="ui inverted left icon input ml-3">
                <input
                    type="text"
                    placeholder="Last Name"
                    value={this.state.name.lastName}
                    onChange={this.handleChange}
                    name="lastName"
                ></input>
                <i className="keyboard icon"></i>
            </div>
            <div className="ui inverted divider"></div>
            <div className="ui inverted left icon input">
                <input
                    type="text"
                    placeholder="Image link (optional)"
                    value={this.state.image}
                    onChange={this.handleChange}
                    name="image"
                ></input>
                <i className="camera retro icon"></i>
            </div>
            <div className="ui inverted divider"></div>
            <form className="mt-1">
                <Dropdown placeholder='Classrooms' compact multiple selection options={classOptions} /><br />
                <button className="ui inverted button mt-2" type="submit" disabled={!this.validateForm()}>Submit</button>
            </form>
            </React.Fragment>
        )
    }
}

export default TeacherClassSelect;