import React, { Component } from "react";
import "./index.css";

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
    handleChange = () => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = () => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui inverted input">
                        <input autoFocus
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted left icon input">
                        <input
                            type="text"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;