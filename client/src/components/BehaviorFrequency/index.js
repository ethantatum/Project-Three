import React from "react";
import "./style.css";
import CounterButtons from "../CounterButtons/CounterButtons.js";

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
                        <h3>Observation Length (minutes): </h3>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                        </select>

                        <button type="button" className="btn btn-outline-light" id="beginBtn">Begin Observation</button>
                    </form>

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