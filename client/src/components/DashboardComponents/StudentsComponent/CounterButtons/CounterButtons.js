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
        behavior: "Elopment",
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
<<<<<<< HEAD:client/src/components/CounterButtons/CounterButtons.js
            <div class="row">
                <div class="col-md-8">
                    {behaviors.filter(behavior => behavior.type === "negative").map((button, index) => (
                        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" class={button.btnClass} onClick={ () => props.handleDecrement(index)}>-</button>
                        <span class={button.colorClass}>{button.behavior}<br />{props.count}</span>
                        <button type="button" class={button.btnClass} onClick={ () => props.handleIncrement(index)}>+</button>
=======
            <div className="row">
                <div className="col-md-8">
                    {behaviors.filter(behavior => behavior.type === "negative").map(button => (
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className={button.btnClass} onClick={props.handleDecrement}>-</button>
                        <span className={button.colorClass}>{button.behavior}<br />{props.count}</span>
                        <button type="button" className={button.btnClass} onClick={props.handleIncrement}>+</button>
>>>>>>> c7ca5406a39d1f9c639d0cfa03a6284ec62488da:client/src/components/DashboardComponents/StudentsComponent/CounterButtons/CounterButtons.js
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
                        <span className={button.colorClass}>{button.behavior}<br />{props.count}</span>
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
