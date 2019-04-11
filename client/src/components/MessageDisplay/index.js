import React from "react";

function MessageDisplay (props) {
    let container;

    if(props.positive) {
        container = <div className="ui positive message p-2">
                        <i className="close icon"></i>
                        <div className="header">
                            {props.title}
                        </div>
                        <p>{props.message}</p>
                    </div>;
    } else if(props.negative) {
        container = <div className="ui negative message p-2">
                        <i className="close icon"></i>
                        <div className="header">
                            {props.title}
                        </div>
                        <p>{props.message}</p>
                    </div>;
    } else {
        container = <div className="ui violet message p-2">
                        <i className="close icon"></i>
                        <div className="header">
                            {props.title}
                        </div>
                        <p>{props.message}</p>
                    </div>;
    }

    return (
        <div className="container-fluid bg-dark m-3">
            {container}
        </div>
    )
}

export default MessageDisplay;