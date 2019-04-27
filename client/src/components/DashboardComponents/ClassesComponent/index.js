import React, { Component } from "react";
import API from "../../../utils/API";
import ClassContainer from "./ClassInfoContainer";
import CardComponent from "../CardComponent"
import AddClass from "./AddClass";
import { Input, FormBtn, CancelBtn } from "./ClassForm";
import "./style.css";
// redux imports ===============================
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectClass} from "../../../actions/appActions";

class ClassesComponent extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            className: "",
            classTime: "",
            addClass: false
        };    
    }

    componentDidMount = () => {
        this.loadClasses();
    };
    
    //Loads the classes that belong to the account
    loadClasses = () => {
    API.getTeacherClasses(this.props.user.id)
        .then(res =>
        {
            console.log(res);
            this.setState({ classes: res.data.classes, className: "", classTime: "" });
        })
        .catch(err => console.log(err));
    };
    
    //function that runs when user clicks cancel button 
    handleCancel = () => {
        this.setState({addClass: false});
    };

    //for form input
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    //function that runs when user clicks the forms submit button
    handleSubmit = event => {
        event.preventDefault();
        
        if (this.state.className && this.state.classTime) {
        API.createClass(this.props.user.id, {
            name: this.state.className,
            time: this.state.classTime
        })
        .then((res) => {
            console.log(res);
            this.loadClasses();
            this.setState({addClass: false});
        })
        .catch(err => console.log(err));  
        }
    };

    clickClass = (classData) => {
    API.getStudentsInClass(classData._id)
        .then(res => {
            console.log(res);
            this.props.selectClass(res);
        })
        .then( () => this.props.history.push("/dashboard/students"))
        .catch(err => console.log(err));
        // console.log(classData);
        // this.props.selectClass(classData);
    };

    render() {
        
        return (
            <CardComponent headerText = "Classes">
                <div className="mainClassCont">
                    {this.state.classes.map(classRoom => (
                        <ClassContainer 
                            key={classRoom._id}
                            id={classRoom._id}
                            name={classRoom.name}
                            time={classRoom.time}
                            studentArr={classRoom.studentArr}
                            clickClass={() => this.clickClass(classRoom)}
                        />
                    ))}
                    <AddClass handleAddClick = {() => {if(this.state.addClass === false){this.setState({addClass: true})}}}>
                    {this.state.addClass ? (
                        <div className="addClassCont">
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
                                    disabled={!(this.state.className && this.state.classTime)}
                                    onClick={this.handleSubmit}
                                    type="submit"
                                >
                                    Add Class
                                </FormBtn>

                            </form>
                            <CancelBtn handleCancelClick = {() => this.setState({addClass: false})}>
                                    Cancel
                            </CancelBtn>
                        </div>
                        ) : (
                        <img src={require('./images/add.svg')} alt="Add Class" /> 
                    )}
                    </AddClass>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectClass: selectClass}, dispatch)
}

//connects this component to redux
export default connect(mapStateToProps, matchDispatchToProps)(ClassesComponent);