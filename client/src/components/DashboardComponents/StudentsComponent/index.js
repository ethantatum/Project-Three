import React, {Component} from 'react';
import {connect} from "react-redux";
import CardComponent from "../CardComponent";
import StudentContainer from "./StudentContainer";
import BehaviorFrequency from "./BehaviorFrequency";
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
            this.getAllStudents();
        }
        
    
    };

    //gets all the students from all the classes that belong to user
    getAllStudents = () => {
        API.getStudentsInAllClasses(this.props.user.id)
            .then(res => {
                const studentArr = [];
                console.log(res);
                for(let i = 0; i < res.data.length; i++){
                    studentArr.push(res.data[i].studentArr);
                }
                // res.data.map(student => {
                //     studentArr.push(student);
                // });
                const mergedStudents = [].concat.apply([], studentArr);
                console.log(mergedStudents);
                return mergedStudents;
            })
            .then(data => this.setState({students: data}))
            .catch(err => console.log(err))
    };

    render(){
        return (
            <div>
                <CardComponent headerText = "Students">
                    <div>
                        {this.state.students.map(student => (
                        <StudentContainer 
                            key={student._id}
                            id={student._id}
                            firstname={student.firstname}
                            lastname={student.lastname}
                        /> 
                        ))}
                    </div>
                </CardComponent>

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