const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
      unique: false,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    training: {
      type: Array,
      default: [],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

module.exports = mongoose.model("Posts", PostSchema);
