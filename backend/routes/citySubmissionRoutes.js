const express = require('express');
const router = express.Router();
const User = require('../models/userModels');
const City = require('../models/cities');
const CitySubmission = require('../controllers/citySubmissionController');


router.post('/', CitySubmission.submitCity);

module.exports = router;
