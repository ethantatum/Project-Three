import React from 'react';
import './style.css';
import faker from 'faker';
import { Link } from 'react-router-dom'

const NavSideBar = (props) => {
    let barClasses = 'side-bar';

    if (props.show) {
        barClasses = 'side-bar open';
    }

    let sideNavBarButtons;
    if(props.isTeacher){
        sideNavBarButtons = 
        <ul className="ml-5">
            <li>
                <Link to={`${props.match.url}/classes`}>Classes</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/students`}>Students</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/messages`}>Messages</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/notes`}>Notes</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/profile`}>Profile</Link>
            </li>
        </ul>
    }
    else if(!props.isTeacher){
        sideNavBarButtons = 
        <ul className="ml-5">
            <li>
                <Link to={`${props.match.url}/students`}>My Students</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/reports`}>Reports</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/messages`}>Messages</Link>
            </li>
            <li >
                <Link to={`${props.match.url}/profle`}>Profile</Link>
            </li>
        </ul>
    }

    return (
        <nav className={barClasses}>
            <ul>
                <li>
                    <img className="ml-1 mt-1 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
                    <h4>{props.user}</h4>
                </li>
            </ul>
            {sideNavBarButtons}
        </nav>
    );
};

export default NavSideBar;