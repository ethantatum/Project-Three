import React, { Component } from "react";
import Logo from "../Logo";
import "./style.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    // Helper function checks if there is any content in username/password input fields
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
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

    render() {
        return (
            <div className="Login col-12">
                <div className="container-fluid bg-dark p-3">
                    <Logo />
                    <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                        <div className="ui inverted left icon input">
                            <input autoFocus
                                type="text"
                                placeholder="Username"
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
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                            />
                            <i className="lock icon"></i>
                        </div>
                        <div className="ui inverted divider"></div>
                        <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Login</button>
                        <button className="ui inverted red button" type="submit">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;