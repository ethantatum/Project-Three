import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux";
import CardComponent from "../CardComponent";
import { Input, FormBtn, CancelBtn } from "../ClassesComponent/ClassForm";
import StudentContainer from "./StudentContainer";
import BehaviorFrequency from "./StudentBehavior";
import CommentComponent from "../CommentComponent";
import moment from "moment";
import AddStudent from "./AddStudent";
import API from '../../../utils/API';
import "./style.css";

class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            firstname: "",
            lastname: "",
            classID: props.match.params.classID,
            className: "",
            isClassSelected: false,
            isObservingBehavior: false,
            isAddingStudent: false,
            recordedBehaviors: [],
            startTime: "",
            endTIme: "",
            date: ""
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
        // this.setBehaviorCounters();
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
                console.log(res);
                this.setState({students: res.data.studentArr, className: res.data.name, isClassSelected: true});
                // this.setBehaviorCounters();
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

    //Loop through studentArr and get each students behavior and set their frequency to 0
    setBehaviorCounters = () => {
        API.getStudentsInClass(this.state.classID)
        .then(res => {
            console.log(res);
            const studentsBehaviors = res.data.studentArr.map(student => {
                return {
                    studentID: student._id,
                    behaviors: student.behaviors.map(behavior => {
                        return {...behavior, frequency: 0};
                    })}
            });
            console.log(studentsBehaviors);
            this.setState({recordedBehaviors: studentsBehaviors});
        })
        .catch(err => console.log(err));
    };

    //updates the behavior state when user adds frequency
    setInitialBehaviorCounter = (behaviorObj) => {
        let didFindMatch;
        const sumArr = behaviorObj.behaviors.map(behavior => {
            return behavior.frequency;
        });
        let sum = sumArr.reduce((partial_sum, a) => partial_sum + a);
        console.log(sum);

        const BehaviorArr = this.state.recordedBehaviors.map(studentBehavior => {
            return {...studentBehavior}
        });

        if(this.state.recordedBehaviors.length === 0){
            // BehaviorArr.push(behaviorObj);
            didFindMatch = false;
        }
        else{
            for(let i = 0; i < BehaviorArr.length; i++){
                if(behaviorObj.studentID === BehaviorArr[i].studentID ){
                    if(sum === 0){
                        console.log("exist return 0");
                        BehaviorArr[i].behaviors = behaviorObj.behaviors;
                        didFindMatch = true; 
                        break;      
                    }
                    else{
                        BehaviorArr[i].behaviors = behaviorObj.behaviors;
                        didFindMatch = true; 
                        break;
                    }

                }
                else{
                    didFindMatch = false;
                } 
            }     
        };
        if(!didFindMatch && sum > 0){
            BehaviorArr.push(behaviorObj);
        };
    
        console.log(BehaviorArr);
        // const updatedBehaviorArr = this.state.recordedBehaviors.push(behaviorObj);
        // console.log(updatedBehaviorArr);
        this.setState({recordedBehaviors: BehaviorArr});
    };

    // begins the observation of behvaiors, sets behaviors to 0 
    startObservation = () => {
        this.setState({isObservingBehavior: true, date: moment().format("L"), startTime: moment().format("LT")});
        console.log(moment().format("L"));
        console.log(moment().format("LT"));
        //gets the start time and date of when observation started using moment
    };

    endObservation = () => {
        this.setState({isObservingBehavior: false});
        console.log(moment().format("LT"));

        
        for(let i = 0; i < this.state.recordedBehaviors.length; i++){
            const report = {
                date: this.state.date,
                startTime: this.state.startTime,
                endTime: moment().format("LT"),
                recordedBehaviors: this.state.recordedBehaviors[i].behaviors
            };
            API.addReport(this.state.recordedBehaviors[i].studentID, report)
            .then(res => {
                console.log(res); 
            })
            .catch(err => console.log(err));
            }

    };


    render(){
        const { match } = this.props;     

        return (
            <div>       
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => 
                        <CardComponent headerText = {`Students - ${this.state.className}`}>
                            <div className="container">
                                <div>
                                    <button onClick={this.startObservation}  className={`btn btn-success btn-block mt-3 p-4 ${this.state.isObservingBehavior ? "disabled" : ""}`}>Start Observation</button>
                                    <button onClick={this.endObservation} className={`btn btn-danger btn-block mt-3 mb-5 p-4 ${this.state.isObservingBehavior ? "" : "disabled"}`}>End Observation</button>
                                </div>
                                <div className="row d-flex">
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
                                </div>
                                <div className="row d-flex">
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
                            </div>
                        </CardComponent>       
                    }/> 
                    <Route path={`${match.path}/behaviors/:studentID`} render={(props) => 
                        <BehaviorFrequency 
                            {...props}
                            recordedBehaviors={this.state.recordedBehaviors}
                            setInitialBehaviorCounter={this.setInitialBehaviorCounter}
                        />
                    }/>
                    <Route path={`${match.path}/comments/:studentID`} component={CommentComponent}/>
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