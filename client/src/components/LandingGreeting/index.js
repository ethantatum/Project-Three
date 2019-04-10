import React, { Component } from "react";
// import Logo from "../components/Logo";
import Welcome from "../Welcome";
import Login from "../Login";

class LandingGreeting extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.state = {
            loginClicked: false,
            signupClicked: false
        };
    }

    handleLoginClick() {
        this.setState({loginClicked: true});
    }

    handleSignUpClick() {
        this.setState({signupClicked: true})
    }

    render() {
        const loginClicked = this.state.loginClicked;
        // const signupClicked = this.state.signupClicked;
        let container;

        if (loginClicked) {
            container = <Login />;
        } else {
            container = <Welcome />;
        }

        return (
            <div className="col-md-6 col-xs-12">
                {container}
            </div>
        );
    }
}

export default LandingGreeting;