import React from "react";

function TeacherClassSelect() {
    return (
        <div className="ui simple selection dropdown">
            <input type="hidden" name="class" />
            <i className="dropdown icon"></i>
            <div className="left icon default text">Select Classroom</div>
            <i className="school icon"></i>
            <div className="menu">
                <div className="item" >
                    Burgundy
                </div>
                <div className="item" >
                    Emerald
                </div>
                <div className="item" >
                    Paisley
                </div>
            </div>
        </div>
    )
}

export default TeacherClassSelect;