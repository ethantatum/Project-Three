import React from 'react';
import './style.css';

const NavSideButton = props => (
    <button className="hamburger-button" onClick={props.click}>
        <div className="button-line" />
        <div className="button-line" />
        <div className="button-line" />
    </button>
);

export default NavSideButton;