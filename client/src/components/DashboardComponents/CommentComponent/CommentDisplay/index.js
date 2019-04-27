import React from "react";
import './style.css';

function CommentDisplay(props) {
    
    // let container;

    // if (props.positive) {
    //     container = <div className="ui positive message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.comment}</p>
    //     </div>;
    // } else if (props.negative) {
    //     container = <div className="ui negative message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.comment}</p>
    //     </div>;
    // } else {
    //     container = <div className="ui violet message p-2">
    //         <i className="close icon"></i>
    //         <div className="header">
    //             {props.title}
    //         </div>
    //         <p>{props.comment}</p>
    //     </div>;
    // }

    return (
        <React.Fragment>
            <div className="container-comments p-2">
                <div className="ui violet message p-2">
                    <i className="close icon"></i>
                    <div className="header">
                        <strong>{props.title}</strong>
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

export default CommentDisplay;