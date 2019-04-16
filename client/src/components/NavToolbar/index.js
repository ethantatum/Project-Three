import React from 'react';
import NavSideButton from'../NavSideButton';
import './style.css';



const NavToolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <NavSideButton click={props.barClickHandler}/>
            </div>
            <div className="toolbar-logo">Logo
                {<img src={require('../Logo/images/logo2b.png')} /> }
            </div>
            <div className="spacer"></div>
            <div className="toolbar-items">
                <ul>
                    <li><a href="/"></a></li>
                    <li><a href="/">Log Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default NavToolbar;