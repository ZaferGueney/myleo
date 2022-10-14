const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
      unique: false,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    token: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

module.exports = mongoose.model("token", tokenSchema);
