const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    isTeacher: { type: Boolean }
});

const User = mongoose.model("User", userSchema);

module.exports = User;