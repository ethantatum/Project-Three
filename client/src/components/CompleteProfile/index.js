import React, {Component} from "react";
import { Dropdown } from "semantic-ui-react";
import "./style.css";

const classOptions = [
    { key: "burgundy", text: "Burgundy", value: "burgundy" },
    { key: "emerald", text: "Emerald", value: "emerald" },
    { key: "paisley", text: "Paisley", value: "paisley" }

]

// let studentOptions;

const studentOptions = [
    { key: "Michael", text: "Michael", value: "Michael" },
    { key: "Emily", text: "Emily", value: "Emily" },
    { key: "Jason", text: "Jason", value: "Jason" }

]

class CompleteProfile extends Component {
    // constructor(props) {
    //     super(props);
        state = {
            name: {
                firstName: "",
                lastName: ""
            },
            image: "",
            classroom: [],
            student: [],
            address: "",
            phone: "",
            studentList: []
        }

    // }

    componentDidMount() {
        this.loadStudents();
    };

    loadStudents = () => {
        API.getStudents()
        .then(res => {console.log(res);
             this.setState({ studentList: res.data }, () => (console.log(res.data)))})
        .catch(err => console.log(err));
    };

    studentOptions = this.state.studentList.map(student => (
        {key: {student.name}, text: {student.name}, value: {student.name} }
    ));

    // Helper function that updates state to be the user text inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Helper function that updates state to be the user dropdown selections
    handleDropdown = (e, {value}) => this.setState({student: value});

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
    };

    // Helper function checks if there is any content in required input fields
    validateTeacher = () => this.state.classroom.length > 0;
    
    // Helper function checks if there is any content in required input fields
    validateParent = () => this.state.student.length > 0;
    

    render() {
        let selector;

        if(this.props.isTeacher) {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Classrooms' value={this.state.classroom} compact multiple selection options={classOptions} onChange={this.handleDropdown} /><br />
                            <button className="ui inverted button mt-2" type="submit" disabled={!this.validateTeacher()} onClick={this.handleSubmit} >Submit</button>
                        </form>
        } else {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Students' value={this.state.student} compact multiple selection options={this.state.studentList.map(student => ({key: student.name, text: student.name, value: student.name})} onChange={this.handleDropdown} /><br />
                            <button className="ui inverted button mt-2" type="submit" disabled={!this.validateParent()} onClick={this.handleSubmit} >Submit</button>
                        </form>
        }
        return (
            <div className="container m-3" >
                <React.Fragment>
                    <div className="ui inverted left icon input">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={this.state.name.firstName}
                            onChange={this.handleChange}
                            name="name"
                        ></input>
                        <i className="keyboard icon"></i>
                    </div>
                    <div className="ui inverted left icon input ml-3">
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={this.state.name.lastName}
                            onChange={this.handleChange}
                            name="name"
                        ></input>
                        <i className="keyboard icon"></i>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted left icon input">
                        <input
                            type="text"
                            placeholder="Image link (optional)"
                            value={this.state.image}
                            onChange={this.handleChange}
                            name="image"
                        ></input>
                        <i className="camera retro icon"></i>
                    </div>
                    <div className="ui inverted divider"></div>
                    {selector}
                </React.Fragment>
            </div>
        )

    }
}

export default CompleteProfile;