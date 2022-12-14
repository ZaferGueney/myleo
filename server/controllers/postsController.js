const PostSchema = require("../models/postsModel");

const { default: mongoose } = require("mongoose");

const addLeaderBoard = async (req, res) => {
  const data = req.body;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { leaderboard: data.points } },
    (err, user) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

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
        res.status(400).send("Error entering data into the db!");
      } else {
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
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const addWeeklies = async (req, res) => {
  const data = req.body;
  let path = "weeklies." + data.weeklies + "." + data.week;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $inc: { [path]: data.points } },
    (err, user) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const addNatureMinutes = async (req, res) => {
  const data = req.body;

  let path = "weeklies." + data.weeklies + "." + data.week;
  let value = data.week;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: data.log } },
    (err, user) => {
      if (err) {
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
    if (user) {
      res.status(200).json({
        user,
      });
    } else {
      res.status(400).json({
        // user,
        // isUsernameMatch: false,
        // isVerified: true,
      });
    }
  });
};

const getWeeklies = async (req, res) => {
  const data = req.body;

  PostSchema.findOne({ email: data.email }, (err, user) => {
    if (user) {
      res.status(200).json({
        user,
      });
    } else {
      console.log("ERROR");
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
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const resetWeeklies = async (req, res) => {
  const data = req.body;

  let path = "weeklies." + data.weeklies + "." + data.week;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: 0 } },
    (err, user) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const addGratitudeLog = async (req, res) => {
  const data = req.body;

  let path = "dailies." + data.daily + "." + data.day;

  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: data.log } },
    (err, user) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

const addReflectionLog = async (req, res) => {
  const data = req.body;

  console.log(data);
  let path = "weeklies." + data.weeklie + "." + data.week;

  console.log(path);
  PostSchema.findOneAndUpdate(
    { email: data.email },
    { $set: { [path]: data.log } },
    (err, user) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.status(200).json(user);
      }
    }
  );
};

module.exports = {
  addDb,
  addLeaderBoard,
  addDailies,
  addWeeklies,
  getDailies,
  getWeeklies,
  resetDailies,
  resetWeeklies,
  addGratitudeLog,
  addReflectionLog,
  addNatureMinutes,
};
