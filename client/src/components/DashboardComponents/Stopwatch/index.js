import React from "react";
import "./style.css";

class Stopwatch extends React.Component {

    render() {
        return (
            <React.Fragment>
                    <div id="display">00:00</div>
                        <div id="buttons">
                        <button id="start">Start</button>
                        <button id="stop">Stop</button>
                        <button id="reset">Reset</button>
                    </div>
            </React.Fragment>
        );
    }
}

export default Stopwatch;