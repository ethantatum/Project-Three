import React from 'react';
import './style.css';
import faker from 'faker';

const NavSideBar = props => {
    let barClasses = 'side-bar';
    if (props.show) {
        barClasses = 'side-bar open';
    }

    let sideNavBarButtons;
    if(props.isTeacher){
        sideNavBarButtons = 
        <div className="ui vertical buttons nav-buttons ml-5">
          <button className="ui button">Classes</button>
          <button className="ui button">Students</button>
          <button className="ui button">Messages</button>
          <button className="ui button">Notes</button>
          <button className="ui button">Profile</button>
        </div>
    }
    else if(!props.isTeacher){
        sideNavBarButtons = 
        <div className="ui vertical buttons nav-buttons ml-5">
            <button className="ui button">My Students</button>
            <button className="ui button">Reports</button>
            <button className="ui button">Messages</button>
            <button className="ui button">Profile</button>
        </div>
    }

    return (
        <nav className={barClasses}>
            <ul>
                <li>
                    <img className="ml-1 mt-1 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
                    <h4>{props.user}</h4>
                </li>
            </ul>
            {/* <div className="ui vertical buttons nav-buttons ml-5">
                <button className="ui button">Students</button>
                <button className="ui button">Messages</button>
                <button className="ui button">Notes</button>
                <button className="ui button">Profile</button>
            </div> */}
            {sideNavBarButtons}
        </nav>
    );
};

export default NavSideBar;