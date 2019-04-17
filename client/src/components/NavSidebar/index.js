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
            <li>
                <img className="ml-1 mt-1 img-thumbnail" src={faker.image.avatar()} alt="avatar"/><br />
                <h4>{props.user}</h4>
            </li>
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