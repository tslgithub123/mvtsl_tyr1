
const User = require('../models/userModels');
const City = require('../models/cities');

// Controller function to fetch cities assigned to a user
const getCitiesByUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find the user by userId
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Extract city IDs from the user's cities array
        const cityIds = user.cities.map(city => city.$oid);

        // Find cities using the extracted city IDs
        const cities = await City.find({ _id: { $in: cityIds } });

        res.status(200).json({ success: true, cities });
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


// Controller function to fetch all cities


module.exports = { getCitiesByUser };
