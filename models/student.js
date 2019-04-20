const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
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

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

// parents: [{
//     parent1: {
//         type: String
//     },
//     parent2: {
//         type: String
//     }
// }]