import React, { Component } from "react";
import "./style.css";

class MessageInput extends Component {
    state = {
        messageTitle: "",
        messageBody: "",
        postiveMessage: false,
        negativeMessage: false
    };

    // Helper function checks if there is any content in title/body input fields
    validateForm() {
        return this.state.messageTitle.length > 0 && this.state.messageBody.length > 0;
    }

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handlePostive() {
        return (this.state.postiveMessage ? this.setState({positiveMessage: false}) : this.setState({positiveMessage: true}));
    }

    handleNegative() {
        return (this.state.negativeMessage ? this.setState({negativeMessage: false}) : this.setState({negativeMessage: true}));
    }

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        let imagePos;
        let imageNeg;

        if(this.state.postiveMessage) {
            imagePos = require('./images/positive-color.png');
        } else {
            imagePos = require('./images/positive-grey.png');
        }

        if(this.state.negativeMessage) {
            imageNeg = require('./images/negative-color.png');
        } else {
            imageNeg = require('./images/negative-grey.png');
        }

        return (
            <div className="container-fluid p-2">
                <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                    <div className="ui inverted left icon input">
                        <input autoFocus
                            type="text"
                            placeholder="Message Title"
                            value={this.state.messageTitle}
                            onChange={this.handleChange}
                            name="messageTitle"
                        ></input>
                        <i className="user outline icon"></i>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted left icon input">
                        <input 
                            type="text"
                            placeholder="Message Body"
                            value={this.state.messageBody}
                            onChange={this.handleChange}
                            name="messageBody"
                        ></input>
                        <i className="user outline icon"></i>
                    </div>
                    <div className="ui inverted divider"></div>
                    <label>
                        <input type="radio" name="positiveMessage" value={this.state.positiveMessage} handlePostive={this.handlePostive} />
                        <img src={imagePos} />
                    </label>
                    <label>
                        <input type="radio" name="negativeMessage" value={this.state.negativeMessage}  handleNegative={this.handleNegative} />
                        <img src={imageNeg} />
                    </label>
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Send</button>
                </form>
            </div>
        )
    }

}

export default MessageInput;