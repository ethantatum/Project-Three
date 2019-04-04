const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    teacher: { type: String, required: true },
    parents: [{
        parent1: {
            type: String, required: true
        },
        parent2: {
            type: String
        }
    }],
    behaviors: [{
        type: String
    }],
    commentArr: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }] 

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;