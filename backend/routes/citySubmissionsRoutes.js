const express = require('express');
const router = express.Router();
const User = require('../models/userModels');
const City = require('../models/cities');
const CitySubmission = require('../controllers/citySubmissionController');


router.get('/submitted/:userId', CitySubmission.getSubmittedCitiesByUser);

module.exports = router;
