const express = require("express");
const router = express.Router();
const { handlePostHired, handlePostRejeced, handleDelete } = require("../controllers/action");

router.post("/hired", handlePostHired);
router.post("/reject", handlePostRejeced);

router.get("/delete/:id",handleDelete);

module.exports = router;
