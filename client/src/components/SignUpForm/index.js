import React, { Component } from "react";
import Dropdown from "../Dropdown";
import DropdownItem from "../DropdownItem";
import "./style.css";

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            image: "",
            name: {
                firstName: "",
                lastName: ""
            },
            isTeacher: false
        };
    }

    // Helper function checks if there is any content in required input fields
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0 && this.state.name.firstName > 0 && this.state.name.lastName > 0;
    }

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
    }

    // SAVE FOR PARENT OPTIONS COMPONENT
    // <Dropdown>
    //     <DropdownItem />
    // </Dropdown>
    // <div className="ui inverted divider"></div>
    // <div className="ui inverted left icon input">
    //     <input
    //         type="text"
    //         placeholder="Address"
    //         value={this.state.address}
    //         onChange={this.handleChange}
    //         name="address"
    //     ></input>
    // <i className="home icon"></i>
    // </div>
    // <div className="ui inverted divider"></div>
    // <div className="ui inverted left icon input">
    //     <input
    //         type="text"
    //         placeholder="Cell Number"
    //         value={this.state.phone}
    //         onChange={this.handleChange}
    //         name="phone"
    //     ></input>
    // <i className="mobile alternate icon"></i>
    // </div>
    // <div className="ui inverted divider"></div>

    render() {
        return (
            <div className="SignUp">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui inverted left icon input">
                        <input autoFocus
                            type="text"
                            placeholder="Choose a username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            name="username"
                        ></input>
                        <i className="user outline icon"></i>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted left icon input">
                        <input
                            type="text"
                            placeholder="Choose a password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                        />
                        <i className="lock icon"></i>
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
                    <div className="ui checkbox">
                        <input 
                            type="checkbox" 
                            name="isTeacher"
                            value={this.state.isTeacher}
                            onChange={this.handleChange}
                        ></input>
                            <label className="text-white">I am a teacher</label>
                    </div>
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Register</button>
                </form>
            </div>
                )
            }
        }
        
export default SignUpForm;