const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getUrbanDataByULBCo,
} = require("../controllers/urbanOneController");

const router = express.Router();

router.get("/:ulbCode", authMiddleware, getUrbanDataByULBCo);


module.exports = router;
