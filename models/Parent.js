const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parentSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, default: "/assets/images/no-image.png"},
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true }
    },
    child: { type: String, required: true},
    address: { type: String },
    phone: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
        }
    }
});

const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;