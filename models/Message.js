const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    messageTitle: { type: String, required: true },
    messageBody: { type: String, required: true },
    messageTo: { type: String, required: true },
    messageFrom: { type: String, required: true },
    positiveMessage: {type: Boolean, default: false},
    negativeMessage: {type: Boolean, default: false},
    time: {type: Date}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;