const express = require("express");
const router = express.Router();
const { handleGetHire, handlePostHire, handleGetView } = require("../controllers/hire");

router.get("/", handleGetHire);
router.post("/", handlePostHire);
router.get("/view/:id", handleGetView);



module.exports = router;