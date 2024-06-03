const express = require('express');
const router = express.Router();
const User = require('../models/userModels');
const City = require('../models/cities');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        console.log('User ID:', userId);

        const user = await User.findById(userId);

        console.log('User:', user);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const cityIds = user.cities;

        console.log('City IDs:', cityIds);

        const cities = await City.find({ _id: { $in: cityIds } });

        console.log('Cities:', cities);

        res.status(200).json({ success: true, cities });
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});



module.exports = router;
