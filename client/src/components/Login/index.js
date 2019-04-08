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

    handleChange = () => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = () => {
        event.preventDefault();
    }

    render () {
        return (
            <div className="Login">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui inverted input">
                        <input autoFocus type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted right icon input">
                        <input type="text" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        <i className="lock icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;