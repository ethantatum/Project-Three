import React from 'react';
import NavSideBarLink from "./NavSideBarLink";
import './style.css';
import { Link } from 'react-router-dom'


const NavSideBar = (props) => {
    let barClasses = 'side-bar';
    if (props.show) {
        barClasses = 'side-bar open';
    }

    
    let sideNavBarButtons;
    if(props.isTeacher){
        sideNavBarButtons = 
        <ul className="teacher-btns">
            <li>
                <NavSideBarLink to={`${props.match.url}/classes`} label="Classes" />
            </li>
            <li>
    
                <NavSideBarLink to={`${props.match.url}/students/${props.selectedClass ? props.selectedClass._id : "all"}`} label="Students"/>
            </li>
            <li>
                <NavSideBarLink to={`${props.match.url}/messages`} label="Messages"/>
            </li>
            <li>
                <NavSideBarLink to={`${props.match.url}/notes`} label="notes"/>
            </li>
            <li>
                <NavSideBarLink to={`${props.match.url}/profile`} label="Profile"/>
            </li>
        </ul>
    }
    else if(!props.isTeacher){
        sideNavBarButtons = 
        <ul className="parent-btn">
            <li>
                <Link to={`${props.match.url}/students`}>My Students</Link>
            </li>
            {/* <li>
                <Link to={`${props.match.url}/reports`}>Reports</Link>
            </li>
            <li>
                <Link to={`${props.match.url}/messages`}>Messages</Link>
            </li> */}
            <li >
                <Link to={`${props.match.url}/profile`}>Profile</Link>
            </li>
        </ul>
    }

    return (
        <nav className={barClasses}>
            <ul>
                <li>
                    <img className="mt-1 img-thumbnail" src={props.userImage} alt="avatar" /><br />
                    <h4>{props.user}</h4>
                </li>
            </ul>
            {sideNavBarButtons}
        </nav>
    );
};

export default NavSideBar;