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
                <Dropdown placeholder='Classrooms' fluid multiple selection options={options} />
                <button className="ui inverted button" type="submit" >Submit</button>
            </form>
        )
    }
}

export default TeacherClassSelect;