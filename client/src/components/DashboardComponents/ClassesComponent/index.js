import React, { Component } from "react";
import API from "../../../utils/API";
import ClassContainer from "./ClassInfoContainer";
import CardComponent from "../CardComponent"
import AddClass from "./AddClass";
import "./style.css";
// redux imports ===============================
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: [],
            className: "",
            ClassTime: "",
        };    
    }


    componentDidMount = () => {
        this.loadClasses();
      }
    
    loadClasses = () => {
    API.getTeacherClasses(this.props.user.id)
        .then(res =>
        {
            console.log(res);
            this.setState({ classes: res.data.classes, className: "", ClassTime: "" });
        })
        .catch(err => console.log(err));
    };
    

    render() {
        console.log(this.state.classes);
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
                    <AddClass />
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