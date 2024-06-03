const City = require('../models/cities');
const Urban = require('../models/urbanModels');

// Controller function to fetch cities by category with specific fields
const getCitiesWithSpecificFields = async (req, res) => {
    try {
        const category = req.params.category;

        let query;

        // Define query based on the category
        switch (category) {
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
            default:
                return res.status(400).json({ success: false, message: 'Invalid category' });
        }

        
        const projection = {
            ulb_name: 1,
            ulb_code: 1,
            _id: 0 
        };

        
        const cities = await City.find(query, projection).lean();

        
        const filteredCities = [];
        const processedULBCodes = new Set(); // Set to keep track of processed ULB codes

        for (let i = 0; i < cities.length; i++) {
            
            if (!processedULBCodes.has(cities[i].ulb_code)) {
                const urbanData = await Urban.findOne({ ulb_code: cities[i].ulb_code }).select('second_form_question_1 second_form_question_9 second_form_question_17 second_form_question_22 second_form_question_27 second_form_question_32 second_form_question_39 second_form_question_46 second_form_question_52 second_form_question_58 second_form_question_66  second_form_question_71  second_form_question_76  second_form_question_81     second_form_question_85  second_form_question_90  second_form_question_101  second_form_question_107  second_form_question_113  second_form_question_119 second_form_question_124 second_form_question_132  second_form_question_137 second_form_question_142 second_form_question_147 second_form_question_152  second_form_question_156  second_form_question_160  second_form_question_165 second_form_question_172  second_form_question_177 second_form_question_182 second_form_question_186 second_form_question_191 second_form_question_198 second_form_question_204  second_form_question_210 second_form_question_214 second_form_question_221 second_form_question_225  second_form_question_230 second_form_question_235  second_form_question_240  second_form_question_248  second_form_question_255 second_form_question_262 second_form_question_266 second_form_question_270  second_form_question_278 second_form_question_284 second_form_question_289  second_form_question_294 second_form_question_300 second_form_question_305 second_form_question_320  second_form_question_326 second_form_question_332 second_form_question_336 second_form_question_342 second_form_question_347 second_form_question_355 second_form_question_361 second_form_question_367 second_form_question_373  second_form_question_378 second_form_question_383 second_form_question_387  second_form_question_391 second_form_question_395 second_form_question_400 second_form_question_405 second_form_question_410 second_form_question_415 second_form_question_420 second_form_question_425 second_form_question_430 second_form_question_438 second_form_question_446 second_form_question_451  second_form_question_456 second_form_question_461 second_form_question_466  second_form_question_471 second_form_question_476 second_form_question_481  second_form_question_486 second_form_question_492 second_form_question_498 second_form_question_504 second_form_question_512 second_form_question_516 second_form_question_520  second_form_question_525 second_form_question_531  second_form_question_537 second_form_question_543 second_form_question_549 second_form_question_553 second_form_question_560 second_form_question_564 second_form_question_569 second_form_question_574 second_form_question_583 second_form_question_587 second_form_question_591  second_form_question_595 second_form_question_599 second_form_question_605 second_form_question_609 second_form_question_615  second_form_question_621 second_form_question_625  second_form_question_631 second_form_question_637 second_form_question_643 second_form_question_648 second_form_question_655 second_form_question_662 second_form_question_672  second_form_question_682 second_form_question_687 second_form_question_692 second_form_question_697 second_form_question_705 second_form_question_711 second_form_question_717 second_form_question_723 second_form_question_731 second_form_question_739 second_form_question_744 second_form_question_749 second_form_question_753 second_form_question_757 second_form_question_761 second_form_question_767  second_form_question_773 second_form_question_780  second_form_question_786    	second_form_question_792 second_form_question_798 second_form_question_804 second_form_question_810 second_form_question_817 second_form_question_824 second_form_question_830 second_form_question_835 second_form_question_841 second_form_question_848 second_form_question_856 second_form_question_863 second_form_question_870 second_form_question_877 second_form_question_882  second_form_question_889         -_id').lean();
                if (urbanData) {
                    filteredCities.push({ ...cities[i], ...urbanData });
                    processedULBCodes.add(cities[i].ulb_code); 
                }
            }
        }

        res.status(200).json({ success: true, cities: filteredCities });
    } catch (error) {
        console.error('Error fetching cities by category:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { getCitiesWithSpecificFields };