const express = require('express');
const router = express.Router();
const { getAllSubmittedCities } = require('../controllers/adminControllers');

router.get('/', getAllSubmittedCities);

module.exports = router;
