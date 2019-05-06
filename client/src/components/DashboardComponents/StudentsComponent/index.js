import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import {connect} from "react-redux";
import CardComponent from "../CardComponent";
import StudentContainer from "./StudentContainer";
import BehaviorFrequency from "./StudentBehavior";
import CommentComponent from "../CommentComponent";
import API from '../../../utils/API';

class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            firstname: "",
            lastname: "",
        };    
    }

    componentDidMount = () => {
        if(this.props.selectedClass){
            console.log("class was selected!!!");
            this.setState({students: this.props.selectedClass.studentArr});
        }
        else{
            console.log("get all students");
            this.getAllStudents();
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
            .then(data => this.setState({students: data}))
            .catch(err => console.log(err))
    };

    //function to show the correct header text
    showHeaderText = (action, student) => {
        // if(action && student){
        //     return `${action} - ${student}`;
        // }
        if(this.props.selectedClass){
            return `Students - ${this.props.selectedClass.name}`;
        }
        else{
            return 'Students - All Students';
        }
        
    };

    render(){
        const { match } = this.props;     

        return (
            <div>
            
            <Switch>
                <Route exact path={`${match.path}`} render={(props) => 
                <CardComponent headerText = {this.showHeaderText()}>
                    <div>
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
                </CardComponent>       
                }/> 
                <Route path={`${match.path}/behaviors/:studentID`} component={BehaviorFrequency}/>
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