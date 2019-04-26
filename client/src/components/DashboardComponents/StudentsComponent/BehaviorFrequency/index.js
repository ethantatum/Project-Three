import React from "react";
import "./style.css";
import CounterButtons from "../CounterButtons/CounterButtons.js";
import AddBehavior from "../AddBehavior";

class BehaviorFrequency extends React.Component {

    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <div className="container-fluid p-2">
                    <h1>Behavior Frequency Counters</h1>

                    <AddBehavior />

                    <hr></hr>

                    <CounterButtons
                        count={this.state.count}
                        handleIncrement={this.handleIncrement}
                        handleDecrement={this.handleDecrement} />
                </div>
            </div >
        );
    }
}

export default BehaviorFrequency;