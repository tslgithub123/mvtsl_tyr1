const mongoose = require('mongoose');
const CitySubmission = require('../models/CitySubmission');


exports.submitCity = async (req, res) => {
  try {

      const { userId, ulbCode } = req.body;

      const citySubmission = new CitySubmission({ userId, ulbCode });

      await citySubmission.save();

      res.status(200).json({ success: true, msg: 'City submitted successfully' });
  } catch (error) {
      console.error('Error submitting city:', error);
      res.status(500).json({ success: false, msg: 'Failed to submit city' });
  }
};



exports.getSubmittedCitiesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, msg: 'Invalid userId' });
    }
    const submissions = await CitySubmission.find({ userId }).select('ulbCode');

    if (!submissions || submissions.length === 0) {
      return res.status(404).json({ success: false, msg: 'No submissions found for the user' });
    }
    const submittedCities = submissions.map(submission => submission.ulbCode);
    res.status(200).json({ success: true, cities: submittedCities });
  } catch (error) {
    console.error('Error fetching submitted cities:', error);
    res.status(500).json({ success: false, msg: 'Failed to fetch submitted cities' });
  }
};

