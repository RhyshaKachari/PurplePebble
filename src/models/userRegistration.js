const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email ID");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  address: {
    type: String,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
