const express = require("express");
const router = express.Router();
const { handleGetWork, handlePostWork } = require("../controllers/work");

router.get("/", handleGetWork);
router.get("/:id", handlePostWork);

module.exports = router;
