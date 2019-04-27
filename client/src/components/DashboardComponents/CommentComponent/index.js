import React, { Component } from 'react';
// import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import CommentDisplay from "./CommentDisplay";
import "./style.css";


class CommentComponent extends Component {
    state = {
        commentTitle: "",
        commentBody: "",
        positiveComment: false,
        negativeComment: false,
        commentArray: []
    }

    // componentDidMount() {
    //     this.loadComments();
    // }

    // loadComments = () => {
    //     API.getComments()
    //     .then(res => this.setState({ commentArray: res.data}))
    //     .catch(err => console.log(err));
    // }

    // Helper function checks if there is any content in title/body input fields
    validateForm = () => this.state.commentTitle.length > 0 && this.state.commentBody.length > 0;

    // Adds boolean to positive/negative comment in state, changes emoji
    handlePositive = () => this.state.positiveComment ? this.setState({positiveComment: false}) : this.setState({positiveComment: true, negativeComment: false});
    
    handleNegative = () => this.state.negativeComment ? this.setState({negativeComment: false}) : this.setState({negativeComment: true, positiveComment: false});

    // Helper function that updates state to be the user inputs
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
        // let newComment = {
        //     commentTitle: this.state.commentTitle,
        //     commentBody: this.state.commentBody,
        //     positiveComment: this.state.positiveComment,
        //     negativeComment: this.state.negativeComment,
        //     commentFrom: this.props.user.id
        // };
        // API.sendComment((***STUDENT ID HERE***), newComment)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    render() {
        const positiveComment = this.state.positiveComment;
        const negativeComment = this.state.negativeComment;

        let imagePos;
        let imageNeg;

        if(positiveComment) {
            imagePos = require('./images/positive-color2.png');
        } else {
            imagePos = require('./images/positive-grey2.png');
        }

        if(negativeComment) {
            imageNeg = require('./images/negative-color2.png');
        } else {
            imageNeg = require('./images/negative-grey2.png');
        }

        return (
            <React.Fragment>
            <div className="container p-2">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui huge fluid inverted input">
                        <input autoFocus
                            type="text"
                            placeholder="Comment Title"
                            value={this.state.commentTitle}
                            onChange={this.handleChange}
                            name="commentTitle"
                        ></input>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui huge fluid inverted input">
                        <div className="field">
                            <textarea 
                                className="fluid"
                                type="text"
                                placeholder="Comment Body"
                                value={this.state.commentBody}
                                onChange={this.handleChange}
                                name="commentBody"
                            ></textarea>
                        </div>
                    </div>
                    <div className="ui inverted divider"></div>
                        <label>
                            <input type="radio" name="positiveComment" value={positiveComment} onClick={this.handlePositive} />
                            <img src={imagePos} alt="smiling emoji" title="Victory!" />
                        </label>
                        <label>
                            <input type="radio" name="negativeComment" value={negativeComment}  onClick={this.handleNegative} />
                            <img src={imageNeg} alt="sad emoji" title="Challenge..." />
                        </label>
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted green button" type="submit" disabled={!this.validateForm()}>Send</button>
                </form>
            </div>
            <div className="container p-2">
                <CommentDisplay>
                    commentArray={this.state.commentArray}
                </CommentDisplay>
            </div>
            </React.Fragment>
        )
    }
}

//adds redux state to this component's props
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

//connects this component to redux
export default connect(mapStateToProps)(CommentComponent);