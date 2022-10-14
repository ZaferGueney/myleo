const mongoose = require("mongoose");

const SignUpSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
      unique: false,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

module.exports = mongoose.model("Benutzer", SignUpSchema);
