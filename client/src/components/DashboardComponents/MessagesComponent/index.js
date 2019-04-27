import React, { Component } from 'react';
// import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import { connect } from "react-redux";
// import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";
import "./MessageInput/style.css";


class MessageComponent extends Component {
    state = {
        messageTitle: "",
        messageBody: "",
        positiveMessage: false,
        negativeMessage: false,
        // DON'T THINK WE'LL NEED 'messageTo' IN STATE, AS IT SHOULD ALWAYS BE THE STUDENT ID OF THE CARD WE'RE IN
        messageTo: "",
        messageArray: []
    }

    // componentDidMount() {
    //     this.loadMessages();
    // }

    // loadMessages = () => {
    //     API.getMessages()
    //     .then(res => this.setState({ messageArray: res.data}))
    //     .catch(err => console.log(err));
    // }

    // Helper function checks if there is any content in title/body input fields
    validateForm = () => this.state.messageTitle.length > 0 && this.state.messageBody.length > 0;

    // Adds boolean to positive/negative message in state, changes emoji
    handlePositive = () => this.state.positiveMessage ? this.setState({positiveMessage: false}) : this.setState({positiveMessage: true, negativeMessage: false});
    
    handleNegative = () => this.state.negativeMessage ? this.setState({negativeMessage: false}) : this.setState({negativeMessage: true, positiveMessage: false});

    // Helper function that updates state to be the user inputs
    handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
        // let newMessage = {
        //     messageTitle: this.state.messageTitle,
        //     messageBody: this.state.messageBody,
        //     positiveMessage: this.state.positiveMessage,
        //     negativeMessage: this.state.negativeMessage,
        //     messageFrom: this.props.user.id
        // };
        // API.sendMessage((this.state.messageTo), newMessage)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    render() {
        const positiveMessage = this.state.positiveMessage;
        const negativeMessage = this.state.negativeMessage;

        let imagePos;
        let imageNeg;

        if(positiveMessage) {
            imagePos = require('./MessageInput/images/positive-color2.png');
        } else {
            imagePos = require('./MessageInput/images/positive-grey2.png');
        }

        if(negativeMessage) {
            imageNeg = require('./MessageInput/images/negative-color2.png');
        } else {
            imageNeg = require('./MessageInput/images/negative-grey2.png');
        }

        return (
            <React.Fragment>
            <div className="container p-2">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui huge fluid inverted input">
                        <input autoFocus
                            type="text"
                            placeholder="Message Title"
                            value={this.state.messageTitle}
                            onChange={this.handleChange}
                            name="messageTitle"
                        ></input>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui huge fluid inverted input">
                        <div className="field">
                            <textarea 
                                className="fluid"
                                type="text"
                                placeholder="Message Body"
                                value={this.state.messageBody}
                                onChange={this.handleChange}
                                name="messageBody"
                            ></textarea>
                        </div>
                    </div>
                    <div className="ui inverted divider"></div>
                        <label>
                            <input type="radio" name="positivemessage" value={positiveMessage} onClick={this.handlePositive} />
                            <img src={imagePos} alt="smiling emoji" title="Victory!" />
                        </label>
                        <label>
                            <input type="radio" name="negativemessage" value={negativeMessage}  onClick={this.handleNegative} />
                            <img src={imageNeg} alt="sad emoji" title="Challenge..." />
                        </label>
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted green button" type="submit" disabled={!this.validateForm()}>Send</button>
                </form>
            </div>
            <div className="container p-2">
                <MessageDisplay>
                    messageArray={this.state.messageArray}
                </MessageDisplay>
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
export default connect(mapStateToProps)(MessageComponent);