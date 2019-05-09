import React from 'react';
import NavSideButton from '../NavSideButton';
import logo from '../../../LandingComponents/Logo/images/logo2w.png';
import './style.css';



const NavToolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <NavSideButton click={props.clickHandler} />
            </div>
            <div className="toolbar-logo">
                {<img src={logo} alt="logo" />}
            </div>
            <div className="spacer"></div>
            <div className="toolbar-items">
                <ul>
                    <li><h6 className="mt-1 welcome-user">{props.user}</h6></li>
                </ul>
                <ul>
                    <li><a className="h4 float-right" href="/" onClick={props.logoutClick}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavToolbar;