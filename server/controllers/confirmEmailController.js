// const SignUpSchema = require("../models/signUpModel");
// const bcrypt = require("bcrypt");
// const { default: mongoose } = require("mongoose");

const confirmEmail = async (req, res) => {
  const { firstname, lastname, email, password, date } = req.body;
};

module.exports = {
  confirmEmail,
};
