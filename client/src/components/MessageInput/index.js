import React, { Component } from "react";
import "./style.css";

class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.handlePostive = this.handlePostive.bind(this);
        this.handleNegative = this.handleNegative.bind(this);
        this.state = {
            messageTitle: "",
            messageBody: "",
            positiveMessage: false,
            negativeMessage: false
        };
    }

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
        return (this.state.positiveMessage ? this.setState({positiveMessage: false}) : this.setState({positiveMessage: true}));
    }

    handleNegative() {
        return (this.state.negativeMessage ? this.setState({negativeMessage: false}) : this.setState({negativeMessage: true}));
    }

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        const positiveMessage =this.state.postiveMessage;
        const negativeMessage =this.state.negativeMessage;

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
                    <div className="ui inverted input">
                        <input autoFocus
                            type="text"
                            placeholder="Message Title"
                            value={this.state.messageTitle}
                            onChange={this.handleChange}
                            name="messagetitle"
                        ></input>
                    </div>
                    <div className="ui inverted divider"></div>
                    <div className="ui inverted input">
                        <input 
                            type="text"
                            placeholder="Message Body"
                            value={this.state.messageBody}
                            onChange={this.handleChange}
                            name="messagebody"
                        ></input>
                    </div>
                    <div className="ui inverted divider"></div>
                    <label>
                        <input type="radio" name="positivemessage" value={positiveMessage} onChange={this.handlePostive} />
                        <img src={imagePos} />
                    </label>
                    <label>
                        <input type="radio" name="negativemessage" value={negativeMessage}  onChange={this.handleNegative} />
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