const express = require("express");
const router = express.Router();
const { handlePostHired, handlePostRejeced, handleDelete, handleSearch, handleCancle } = require("../controllers/action");

router.post("/hired", handlePostHired);
router.post("/reject", handlePostRejeced);

router.post("/search",handleSearch);
router.get("/delete/:id",handleDelete);
router.get("/cancle/:id",handleCancle);

module.exports = router;
