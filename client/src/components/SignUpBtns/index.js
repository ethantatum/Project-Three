import React from 'react';
import './style.css';

function SignUpBtns () {
    return (
        <div className="two ui buttons my-5">
            <button className="large ui green button ml-2">
                Login
            </button>
            <div className="or"></div>
            <button className="large ui blue button mr-2">
                Sign Up
            </button>
        </div>

    )
}

export default SignUpBtns;