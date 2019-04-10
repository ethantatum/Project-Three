import React, { Component } from "react";
import Logo from "../../components/Logo";
import Welcome from "../../components/Welcome";
import SignUpBtns from "../../components/SignUpBtns";
import Login from "../../components/Login";

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
        const signupClicked = this.state.signupClicked;
        let container;

        if (loginClicked) {
            container = <Login />;
        } else {
            container = <Welcome />;
        }
    }
}