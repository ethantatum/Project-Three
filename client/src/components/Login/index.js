import React, { Component } from "react";
import Logo from "../Logo";
import "./style.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    // Helper function checks if there is any content in username/password input fields
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="Login col-12">
                <div className="container-fluid p-3">
                    <Logo />
                    <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                        <div className="ui inverted left icon input">
                            <input autoFocus
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                error={errors.email}
                                name="email"
                            />
                            <i className="user outline icon"></i>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input
                                type="text"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                error={errors.password}
                                name="password"
                            />
                            <i className="lock icon"></i>
                        </div>
                        <div className="ui inverted divider"></div>
                        <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Login</button>
                        <button className="ui inverted red button" type="submit" onClick={this.props.handleLogin}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;