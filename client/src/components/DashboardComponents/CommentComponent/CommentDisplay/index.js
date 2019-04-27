import React from "react";


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
                return (
                    <div className={commentStyle}>
                        <i className="close icon"></i>
                        <div className="header">
                            <strong>{comment.commentTitle}</strong>
                        </div>
                        <p>{comment.commentBody}</p>
                    </div>)
            })}
        </div>
    )
}

export default CommentDisplay;