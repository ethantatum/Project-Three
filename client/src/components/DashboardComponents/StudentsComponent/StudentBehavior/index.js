import React from "react";
import "./style.css";
import CounterButtons from "./CounterButtons/CounterButtons.js";
import AddBehavior from "./AddBehavior";
import CardComponent from "../../CardComponent";
import API from "../../../../utils/API";
// redux imports ===============================
// import {bindActionCreators} from "redux";
// import {connect} from "react-redux";

class BehaviorFrequency extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            behaviors: [],
            // startTime: "",
            // isObservingBehavior: false,
            studentID: props.match.params.studentID,
            studentName: "",
            behaviorName: "",
            type: ""
        };
    }

    componentDidMount = () => {
        this.loadBehaviors();
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
        
        if (this.state.behaviorName && this.state.type) {
        API.addBehavior(this.state.studentID, {
            behavior: this.state.behaviorName,
            type: this.state.type
        })
        .then((res) => {
            console.log(res);
            this.loadBehaviors();
        })
        .catch(err => console.log(err));  
        console.log("formsubmit");
        }
    };
    
    //Loads the Behaviors, if parent's state already has an instance of behavior frequencys then grab that if not get behaviors from API and set freq to 0
    loadBehaviors = () => {
        let didFindMatch;
        if(this.props.recordedBehaviors.length === 0){
            didFindMatch = false;
        }
        else{
            for(let i = 0; i < this.props.recordedBehaviors.length; i++){
                if(this.state.studentID === this.props.recordedBehaviors[i].studentID){
                    this.setState({behaviors: this.props.recordedBehaviors[i].behaviors});
                    didFindMatch = true; 
                    break;
                } 
                else{
                    didFindMatch = false;
                }          
            };
        };
        console.log(didFindMatch);  
        if(!didFindMatch){
            API.getBehavior(this.state.studentID)
            .then(res =>
            {
                console.log(res);
                let BehaviorObj = {
                    studentID: res.data._id,
                    studentName: `${res.data.firstname} ${res.data.lastname}`,
                    behaviors: res.data.behaviors.map(behavior => {
                        return {...behavior, frequency: 0};
                    })
                };
                this.props.setInitialBehaviorCounter(BehaviorObj);
                this.setState({ behaviors: BehaviorObj.behaviors, studentName: BehaviorObj.studentName});
            })
            .catch(err => console.log(err));
        }

    };

    //methods for incrementing and decrementing behaviors
    // handleIncrement = (behaviorID) => {
    //     const newbehaviorArr = this.state.behavior.map(behavior => {
    //         let freq = (behavior._id === behaviorID) ? behavior.frequency + 1 : behavior.frequency;
    //         return {...behavior, frequency: freq};
    //     });
    //     this.setState({behavior: newbehaviorArr});
    //     console.log(newbehaviorArr);
        
    // };

    // handleDecrement = (behaviorID) => {
    //     const newbehaviorArr = this.state.behavior.map(behavior => {
    //         let freq = (behavior._id === behaviorID) ? behavior.frequency - 1 : behavior.frequency;
    //         return {...behavior, frequency: freq};
    //     });
    //     this.setState({behavior: newbehaviorArr});
    //     console.log(newbehaviorArr);
    // };

    //begins the observation of behvaiors, sets behaviors to 0 
    // startObservation = () => {
    //     const newbehaviorArr = this.state.behavior.map(behavior => {
    //         return {...behavior, frequency: 0};
    //     });
    //     this.setState({behavior: newbehaviorArr, isObservingBehavior: true});
    //     console.log(moment().format("L"));
    //     //gets the start time and date of when observation started using moment
    // }

    endObservation = () => {
        //changes isObservingBehavior to false
        //gets the end time using moment

    }

    render() {
        return (
            <CardComponent headerText = {`Behaviors - ${this.state.studentName}`}>
                <div className="container-fluid p-2">
                    <h1 className="behavior-header">Behavior Frequency Counters</h1>

                    <button onClick={this.startObservation}>Start Observation</button>
                    <AddBehavior 
                        typeState={this.state.type}
                        behaviorState={this.state.behaviorName}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />

                    <hr></hr>

                    <CounterButtons
                    // key={behavior._id}
                    // id={behavior._id}
                    // frequency={behavior.frequency}
                    // behavior={behavior.behavior}
                    behaviors={this.state.behaviors}
                    // handleIncrement={this.handleIncrement}
                    // handleDecrement={this.handleDecrement}
                    />


                </div>
            </CardComponent>
        );
    }
}

export default BehaviorFrequency;