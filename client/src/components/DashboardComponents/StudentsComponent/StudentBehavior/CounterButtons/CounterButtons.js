import React from "react";
import './CounterButtons.css'


function CounterButtons(props) {
    
    return (
        <React.Fragment>
            <div className="col-xs-12 col-sm-6">
                <h3 className="bg-light text-center rounded p-2 behave-good">Positive Behaviors</h3> 

                {props.behaviors.filter(behavior => behavior.type === "positive").map(button => (
                    <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-good btn-left" onClick={() => props.handleDecrement(button._id)}><span className="btn-operator">-</span></button>
                        <span id="btnSpan" className="btn-good">{button.behavior}<br />{button.frequency}</span>
                        <button type="button" className="btn btn-good btn-right" onClick={() => props.handleIncrement(button._id)}><span className="btn-operator">+</span></button>
                    </div>
                ))
                }
            </div>
            <div className="col-xs-12 col-sm-6"> 
                <h3 className="bg-light text-center rounded p-2 behave-bad">Negative Behaviors</h3>
                
                {props.behaviors.filter(behavior => behavior.type === "negative").map(button => (
                    <div key={button._id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-bad btn-left" onClick={() => props.handleDecrement(button._id)}><span className="btn-operator">-</span></button>
                        <span id="btnSpan" className="btn-bad">{button.behavior}<br />{button.frequency}</span>
                        <button type="button" className="btn btn-bad btn-right" onClick={() => props.handleIncrement(button._id)}><span className="btn-operator">+</span></button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default CounterButtons;
