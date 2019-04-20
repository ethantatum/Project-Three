const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    commentText: String,
    urgency: String,
    time: Date
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

