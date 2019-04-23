const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    studentArr: [{
        type: Schema.Types.ObjectId,
        ref: 'student'
    }] 
}, {strict: false});

const Classes = mongoose.model("classes", classSchema);

module.exports = Classes;