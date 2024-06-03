const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getRuralDataByULBCo,
} = require("../controllers/ruralOneController");

const router = express.Router();


// Route to get rural form data by ULB code
router.get("/:ulbCode", authMiddleware, getRuralDataByULBCo);


module.exports = router;
