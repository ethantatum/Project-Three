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
            children: []
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
            .catch(err => console.log(err));
    };
}

//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

//connects this component to redux
export default connect(mapStateToProps);