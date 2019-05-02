import React from "react";
import moment from "moment";


function CommentDisplay(props) {

    return (
        <div>
            {props.commentArray.map(comment => {
                let commentStyle;
                let commentIcon;
                if (comment.positiveComment) {
                    commentStyle = "ui large green message p-2";
                    commentIcon = "smile outline icon";
                } else if (comment.negativeComment) {
                    commentStyle = "ui large red message p-2";
                    commentIcon = "frown outline icon";
                } else {
                    commentStyle = "ui large violet message p-2";
                    commentIcon = "meh outline icon";
                }
                let time = moment(comment.time).fromNow();
                return (
                    <div className={commentStyle}>
                        <i className={commentIcon}></i>
                        <div className="header">
                            <strong>{comment.commentTitle}</strong>
                            <h6>{time}</h6>
                        </div>
                        <p><strong>{comment.commentBody}</strong></p>
                    </div>)
            })}
        </div>
    )
}

export default CommentDisplay;