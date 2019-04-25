import React from "react";

function MessageDisplay(props) {
    // let container;

    // if (props.positive) {
    //     container = <div className="ui positive message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.message}</p>
    //     </div>;
    // } else if (props.negative) {
    //     container = <div className="ui negative message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.message}</p>
    //     </div>;
    // } else {
    //     container = <div className="ui violet message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.message}</p>
    //     </div>;
    // }

    return (
        <React.Fragment>
            <div className="container-fluid p-2">
                <div className="ui violet message p-2">
                    <i className="close icon"></i>
                    <div className="header">
                        <strong>This is a test header for a neutral message</strong>
                    </div>
                    <p>Test message goes here with some information</p>
                </div>
                <div className="ui postive green message p-2">
                    <i className="close icon"></i>
                    <div className="header">
                        <strong>This is a test header for a postive message</strong>
                    </div>
                    <p>Test message goes here with some information</p>
                </div>
                <div className="ui negative message p-2">
                    <i className="close icon"></i>
                    <div className="header">
                        This is a test header for a negative message
                    </div>
                    <p>Test message goes here with some information</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MessageDisplay;