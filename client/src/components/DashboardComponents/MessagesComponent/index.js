import React, { Component } from 'react';
// import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";


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
        return (
            <div>
                <MessageInput>
                    messageTitle={this.state.messageTitle}
                    messageBody={this.state.messageBody}
                    positiveMessage={this.state.positiveMessage}
                    negativeMessage={this.state.negativeMessage}
                    validateForm={this.validateForm}
                    handlePositive={this.handlePositive}
                    handleNegative={this.handleNegative}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                </MessageInput>
                <MessageDisplay />
            </div>
        );
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