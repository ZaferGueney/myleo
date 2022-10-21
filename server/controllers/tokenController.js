const SignUpSchema = require("../models/signUpModel");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const tokenSchema = require("../models/tokenModel");

const sendEmail = require("../utilities/sendEmail");
const crypto = require("crypto");

const signUp = async (req, res) => {
  const { firstname, lastname, email, password, date } = req.body;

  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, saltPassword);

  SignUpSchema.create(
    {
      _id: email,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: securePassword,
      date: date,
    },
    async (err, createdUser) => {
      if (err) {
        res.status(400).send("Error entering data into the db!");
      } else {
        res.status(200).send("Successfully entering into the db!");

        tokenSchema.create(
          {
            userId: createdUser._id,
            token: crypto.randomBytes(32).toString("hex"),
          },
          async (err, createdToken) => {
            if (err) {
              res.status(400).send("Error entering data into the db!");
            } else {
              res.status(200).send("Successfully entering into the db!");
            }
          }
        );

        // await sendEmail(createdUser, url);
        // res
        //   .status(201)
        //   .send({ message: "An Email sent to your account please verify" });
      }
    }
  );
};

module.exports = {
  signUp,
};
