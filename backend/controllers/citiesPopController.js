const City = require('../models/cities');

const getCitiesByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        let query;

        switch (category) {
            case '10lakh+':
                query = { category: '10 Lakh+ Population' };
                break;
            case '3-10lakh':
                query = { category: '3-10 Lakh Population' };
                break;
            case '1-3lakh':
                query = { category: '1-3 Lakh Population' };
                break;
            case '50k-1lakh':
                query = { category: '50k-1 Lakh Population' };
                break;
            case '25k-50k':
                query = { category: '25k-50k Population' };
                break;
            case '15k-25k':
                query = { category: '15k-25k Population' };
                break;
            case '<15k':
                query = { category: '<15k Population' };
                break;
                
            case '10k+':
                query = { category: '10k+ Population' };
                break;
            case '5k-10k':
                query = { category: '5k-10k Population' };
                break;
            case '2.5k-5k':
                query = { category: '2.5k-5k Population' };
                break;
            case '1.5k-2.5k':
                query = { category: '1.5k-2.5k Population' };
                break;
            case '<1.5k':
                query = { category: '<1.5k Population' };
                break;
                     
            default:
                return res.status(400).json({ success: false, message: 'Invalid category' });
        }

        const cities = await City.find(query);

        res.status(200).json({ success: true, cities });
    } catch (error) {
        console.error('Error fetching cities by category:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { getCitiesByCategory };
