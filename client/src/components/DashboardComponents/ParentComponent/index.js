import React, { Component } from "react";
import API from "../../../utils/API";
import CardComponent from "../CardComponent";
// import "./style.css";
// redux imports ===============================
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            children: [],
            student: {
                name: "",
                image: ""
            }
        };
    }

    componentDidMount = () => {
        this.loadSMyStudents();
    };

    // Loads students that belong to the parent
    loadMyStudents = () => {
        API.getUserData(this.props.user.id)
            .then(res => {
                console.log(res);
                this.setState({ children: res.data.children });
            })
            .then(getStudentData())
            .catch(err => console.log(err));
    };

    getStudentData = () => {
        API.getStudent(this.state.children[0])
            .then(res => {
                console.log(res);
                this.setState({ student.name: res.data.Name })
            })
    }

    render() {

        return (
            <CardComponent headerText="My Student">
                <div className="container mainClassCont">
                    <div className="row d-flex">
                        {this.state.children.map(child => (
                            <ClassContainer
                                key={child._id}
                                id={child._id}
                                name={child.name}
                                time={child.time}
                                studentArr={child.studentArr}
                                clickClass={() => this.clickClass(child)}
                            />
                        ))}
                    </div>
                    <div className="row d-flex">
                            <AddClass handleAddClick={() => { if (this.state.addClass === false) { this.setState({ addClass: true }) } }} >

                                {this.state.addClass ? (
                                    <div>
                                        <form>
                                            <Input
                                                id="className"
                                                value={this.state.className}
                                                onChange={this.handleChange}
                                                name="name"
                                                placeholder="Class Name (required)"
                                            />
                                            <Input
                                                id="classTime"
                                                value={this.state.classTime}
                                                onChange={this.handleChange}
                                                name="time"
                                                placeholder="Class Time (required)"
                                            />

                                            <FormBtn
                                                className="m-1"
                                                disabled={!(this.state.className && this.state.classTime)}
                                                onClick={this.handleSubmit}
                                                type="submit"
                                            >
                                                Add Class
                                            </FormBtn>

                                        </form>
                                        <CancelBtn handleCancelClick={() => this.setState({ addClass: false })}>
                                            Cancel
                                        </CancelBtn>
                                    </div>
                                ) : (
                                        <img className="mb-1 p-2 rounded img-fluid" src={require('./images/add.svg')} alt="Add Class" />
                                    )}
                            </AddClass>
                            </div>
                    
                </div>
            </CardComponent>

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
export default connect(mapStateToProps);