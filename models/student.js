const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    class: { type: String, required: true },
    parents: [{
        parent1: {
            type: String
        },
        parent2: {
            type: String
        }
    }],
    behaviors: [{
        behavior: { type: String, required: true },
        frequency: { type: Number, default: 0 },
        btnClass: { type: String },
        colorClass: {type: String },
        type: { type: String }
    }],
    commentArr: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }] 

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;