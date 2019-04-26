import React from "react";
import "./style.css";

const MessageInput = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.handlePositive = this.handlePositive.bind(this);
    //     this.handleNegative = this.handleNegative.bind(this);
    //     this.state = {
    //         messageTitle: "",
    //         messageBody: "",
    //         positiveMessage: false,
    //         negativeMessage: false
    //     };
    // }

    // // Helper function checks if there is any content in title/body input fields
    // validateForm() {
    //     return this.state.messageTitle.length > 0 && this.state.messageBody.length > 0;
    // }

    // // Helper function that updates state to be the user inputs
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    // handlePositive() {
    //     return (this.state.positiveMessage ? this.setState({positiveMessage: false}) : this.setState({positiveMessage: true, negativeMessage: false}));
    // }

    // handleNegative() {
    //     return (this.state.negativeMessage ? this.setState({negativeMessage: false}) : this.setState({negativeMessage: true, positiveMessage: false}));
    // }

    // // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    // handleSubmit = (event) => {
    //     event.preventDefault();
    // }
    // render() {
        const positiveMessage = props.positiveMessage;
        const negativeMessage = props.negativeMessage;

        let imagePos;
        let imageNeg;

        if(positiveMessage) {
            imagePos = require('./images/positive-color2.png');
        } else {
            imagePos = require('./images/positive-grey2.png');
        }

        if(negativeMessage) {
            imageNeg = require('./images/negative-color2.png');
        } else {
            imageNeg = require('./images/negative-grey2.png');
        }

        return (
            <div className="container-fluid p-2">
                <form className="ui inverted segment" onSubmit={props.handleSubmit}>
                    <div className="ui huge fluid inverted input">
                        <input autoFocus
                            type="text"
                            placeholder="Message Title"
                            value={props.messageTitle}
                            onChange={props.handleChange}
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
                                value={props.messageBody}
                                onChange={props.handleChange}
                                name="messageBody"
                            ></textarea>
                        </div>
                    </div>
                    <div className="ui inverted divider"></div>
                        <label>
                            <input type="radio" name="positivemessage" value={positiveMessage} onClick={props.handlePositive} />
                            <img src={imagePos} alt="smiling emoji" title="Victory!" />
                        </label>
                        <label>
                            <input type="radio" name="negativemessage" value={negativeMessage}  onClick={props.handleNegative} />
                            <img src={imageNeg} alt="sad emoji" title="Challenge..." />
                        </label>
                    <div className="ui inverted divider"></div>
                    <button className="ui inverted green button" type="submit" disabled={!props.validateForm()}>Send</button>
                </form>
            </div>
        )
    // }

}

export default MessageInput;