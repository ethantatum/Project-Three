import React, {Component} from "react";


class TeacherClassSelect extends Component {
    state = {
        class: []
    }

    handleSelect() {

    }

    render() {
    return (
        <form>
            <select className="ui fluid search dropdown" multiple="">
                <option value="" >Select Classroom</option>
                <option value="Burgundy">Burgundy</option>
                <option value="Emerald">Emerald</option>
                <option value="Paisley">Paisley</option>
            </select>
            <button className="ui button" type="submit" onClick={}>Submit</button>
        </form> 
    )
}
}

export default TeacherClassSelect;