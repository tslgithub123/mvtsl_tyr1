const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { writeAmrutData } = require("../controllers/amrutController");

const router = express.Router();

router.post("/write", authMiddleware, writeAmrutData);

module.exports = router;