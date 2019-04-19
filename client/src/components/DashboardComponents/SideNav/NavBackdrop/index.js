import React from 'react';
import './style.css';

const NavBackdrop = props => (
    <div className="back-drop" onClick={props.click}/>
);

export default NavBackdrop;