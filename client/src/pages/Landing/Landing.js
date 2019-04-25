import React, { Component } from "react";
// import LandingGreeting from "../../components/LandingGreeting";
// import CallToAction from "../../components/CallToAction";
// import Login from "../../components/Login";
// import Logo from "../../components/Logo";
import LandingImage from "../../components/LandingComponents/LandingImage";
import InfoPanel from "../../components/LandingComponents/InfoPanel";
import Welcome from "../../components/LandingComponents/Welcome";
import Login from "../../components/LandingComponents/Login"; 
import SignUpForm from "../../components/LandingComponents/SignUpForm";
import './style.css';
// import API from "../utils/API";

class Landing extends Component {
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
      const signupClicked = this.state.signupClicked;
      let container;

      if (loginClicked) {
          container = <Login handleLogin={this.handleLoginClick} />;
      } else if (signupClicked) {
          container = <SignUpForm handleLogin={this.handleSignUpClick} />;
      } else {
          container = <Welcome handleLogin={this.handleLoginClick} handleSignUp={this.handleSignUpClick} />;
      }
      
      return (
      <div>
          <div className="row" id="landingTop">
          <div className="col-md-6 col-xs-12">
              {container}
          </div>
          <LandingImage />
          </div>
          <InfoPanel />
      </div>
      );
      }
}

export default Landing;
