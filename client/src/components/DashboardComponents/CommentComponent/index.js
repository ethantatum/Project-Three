import React, { Component } from 'react';
import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import CommentDisplay from "./CommentDisplay";
import CardComponent from "../CardComponent";
import "./style.css";


class CommentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentTitle: "",
            commentBody: "",
            positiveComment: false,
            negativeComment: false,
            studentID: props.match.params.studentID,
            studentName: "",
            commentArray: []
        };
    }

    componentDidMount = () => {
        this.loadComments();
    }

    loadComments = () => {
        API.getComments(this.state.studentID)
            .then(res => { this.setState({ commentArray: res.data.commentArr, studentName: `${res.data.firstname} ${res.data.lastname}` }); console.log(res) })
            .catch(err => console.log(err));
    }

    // Helper function checks if there is any content in title/body input fields
    validateForm = () => this.state.commentTitle.length > 0 && this.state.commentBody.length > 0;

    // Adds boolean to positive/negative comment in state, changes emoji
    handlePositive = () => this.state.positiveComment ? this.setState({ positiveComment: false }) : this.setState({ positiveComment: true, negativeComment: false });

    handleNegative = () => this.state.negativeComment ? this.setState({ negativeComment: false }) : this.setState({ negativeComment: true, positiveComment: false });

    // Helper function that updates state to be the user inputs
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
        let newComment = {
            commentTitle: this.state.commentTitle,
            commentBody: this.state.commentBody,
            positiveComment: this.state.positiveComment,
            negativeComment: this.state.negativeComment,
            commentFrom: this.props.user.id,
            time: new Date()
        };
        API.addComment((this.state.studentID), newComment)
            .then(res => {
                console.log(res);
                this.resetInput()
                this.loadComments();
            })
            .catch(err => console.log(err));
    }

    resetInput = () => this.setState({ commentTitle: "", commentBody: "", positiveComment: false, negativeComment: false });

    render() {
        const positiveComment = this.state.positiveComment;
        const negativeComment = this.state.negativeComment;

        let imagePos;
        let imageNeg;

        if (positiveComment) {
            imagePos = require('./images/positivenew-color2.png');
        } else {
            imagePos = require('./images/positivenew-grey2.png');
        }

        if (negativeComment) {
            imageNeg = require('./images/negativenew-color2.png');
        } else {
            imageNeg = require('./images/negativenew-grey2.png');
        }

        return (
            <CardComponent headerText={`Comments - ${this.state.studentName}`}>
                <div>
                    <h4 className="font-weight-bold font-weight-italic">Enter a Comment</h4>
                    <form className="container-fluid ui inverted segment" id="commentBox" onSubmit={this.handleSubmit}>
                        <div className="ui huge fluid inverted input">
                            <input 
                                type="text"
                                placeholder="Title"
                                value={this.state.commentTitle}
                                onChange={this.handleChange}
                                name="commentTitle"
                            ></input>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui huge fluid inverted input">
                            <textarea
                                className="container-fluid"
                                type="text"
                                placeholder="Comment"
                                value={this.state.commentBody}
                                onChange={this.handleChange}
                                name="commentBody"
                            ></textarea>

                        </div>
                        <div className="ui inverted divider"></div>
                        <h5 className=" ml-2 text-white">Message Type</h5>
                        <div className="row">
                            <label className="col-xs-12 col-md-6">
                                <input type="radio" name="positiveComment" value={positiveComment} onClick={this.handlePositive} />
                                <img src={imagePos} alt="smiling emoji" title="Victory!" />
                            </label>
                            <label className="col-xs-12 col-md-6">
                                <input type="radio" name="negativeComment" value={negativeComment} onClick={this.handleNegative} />
                                <img src={imageNeg} alt="sad emoji" title="Challenge..." />
                            </label>
                        </div>
                            <div className="ui inverted divider"></div>
                            <button className="ui inverted green button" type="submit" disabled={!this.validateForm()} onClick={this.handleSubmit}>Post</button>
                </form>
            </div>
            <div className="mt-3">
                <h4 className="font-weight-bold font-weight-italic">Previous Comments</h4>
                <CommentDisplay commentArray={this.state.commentArray} />
            </div>
            </CardComponent>
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