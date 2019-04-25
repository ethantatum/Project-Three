import React, { Component } from 'react';
// import API from "../../../utils/API";
// import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";
import API from '../../../utils/API';



class MessageComponent extends Component {
    state ={
        messageTitle: "",
        messageBody: "",
        positiveMessage: false,
        negativeMessage: false,
        messageTo: "",
        messageFrom: this.props.user.id,
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

    render() {
        return (
            <div>
                <MessageInput />
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