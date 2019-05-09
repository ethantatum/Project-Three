import React from "react";
import './CounterButtons.css'


function CounterButtons(props) {
    
    return (
        <React.Fragment>
            <div className="col-xs-12 col-sm-6">
                <h3 className="bg-light text-center rounded p-2 behave-good">Positive Behaviors</h3> 

                {props.behaviors.filter(behavior => behavior.type === "positive").map(button => (
                    <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-good" onClick={() => props.handleDecrement(button._id)}>-</button>
                        <span id="btnSpan" className="btn-good">{button.behavior}<br />{button.frequency}</span>
                        <button type="button" className="btn btn-good" onClick={() => props.handleIncrement(button._id)}>+</button>
                    </div>
                ))
                }
            </div>
            <div className="col-xs-12 col-sm-6"> 
                <h3 className="bg-light text-center rounded p-2 behave-bad">Negative Behaviors</h3>
                
                {props.behaviors.filter(behavior => behavior.type === "negative").map(button => (
                    <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-bad" onClick={() => props.handleDecrement(button._id)}>-</button>
                        <span id="btnSpan" className="btn-bad">{button.behavior}<br />{button.frequency}</span>
                        <button type="button" className="btn btn-bad" onClick={() => props.handleIncrement(button._id)}>+</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default CounterButtons;
