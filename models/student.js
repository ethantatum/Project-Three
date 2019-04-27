const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    behaviors: [{
        behavior: { type: String, required: true },
        frequency: { type: Number, default: 0 },
        type: { type: String }
    }],
    commentArr: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }] 
}, {strict: false});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
