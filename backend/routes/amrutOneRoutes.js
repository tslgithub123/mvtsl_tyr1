const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAmrutDataByULBCo,
} = require("../controllers/amrutOneController");

const router = express.Router();


router.get("/:ulbCode", authMiddleware, getAmrutDataByULBCo);


module.exports = router;
