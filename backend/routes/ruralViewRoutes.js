const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getRuralDataByULBCoView,
} = require("../controllers/ruralViewController");

const router = express.Router();


router.get("/:ulbCode", authMiddleware, getRuralDataByULBCoView);


module.exports = router;
