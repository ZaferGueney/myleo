const PostSchema = require("../models/postsModel");

const { default: mongoose } = require("mongoose");

const addDb = async (req, res) => {
  const { email, dailies, weeklies } = req.body;

  PostSchema.create(
    {
      email: email,
      dailies: dailies,
      weeklies: weeklies,
    },
    async (err, createdPost) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error entering data into the db!");
      } else {
        console.log(createdPost);
        res.status(200).send("Successfully entering into the db!");
      }
    }
  );
};

const addDailies = async (req, res) => {
  const data = req.body;
  let path = "dailies." + data.daily + "." + data.day;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $inc: { [path]: data.points } },
    (err, user) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const getDailies = async (req, res) => {
  const data = req.body;

  PostSchema.findOne({ email: data.email }, (err, user) => {
    // console.log(user);

    if (user) {
      console.log("USER FOUND!");

      res.status(200).json({
        user,
      });
    } else {
      console.log("USER NOT FOUND");
      res.status(400).json({
        // user,
        // isUsernameMatch: false,
        // isVerified: true,
      });
    }
  });
};

const resetDailies = async (req, res) => {
  const data = req.body;
  let path = "dailies." + data.daily + "." + data.day;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: 0 } },
    (err, user) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const addGratitudeLog = async (req, res) => {
  const data = req.body;
  console.log(data);
  let path = "dailies." + data.daily + "." + data.day;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: data.log } },
    (err, user) => {
      if (err) {
        console.log(err);
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

module.exports = {
  addDb,
  addDailies,
  getDailies,
  resetDailies,
  addGratitudeLog,
};
