const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getCitiesWithSpecificFields } = require('../controllers/cumulitiveUrbanController');

router.get('/urban/category/:category', authMiddleware, getCitiesWithSpecificFields);

module.exports = router;
