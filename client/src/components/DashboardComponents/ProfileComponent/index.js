import React, {Component} from 'react';
import { Dropdown } from "semantic-ui-react";
import API from "../../../utils/API";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const classOptions = [
    { key: "burgundy", text: "Burgundy", value: "burgundy" },
    { key: "emerald", text: "Emerald", value: "emerald" },
    { key: "paisley", text: "Paisley", value: "paisley" }

]

class ProfileComponent extends Component {
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
    
    componentDidMount() {
        this.loadStudents();
    }
    
    loadStudents = () => {
        API.getStudents()
        .then(res => {console.log(res);
            this.setState({ studentList: res.data }, () => (console.log(res.data)))})
            .catch(err => console.log(err));
        }
        
    studentOptions = () => {
        return this.state.studentList.map(student => (
                {key: student._id, text: student.name, value: student._id}
            ))
        }     

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleDropdown = (e, { value }) => this.setState({ student: value });

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
            let userInfo = {
                firstName: this.state.name.firstName,
                
            }
        API.updateUser()
        .then()
    }

    // Helper function checks if there is any content in required input fields
    validateTeacher = () => this.state.classroom.length > 0;
    
    // Helper function checks if there is any content in required input fields
    validateParent = () => this.state.student.length > 0;

    render() {
        let selector;

        if(this.props.user.isTeacher) {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Classrooms' name="classroom" value={this.state.classroom} compact multiple selection options={classOptions} onChange={this.handleDropdown} /><br />
                            <button className="ui inverted button mt-2" type="submit" disabled={!this.validateTeacher()} onClick={this.handleSubmit} >Submit</button>
                        </form>
        } else {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Students' name="student" value={this.state.student} compact multiple selection options={this.studentOptions()} onChange={this.handleDropdown} /><br />
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

//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

//connects this component to redux
export default connect(mapStateToProps)(ProfileComponent);