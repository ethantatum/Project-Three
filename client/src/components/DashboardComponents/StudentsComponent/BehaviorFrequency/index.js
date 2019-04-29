import React from "react";
import "./style.css";
import CounterButtons from "../CounterButtons/CounterButtons.js";
import AddBehavior from "../AddBehavior";
import API from "../../../../utils/API";
// redux imports ===============================
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class BehaviorFrequency extends React.Component {

    state = {
        behavior: [],
        frequency: 0,
        type: ""
    };

    componentDidMount = () => {
        this.loadBehaviors();
    };
    
    //Loads the Behaviors that belong to the current student
    loadBehaviors = () => {
    API.getBehavior()
        .then(res =>
        {
            console.log(res);
            this.setState({ behavior: res.data });
        })
        .catch(err => console.log(err));
    };

    handleIncrement = () => {
        this.setState({ frequency: this.state.frequency + 1 });
    };

    handleDecrement = () => {
        this.setState({ frequency: this.state.frequency - 1 });
    };

    render() {
        return (
            <div className="card w-75 cardCont">
                <div className="container-fluid p-2">
                    <h1>Behavior Frequency Counters</h1>

                    <AddBehavior />

                    <hr></hr>

                    <CounterButtons
                        frequency={this.state.frequency}
                        behavior={this.state.behavior}
                        handleIncrement={this.handleIncrement}
                        handleDecrement={this.handleDecrement} />
                </div>
            </div >
        );
    }
}

export default BehaviorFrequency;