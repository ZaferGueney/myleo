const nodemailer = require("nodemailer");

module.exports = async (createdToken, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtps.udag.de",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mail@schweinehundchallenge.de", // generated ethereal user
        pass: "Schweinehund2022SHC!", // generated ethereal password
      },
    });

    await transporter.sendMail({
      from: '"Schweinehund-Challenge" <mail@schweinehundchallenge.de>', // sender address
      to: createdToken.email, // list of receivers

      subject: "White Chocolate - Ticket/s", // Subject line
      text: "", // plain text body
      html: `<div><h1>LINK ${token}</h1><div>`,
    });
    console.log("Email erfolgreich verschickt.");
  } catch (error) {
    console.log("Email nicht erfolgreich verschickt.");
    console.log(error);
  }
};
