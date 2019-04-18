import React, { Component } from "react";
import TeacherClassSelect from "../TeacherClassSelect";
import "./style.css";

class CompleteProfile extends Component {
    state = {
        name: {
            firstName: "",
            lastName: ""
        },
        image: "",
        classroom: []
    }

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className="container m-3" >
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
                <TeacherClassSelect />
            </div>
        )
    }
}

export default CompleteProfile;