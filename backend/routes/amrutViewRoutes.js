const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAmrutDataByULBCoView,
} = require("../controllers/amrutViewControllers");

const router = express.Router();


router.get("/:ulbCode", authMiddleware, getAmrutDataByULBCoView);


module.exports = router;
