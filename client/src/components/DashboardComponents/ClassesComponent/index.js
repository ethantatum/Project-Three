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
    
    loadClasses = () => {
    API.getTeacherClasses(this.props.user.id)
        .then(res =>
        {
            console.log(res);
            this.setState({ classes: res.data.classes, className: "", classTime: "" });
        })
        .catch(err => console.log(err));
    };
    
    handleCancel = () => {
        this.setState({addClass: false});
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("clicked btn");
        
        if (this.state.className && this.state.classTime) {
            console.log("Its true");
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

    render() {
        
        return (
            <CardComponent headerText = "Classes">
                <div className="mainClassCont">
                    {this.state.classes.map(classRoom => (
                        <ClassContainer 
                            key={classRoom._id}
                            name={classRoom.name}
                            time={classRoom.time}
                            studentArr={classRoom.studentArr}
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

//connects this component to redux
export default connect(mapStateToProps)(ClassesComponent);