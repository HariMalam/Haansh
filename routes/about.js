const express = require("express");
const router = express.Router();
const { handleGetAbout } = require("../controllers/about");

router.get("/", handleGetAbout);

module.exports = router;