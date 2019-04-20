import React, { Component } from "react";
import {Dropdown} from "semantic-ui-react";

const options = [
    {key: "burgundy", text: "Burgundy", value: "burgundy"},
    {key: "emerald", text: "Emerald", value: "emerald"},
    {key: "paisley", text: "Paisley", value: "paisley"}

]

class TeacherClassSelect extends Component {
    state = {
        class: []
    }

    handleSelect() {

    }

    render() {
        return (
            <form className="mt-5">
                <Dropdown placeholder='Classrooms' compact multiple selection options={options} /><br />
                <button className="ui inverted button mt-1" type="submit" >Submit</button>
            </form>
        )
    }
}

export default TeacherClassSelect;