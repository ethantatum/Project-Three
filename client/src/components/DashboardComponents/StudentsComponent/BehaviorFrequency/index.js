import React from "react";
import "./style.css";
import CounterButtons from "../CounterButtons/CounterButtons.js";
import AddBehavior from "../AddBehavior";
import CardComponent from "../../CardComponent";
import API from "../../../../utils/API";
// redux imports ===============================
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class BehaviorFrequency extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            behavior: [],
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
    
    
    //Loads the Behaviors that belong to the current student
    loadBehaviors = () => {
    API.getBehavior(this.state.studentID)
        .then(res =>
        {
            console.log(res);
            this.setState({ behavior: res.data.behaviors, studentName: `${res.data.firstname} ${res.data.lastname}`});
        })
        .catch(err => console.log(err));
    };

    handleIncrement = (behaviorID) => {
        const newbehaviorArr = this.state.behavior.map(behavior => {
            let freq = (behavior._id === behaviorID) ? behavior.frequency + 1 : behavior.frequency;
            return {...behavior, frequency: freq};
        });
        this.setState({behavior: newbehaviorArr});
        console.log(newbehaviorArr);
        
    };

    handleDecrement = (behaviorID) => {
        const newbehaviorArr = this.state.behavior.map(behavior => {
            let freq = (behavior._id === behaviorID) ? behavior.frequency - 1 : behavior.frequency;
            return {...behavior, frequency: freq};
        });
        this.setState({behavior: newbehaviorArr});
        console.log(newbehaviorArr);
    };

    startObservation = () => {
        const newbehaviorArr = this.state.behavior.map(behavior => {
            return {...behavior, frequency: 0};
        });
        this.setState({behavior: newbehaviorArr});
        console.log(newbehaviorArr);
    }

    endObservation = () => {

    }
    render() {
        return (
            <CardComponent headerText = {`Behaviors - ${this.state.studentName}`}>
                <div className="container-fluid p-2">
                    <h1>Behavior Frequency Counters</h1>

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
                    behaviors={this.state.behavior}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    />


                </div>
            </CardComponent>
        );
    }
}

export default BehaviorFrequency;