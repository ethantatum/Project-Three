const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isTeacher: { type: Boolean }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;