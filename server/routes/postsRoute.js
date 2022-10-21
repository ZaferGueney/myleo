const express = require("express");

const {
  addDb,
  addDailies,
  addWeeklies,
  getDailies,
  getWeeklies,
  resetDailies,
  resetWeeklies,
  addGratitudeLog,
  addReflectionLog,
  addNatureMinutes,
  addLeaderBoard,
} = require("../controllers/postsController");

const router = express.Router();

router.post("/add", addDb);
router.post("/add/leaderboard", addLeaderBoard);
router.post("/add/dailies", addDailies);
router.post("/add/weeklies", addWeeklies);
router.post("/get/weeklies", getWeeklies);
router.post("/get/dailies", getDailies);
router.post("/reset/dailies", resetDailies);
router.post("/reset/weeklies", resetWeeklies);
router.post("/add/gratitude-log", addGratitudeLog);
router.post("/add/reflection-log", addReflectionLog);
router.post("/add/nature/minutes", addNatureMinutes);
module.exports = router;
