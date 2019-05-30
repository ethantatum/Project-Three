import React, { Component } from "react";
import API from "../../../utils/API";
import ClassContainer from "../ClassesComponent/ClassInfoContainer";
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
            firstname: "",
            lastname: "",
            image: "" 
        };
    }

    componentDidMount = () => {
        this.loadSMyStudents();
    };

    // Loads students that belong to the parent
    loadMyStudents = () => {
        API.getUserData(this.props.user.id)
            .then(res => {
                console.log(res.data);
                this.setState({ children: res.data.children });
            })
            .then(this.getStudentData())
            .catch(err => console.log(err));
    };

    getStudentData = () => {
        API.getStudent(this.state.children[0])
            .then(res => {
                console.log(res.data);
                this.setState({ 
                    firstname: res.data.firstname, 
                    lastname: res.data.lastname,
                    image: res.data.image 
                })
            })
    }

    render() {

        let name = (`${this.state.firstname} ${this.state.lastname}`);

        return (
            <CardComponent headerText="My Student">
                <div className="container mainClassCont">
                    <div className="row d-flex">
                            <ClassContainer
                                key={this.state.children[0]}
                                id={this.state.children[0]}
                                name={name}
                                image={this.state.image}
                                clickClass={() => this.clickClass(this.children[0])}
                            />
                    </div>
                    
                </div>
            </CardComponent>

        )
    }
}

// Original map function (for teacher display)
    // {this.state.children.map(child => (
    //     <ClassContainer
    //         key={child._id}
    //         id={child._id}
    //         name={child.name}
    //         time={child.time}
    //         studentArr={child.studentArr}
    //         clickClass={() => this.clickClass(child)}
    //     />
    // ))}

//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

//connects this component to redux
export default connect(mapStateToProps);