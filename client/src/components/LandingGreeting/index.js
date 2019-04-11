import React, { Component } from "react";
import Welcome from "../Welcome";
import Login from "../Login"; 
import SignUpForm from "../SignUpForm"  ;

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
        return (this.state.loginClicked ? this.setState({loginClicked: false}) : this.setState({loginClicked: true}));
    }

    handleSignUpClick() {
        return (this.state.signupClicked ? this.setState({signupClicked: false}) : this.setState({signupClicked: true}));
    }

    render() {
        const loginClicked = this.state.loginClicked;
        // const signupClicked = this.state.signupClicked;
        let container;

        if (loginClicked) {
            container = <Login handleLogin={this.handleLoginClick} />;
        } else if (signupClicked) {
            container = <SignUpForm handleLogin={this.handleSignUpClick} />;
        } else {
            container = <Welcome handleLogin={this.handleLoginClick} handleSignUp={this.handleSignUpClick} />;
        }

        return (
            <div className="col-md-6 col-xs-12">
                {container}
            </div>
        );
    }
}

export default LandingGreeting;