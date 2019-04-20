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

                    <form className="form-inline">
                        <i class="far fa-clock"></i>
                        <h3>Observation Length (minutes): </h3>
                        <select className="form-control">
                            <option key="1">1</option>
                            <option key="2">2</option>
                            <option key="3">3</option>
                            <option key="4">4</option>
                            <option key="5">5</option>
                            <option key="6">6</option>
                            <option key="7">7</option>
                            <option key="8">8</option>
                            <option key="9">9</option>
                            <option key="10">10</option>
                            <option key="11">11</option>
                            <option key="12">12</option>
                            <option key="13">13</option>
                            <option key="14">14</option>
                            <option key="15">15</option>
                            <option key="16">16</option>
                            <option key="17">17</option>
                            <option key="18">18</option>
                            <option key="19">19</option>
                            <option key="20">20</option>
                            <option key="21">21</option>
                            <option key="22">22</option>
                            <option key="23">23</option>
                            <option key="24">24</option>
                            <option key="25">25</option>
                            <option key="26">26</option>
                            <option key="27">27</option>
                            <option key="28">28</option>
                            <option key="29">29</option>
                            <option key="30">30</option>
                        </select>

                        <button type="button" className="btn btn-outline-light" id="beginBtn">Begin Observation</button>
                    </form>

                    <AddBehavior />

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