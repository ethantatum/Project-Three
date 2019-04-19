import React from 'react';
import Dropdown from "./Dropdown";
import ClassSelect from "./TeacherClassSelect";



function ProfileComponent(props) {
    return (
    <div>
        <Dropdown />
        <ClassSelect/>
    </div>
    );
}

export default ProfileComponent;