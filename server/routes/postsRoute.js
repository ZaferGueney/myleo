const express = require("express");

const { addDb } = require("../controllers/postsController");

const router = express.Router();

router.post("/add", addDb);

module.exports = router;
