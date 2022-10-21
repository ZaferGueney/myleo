const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: false,
    //   unique: false,
    // },
    email: {
      type: String,
    },
    dailies: {
      type: Object,
      default: {},
    },
    weeklies: {
      type: Object,
      default: {},
    },
    leaderboard: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }
  // { _id: false }
);

module.exports = mongoose.model("Posts", PostSchema);
