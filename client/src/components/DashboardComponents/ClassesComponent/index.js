import React, { Component } from "react";
import API from "../../../utils/API";
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
            ClassTime: "",
            
        };
    }

    componentDidMount = () => {
        console.log(this.props.user);
        this.loadClasses();
      }
    
    loadClasses = () => {
    API.getTeacherClasses(this.props.user.id)
        .then(res =>
        console.log(res)
        )
        .catch(err => console.log(err));
    };
    

    render() {
        return (
           <div>

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
export default connect(mapStateToProps)(ClassesComponent);