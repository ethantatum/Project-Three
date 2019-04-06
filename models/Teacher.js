const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    name: { type: String, required: true },
    classroom: { type: String, required: true},
    school: { type: String }
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;