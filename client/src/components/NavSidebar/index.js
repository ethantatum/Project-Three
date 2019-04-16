import React from 'react';
import './style.css';
import faker from 'faker';

const NavSideBar = props => {
    let barClasses = 'side-bar';
    if (props.show) {
            barClasses = 'side-bar open';
    }

    return (
    <nav className={barClasses}>
        <ul>
            <li><img src={faker.image.avatar()} alt="avatar"/></li>
            <li>
                <a href="/">Students</a>
            </li>
            <li>
                <a href="/">Messages</a>
            </li>
            <li>
                <a href="/">Notes</a>
            </li>
            <li>
                <a href="/">misc</a>
            </li>
        </ul>
    </nav>
    );
};

export default NavSideBar;