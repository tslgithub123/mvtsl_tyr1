const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getUrbanDataByULBCoView,
} = require("../controllers/urbanViewControllers");

const router = express.Router();

router.get("/:ulbCode", authMiddleware, getUrbanDataByULBCoView);


module.exports = router;
