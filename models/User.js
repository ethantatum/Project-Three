const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isTeacher: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        default: "/assets/images/no-image.png",
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    //Parent keys ===========================================================
    phone: {
        type: String,
        validate: {
            validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
            }
        },
        required: false
    },
    address: {
        type: String,
        required: false
    },
    children: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    //Teacher keys ==========================================================
    school: {
        type: String,
        required: false
    }, 
    classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }]
  }, {strict: false});

const User = mongoose.model("users", UserSchema);

module.exports = User;

// teacherProperties: [new Schema({
//     classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
// }, {strict: false})],
// parentProperties: [new Schema({
//     children: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
//     address: { type: String },
//     phone: {
//         type: String,
//         validate: {
//           validator: function(v) {
//             return /\d{3}-\d{3}-\d{4}/.test(v);
//           }
//         }
//     }
// })]