const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getCitiesWithSpecificFields } = require('../controllers/cumulitiveRuralController');

router.get('/rural/category/:category', authMiddleware, getCitiesWithSpecificFields);

module.exports = router;
