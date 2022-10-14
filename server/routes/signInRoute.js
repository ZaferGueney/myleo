const express = require("express");

const router = express.Router();
const { signIn } = require("../controllers/signInController");

router.post("/signin", signIn);

module.exports = router;
