const express = require("express");
const router = express.Router();
const { handleGetHire, handlePostHire, handleGetView } = require("../controllers/hire");
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", handleGetHire);
router.post("/", handlePostHire);
router.get("/view/:id", handleGetView);



module.exports = router;