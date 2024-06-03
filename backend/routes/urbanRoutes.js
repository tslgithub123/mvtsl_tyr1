const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { fillUrbanData } = require("../controllers/urbanController");

const router = express.Router();

router.post("/fill", authMiddleware, fillUrbanData);

module.exports = router;