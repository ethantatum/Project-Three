import React from "react";
import Logo from "../Logo";
import "./style.css";
import SignUpBtns from "../SignUpBtns";

function Welcome(props) {
    return (
        <div className="col-12">
                <Logo />
            <div className="container-fluid p-3" id="test">
                <p className="text-justify text-white px-5 my-4 welcome-text">
                Care Connect serves as a communication platform for teachers, parents and caretakers. It helps with tracking progress towards personal and educational goals and tracking behaviors that occur during the day.
                </p>
                <div className="two ui buttons my-5">
                    <button className="large ui green button ml-2" onClick={props.handleLogin}>
                        Login
                    </button>
                    <div className="or"></div>
                    <button className="large ui blue button mr-2" onClick={props.handleSignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;