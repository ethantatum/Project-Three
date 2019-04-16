import React from "react";
import Logo from "../Logo";
import "./style.css";

function Welcome(props) {
    return (
        <div className="col-12">
                <Logo />
            <div className="container-fluid p-3" id="test">
                <p className="text-justify text-white px-5 my-4 welcome-text">
                CareConnect serves as a communication platform for teachers, parents, and caretakers of children with autism. CareConnect allows users to track a child's progress towards personal, educational, and behavioral goals. Users can leave notes of significant events that occured during the day and track behaviors as they occur.
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