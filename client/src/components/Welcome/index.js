import React from "react";
import Logo from "../Logo";
import SignUpBtns from "../SignUpBtns";

function Welcome(props) {
    return (
        <div className="col-12">
            <div className="container-fluid p-3">
                <Logo />
                <p className="text-justify text-white px-5 my-4 welcome-text">
                    Minim cillum adipisicing quis qui.
                    Veniam pariatur consequat tempor officia ad ipsum aute occaecat commodo eu nostrud laborum.
                    Qui adipisicing officia labore labore sint excepteur.
                    Aliqua veniam amet officia quis dolore magna magna pariatur.
                    Et pariatur incididunt et reprehenderit est laborum et exercitation mollit.
                    Minim cillum adipisicing quis qui.
                    Veniam pariatur consequat tempor officia ad ipsum aute occaecat commodo eu nostrud laborum.
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