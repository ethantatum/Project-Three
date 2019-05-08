import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux";
import CardComponent from "../CardComponent";
import { Input, FormBtn, CancelBtn } from "../ClassesComponent/ClassForm";
import StudentContainer from "./StudentContainer";
import BehaviorFrequency from "./StudentBehavior";
import CommentComponent from "../CommentComponent";
import AddStudent from "./AddStudent";
import API from '../../../utils/API';

class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startTime: "",
            classID: props.match.params.classID,
            className: "",
            isClassSelected: false,
            isObservingBehavior: false,
            isAddingStudent: false,
            students: [],
            firstname: "",
            lastname: "",
        };    
    }

    //for form input
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    componentDidMount = () => {
        console.log(this.state.classID);
        if(this.state.classID === "all"){
            console.log("all students");
            this.getAllStudents();
        }
        else{
            console.log("students in" + this.state.classID);
            this.getStudentsInClass();
        }
    };

    //gets all the students from all the classes that belong to user
    getAllStudents = () => {
        API.getStudentsInAllClasses(this.props.user.id)
            .then(res => {
                const studentArr = [];
                console.log(res);
                //loops through array of objects and extracts the student's array from each class
                for(let i = 0; i < res.data.length; i++){
                    studentArr.push(res.data[i].studentArr);
                }
                //merges all the arrays within the studentArr
                const mergedStudents = [].concat.apply([], studentArr);
                console.log(mergedStudents);
                return mergedStudents;
            })
            .then(data => this.setState({students: data, className: "All Students", isClassSelected: false}))
            .catch(err => console.log(err))
    };

    getStudentsInClass = () => {
        API.getStudentsInClass(this.state.classID)
            .then(res => {
                this.setState({students: res.data.studentArr, className: res.data.name, isClassSelected: true});
            })
            .catch(err => console.log(err));
    }

    //function that runs when user clicks the forms submit button
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.firstname && this.state.lastname) {
        API.createStudent(this.state.classID, {
            firstname: this.state.firstname,
            lastname: this.state.lastname
        })
        .then((res) => {
            console.log(res);
            this.getStudentsInClass();
            this.setState({isAddingStudent: false});
        })
        .catch(err => console.log(err));  
        }
    };

    //function to show the correct header text
    // showHeaderText = (action, student) => {
    //     // if(action && student){
    //     //     return `${action} - ${student}`;
    //     // }
    //     if(this.state.classID === "all"){
    //         return `Students - All Students`;
    //     }
    //     else{
    //         return 'Students - All Students';
    //     }
        
    // };

    render(){
        const { match } = this.props;     

        return (
            <div>       
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => 
                        <CardComponent headerText = {`Students - ${this.state.className}`}>
                            <div className="container bg-dark py-3">
                                {this.state.students.map(student => (
                                    <StudentContainer 
                                        key={student._id}
                                        id={student._id}
                                        firstname={student.firstname}
                                        lastname={student.lastname}
                                        image={student.image}
                                        updateHeader={this.showHeaderText}
                                        match={match}
                                    /> 
                                ))}
                                <AddStudent handleAddClick = {() => {if(this.state.isAddingStudent === false){this.setState({isAddingStudent: true})}}}>
                                {this.state.isAddingStudent ? (
                                    <div >
                                        <form>
                                        <Input
                                            id="firstname"
                                            value={this.state.firstname}
                                            onChange={this.handleChange}
                                            name="firstname"
                                            placeholder="First Name (required)"
                                        />
                                        <Input
                                            id="lastname"
                                            value={this.state.lastname}
                                            onChange={this.handleChange}
                                            name="lastname"
                                            placeholder="Last Name (required)"
                                        />

                                        <FormBtn
                                            disabled={!(this.state.firstname && this.state.lastname)}
                                            onClick={this.handleSubmit}
                                            type="submit"
                                        >
                                            Add Student
                                        </FormBtn>
                                        </form>
                                        <CancelBtn handleCancelClick = {() => this.setState({isAddingStudent: false})}>
                                                Cancel
                                        </CancelBtn>
                                    </div>
                                    ) : (
                                    <img src={require('../ClassesComponent/images/add.svg')} alt="Add Student" /> 
                                )}
                                </AddStudent>
                            </div>
                        </CardComponent>       
                    }/> 
                    <Route exact path={`${match.path}/behaviors/:studentID`} component={BehaviorFrequency}/>
                    <Route exact path={`${match.path}/comments/:studentID`} component={CommentComponent}/>
                </Switch>  
            </div>
        );
    }
}



//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user,
        selectedClass: state.selectedClass
    }
}

//connects this component to redux
export default connect(mapStateToProps)(ClassesComponent);