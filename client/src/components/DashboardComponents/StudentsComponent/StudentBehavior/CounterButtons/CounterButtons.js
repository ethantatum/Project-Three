import React from "react";
import './CounterButtons.css'


function CounterButtons(props) {
    
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row behaviorTypeHeader">
                    <h3>Negative Behaviors</h3>
                    </div>
                    {props.behaviors.filter(behavior => behavior.type === "negative").map(button => (
                        <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger" onClick={() => props.handleDecrement(button._id)}>-</button>
                            <span id="btnSpan" className="bg-danger">{button.behavior}<br />{button.frequency}</span>
                            <button type="button" className="btn btn-danger" onClick={() => props.handleIncrement(button._id)}>+</button>
                        </div>
                    ))}
                </div>

                <div className="col-md-6">
                    <div className="row behaviorTypeHeader">
                    <h3>Positive Behaviors</h3>
                    </div>

                    {props.behaviors.filter(behavior => behavior.type === "positive").map(button => (
                        <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-success" onClick={() => props.handleDecrement(button._id)}>-</button>
                            <span id="btnSpan" className="bg-success">{button.behavior}<br />{button.frequency}</span>
                            <button type="button" className="btn btn-success" onClick={() => props.handleIncrement(button._id)}>+</button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div >
    );
}

export default CounterButtons;
