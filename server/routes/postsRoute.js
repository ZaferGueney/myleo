const express = require("express");

const {
  addDb,
  addDailies,
  getDailies,
  resetDailies,
  addGratitudeLog,
} = require("../controllers/postsController");

const router = express.Router();

router.post("/add", addDb);
router.post("/add/dailies", addDailies);
router.post("/get/dailies", getDailies);
router.post("/reset/dailies", resetDailies);
router.post("/add/gratitude-log", addGratitudeLog);

module.exports = router;
