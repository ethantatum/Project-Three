import React, { Component } from "react";
import Logo from "../../components/Logo";
import SignUpForm from "../../components/SignUpForm";
import Footer from "../../components/Footer";

class SignUp extends Component {
    state = {
  
    };

    render() {
        return (
        <div>
            <Logo />
            <SignUpForm />
            <Footer />
        </div>
        );
      }
}

export default SignUp;