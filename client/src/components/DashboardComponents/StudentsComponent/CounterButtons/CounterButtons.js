import React from "react";

const behaviors = [
    {
        id: 1,
        behavior: "Hitting",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 2,
        behavior: "Kicking",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 3,
        behavior: "Scratching",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 4,
        behavior: "Biting",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 5,
        behavior: "Spitting",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 6,
        behavior: "Elopement",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 7,
        behavior: "Yelling",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 8,
        behavior: "Self Injury",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 9,
        behavior: "Property Destruction",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 10,
        behavior: "Verbal Aggression",
        btnClass: "btn btn-danger",
        colorClass: "bg-danger",
        type: "negative"
    },
    {
        id: 11,
        behavior: "Making a Request",
        btnClass: "btn btn-success",
        colorClass: "bg-success",
        type: "positive"
    },
    {
        id: 12,
        behavior: "Responding to Demand",
        btnClass: "btn btn-success",
        colorClass: "bg-success",
        type: "positive"
    },
    {
        id: 13,
        behavior: "Answering a Question",
        btnClass: "btn btn-success",
        colorClass: "bg-success",
        type: "positive"
    },
    {
        id: 14,
        behavior: "Talking to Peer",
        btnClass: "btn btn-success",
        colorClass: "bg-success",
        type: "positive"
    }
]

function CounterButtons(props) {
    return (
        <div>
            <h3>Negative Behaviors</h3>
            <div className="row">
                <div className="col-md-8">
                    {behaviors.filter(behavior => behavior.type === "negative").map(button => (
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className={button.btnClass} onClick={props.handleDecrement}>-</button>
                        <span id="btnSpan" className={button.colorClass}>{button.behavior}<br />{props.count}</span>
                        <button type="button" className={button.btnClass} onClick={props.handleIncrement}>+</button>
                        </div>
                    ))
                    }
                </div>
            </div>

            <h3>Positive Behaviors</h3>
            <div className="row">
                <div className="col-md-8">
                    {behaviors.filter(behavior => behavior.type === "positive").map(button => (
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className={button.btnClass} onClick={props.handleDecrement}>-</button>
                        <span id="btnSpan" className={button.colorClass}>{button.behavior}<br />{props.count}</span>
                        <button type="button" className={button.btnClass} onClick={props.handleIncrement}>+</button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CounterButtons;
