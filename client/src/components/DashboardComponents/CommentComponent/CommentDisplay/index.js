import React from "react";
import moment from "moment";


function CommentDisplay(props) {

    return (
        <div className="container p-2">
            {props.commentArray.map(comment => {
                let commentStyle;
                if (comment.positiveComment) {
                    commentStyle = "ui positive message p-2";
                } else if (comment.negativeComment) {
                    commentStyle = "ui negative message p-2";
                } else {
                    commentStyle = "ui violet message p-2";
                }
                let time = moment(comment.time).startOf('day').fromNow();
                return (
                    <div className={commentStyle}>
                        <i className="close icon"></i>
                        <div className="header">
                            <strong>{comment.commentTitle}</strong>
                            <h6>{time}</h6>
                        </div>
                        <p>{comment.commentBody}</p>
                    </div>)
            })}
        </div>
    )
}

export default CommentDisplay;