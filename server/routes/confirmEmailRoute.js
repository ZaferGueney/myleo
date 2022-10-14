const express = require("express");
const Token = require("../models/tokenModel");
const User = require("../models/signUpModel");
// const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
// const { confirmEmail } = require("../controllers/confirmEmailController");

const router = express.Router();

router.get("/:id/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid Link" });

    console.log("ID : - " + req.params.id);
    console.log("TOKEN : - " + req.params.token);

    const token = await Token.findOne({ _id: req.params.id });
    if (!token) return res.status(400).send({ message: "Invalid Link" });

    console.log(token);

    await user.updateOne({ _id: user._id, verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
