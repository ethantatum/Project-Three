import React from "react";
import Logo from "../Logo";
import SignUpBtns from "../SignUpBtns";

function Welcome (props) {
    return ( 
        <div className="col-12">
            <div className="container-fluid bg-dark p-3">
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
                <SignUpBtns />
            </div>
        </div> 
    )
}

export default Welcome;