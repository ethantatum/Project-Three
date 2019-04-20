import React from 'react';
import MessageInput from "./MessageInput";
import MessageDisplay from "./MessageDisplay";



function MessageComponent(props) {
    return (
    <div>
        <MessageInput />
        <MessageDisplay />
    </div>
    );
}

export default MessageComponent;