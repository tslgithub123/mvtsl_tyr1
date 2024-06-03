const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getCitiesWithSpecificFields } = require('../controllers/cumulitiveAmrutController');

router.get('/amrut/category/:category', authMiddleware, getCitiesWithSpecificFields);

module.exports = router;
