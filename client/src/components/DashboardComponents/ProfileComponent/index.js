import React, {Component} from 'react';
import { Dropdown } from "semantic-ui-react";
import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const classOptions = [
    { key: "burgundy", text: "Burgundy", value: "burgundy" },
    { key: "emerald", text: "Emerald", value: "emerald" },
    { key: "paisley", text: "Paisley", value: "paisley" }

]

class ProfileComponent extends Component {
    state = {
        name: "",
        image: "",
        classes: [],
        children: [],
        address: "",
        phone: "",
        classList: [],
        studentList: []
    }       
    
    componentDidMount() {
        this.props.user.isTeacher ? this.loadClasses() : this.loadStudents();
    }
    
    // loadClasses = () => {
    //     API.getclasses()
    //     .then(res => {console.log(res);
    //         this.setState({ classList: res.data }, () => (console.log(res.data)))})
    //         .catch(err => console.log(err));
    //     }

    loadStudents = () => {
        API.getStudents()
        .then(res => {console.log(res);
            this.setState({ studentList: res.data }, () => (console.log(res.data)))})
            .catch(err => console.log(err));
        }

    // classOptions = () => {
    //     return this.state.classList.map(classroom => (
    //         {key: classroom._id, text: classroom.name, value: classroom._id}
    //     ))
    // }
        
    studentOptions = () => {
        return this.state.studentList.map(student => (
                {key: student._id, text: student.name, value: student._id}
            ))
        }     

    // Helper function that updates state to be the user text inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleTeacherDropdown = (e, { value }) => this.setState({ classes: value });
    handleParentDropdown = (e, { value }) => this.setState({ children: value });

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
        //     let userData;
        //     if(this.props.user.isTeacher) {
        //         userData = {
        //             name: this.state.name,
        //             image: this.state.image,
        //             classes: this.state.classes
        //         }
        //     } else {
        //         userData = {
        //             name: this.state.name,
        //             image: this.state.image,
        //             children: this.state.children,
        //             address: this.state.address,
        //             phone: this.state.phone
        //         }
        //     }
        // API.updateUser((this.props.user._id), userData)
        // .then()
    }

    // Helper function checks if there is any content in required input fields
    // validateTeacher = () => this.state.classes.length > 0;
    
    // Helper function checks if there is any content in required input fields
    // validateParent = () => this.state.children.length > 0;

    validateButton = () => this.state.classes.length > 0 || this.state.children.length > 0;

    render() {
        let selector;

        if(this.props.user.isTeacher) {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Classrooms' name="classroom" value={this.state.classroom} compact multiple selection options={classOptions} onChange={this.handleTeacherDropdown} /><br />
                        </form>
        } else {
            selector = <form className="mt-1">
                            <Dropdown placeholder='Students' name="student" value={this.state.student} compact multiple selection options={this.studentOptions()} onChange={this.handleParentDropdown} /><br />
                            <div className="ui inverted left icon input">
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    name="address"
                                ></input>
                                <i className="home icon"></i>
                            </div>
                            <div className="ui inverted divider"></div>
                            <div className="ui inverted left icon input">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    name="phone"
                                ></input>
                                <i className="mobile alternate icon"></i>
                            </div>
                            <div className="ui inverted divider"></div>
                        </form>
        }
        return (
            <div className="container m-3" >
                <React.Fragment>
                    <div className="ui inverted left icon input">
                        <input
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
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
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted button mt-2" type="submit" disabled={!this.validateButton()} onClick={this.handleSubmit} >Submit</button>
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