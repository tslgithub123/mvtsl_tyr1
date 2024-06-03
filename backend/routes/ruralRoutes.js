const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRuralData,
} = require("../controllers/ruralController");

const router = express.Router();

router.post("/create", authMiddleware, createRuralData);


module.exports = router;



