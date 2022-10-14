const PostSchema = require("../models/postsModel");

const { default: mongoose } = require("mongoose");

const addDb = async (req, res) => {
  const { title, description, training, date } = req.body;

  PostSchema.create(
    {
      _id: "XYZZZZZ",
      title: title,
      description: description,
      training: training,
      date: date,
    },
    async (err, createdFriend) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error entering data into the db!");
      } else {
        console.log(createdFriend);
        res.status(200).send("Successfully entering into the db!");
      }
    }
  );
};

module.exports = {
  addDb,
};
