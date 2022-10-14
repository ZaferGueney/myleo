const User = require("../models/signUpModel");
const bcrypt = require("bcryptjs");
const { findOne } = require("../models/signUpModel");

// @desc    Login user
// @route   POST /login/signin
// @access  Public
const signIn = (req, res) => {
  const data = req.body;
  User.findOne({ _id: data.email }, (err, user) => {
    // if (user.verified) {
    if (user) {
      bcrypt.compare(data.password, user.password).then((isMatch) => {
        if (isMatch && user.verified) {
          res.status(200).json({
            _id: user._id,
            email: user.email,
            password: user.password,
          });
        } else if (isMatch && !user.verified) {
          res.status(400).json({
            //match, but incorrect password
            isUsernameMatch: true,
            isPasswordMatch: true,
            isVerified: false,
          });
        } else {
          res.status(400).json({
            //match, but incorrect password
            isUsernameMatch: true,
            isPasswordMatch: false,
            isVerified: true,
          });
        }
      });
    } else {
      //username not found

      res.status(400).json({
        isUsernameMatch: false,
        isVerified: true,
      });
    }
    // } else {
    //   res.status(400).json({
    //     isVerified: false,
    //     isUsernameMatch: true,
    //   });
    // }
  });
};

module.exports = {
  signIn,
};
