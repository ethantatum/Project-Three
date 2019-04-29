import React from "react";
import './CounterButtons.css'

const behaviors = [
    {
        id: 1,
        behavior: "Hitting",
        type: "negative"
    },
    {
        id: 2,
        behavior: "Kicking",
        type: "negative"
    },
    {
        id: 3,
        behavior: "Scratching",
        type: "negative"
    },
    {
        id: 4,
        behavior: "Biting",
        type: "negative"
    },
    {
        id: 5,
        behavior: "Spitting",
        type: "negative"
    },
    {
        id: 6,
        behavior: "Elopement",
        type: "negative"
    },
    {
        id: 7,
        behavior: "Yelling",
        type: "negative"
    },
    {
        id: 8,
        behavior: "Self Injury",
        type: "negative"
    },
    {
        id: 9,
        behavior: "Property Destruction",
        type: "negative"
    },
    {
        id: 10,
        behavior: "Verbal Aggression",
        type: "negative"
    },
    {
        id: 11,
        behavior: "Making a Request",
        type: "positive"
    },
    {
        id: 12,
        behavior: "Responding to Demand",
        type: "positive"
    },
    {
        id: 13,
        behavior: "Answering a Question",
        type: "positive"
    },
    {
        id: 14,
        behavior: "Talking to Peer",
        type: "positive"
    }
]

function CounterButtons(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row behaviorTypeHeader">
                    <h3>Negative Behaviors</h3>
                    </div>
                    {behaviors.filter(behavior => props.type === "negative").map(button => (
                        <div key={button.id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger" onClick={props.handleDecrement}>-</button>
                            <span id="btnSpan" className="bg-danger">{props.behavior}<br />{props.frequency}</span>
                            <button type="button" className="btn btn-danger" onClick={props.handleIncrement}>+</button>
                        </div>
                    ))}
                </div>

                <div className="col-md-6">
                    <div className="row behaviorTypeHeader">
                    <h3>Positive Behaviors</h3>
                    </div>

                    {behaviors.filter(behavior => props.type === "positive").map(button => (
                        <div key={button.id} className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-success" onClick={props.handleDecrement}>-</button>
                            <span id="btnSpan" className="bg-success">{props.behavior}<br />{props.frequency}</span>
                            <button type="button" className="btn btn-success" onClick={props.handleIncrement}>+</button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div >
    );
}

export default CounterButtons;
