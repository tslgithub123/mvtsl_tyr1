const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getCitiesByCategory } = require('../controllers/citiesPopController');

router.get('/category/:category', authMiddleware, getCitiesByCategory);

module.exports = router;
