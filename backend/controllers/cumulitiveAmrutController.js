const City = require('../models/cities');
const Amrut = require('../models/amrutModels');

const getCitiesWithSpecificFields = async (req, res) => {
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
                const urbanData = await Amrut.findOne({ ulb_code: cities[i].ulb_code }).select('second_form_question_1 second_form_question_9 second_form_question_17 second_form_question_22 second_form_question_27 second_form_question_32 second_form_question_39 second_form_question_46 second_form_question_52 second_form_question_58 second_form_question_66  second_form_question_71  second_form_question_76  second_form_question_81     second_form_question_85  second_form_question_90  second_form_question_101  second_form_question_107  second_form_question_113  second_form_question_119 second_form_question_124 second_form_question_132  second_form_question_137 second_form_question_142 second_form_question_147 second_form_question_152  second_form_question_156  second_form_question_160  second_form_question_165 second_form_question_172  second_form_question_177 second_form_question_182 second_form_question_186 second_form_question_191 second_form_question_198 second_form_question_204  second_form_question_210 second_form_question_214 second_form_question_221 second_form_question_225  second_form_question_230 second_form_question_235  second_form_question_240  second_form_question_248  second_form_question_255 second_form_question_262 second_form_question_266 second_form_question_270  second_form_question_278 second_form_question_284 second_form_question_289  second_form_question_294 second_form_question_300 second_form_question_305 second_form_question_320  second_form_question_326 second_form_question_332 second_form_question_336 second_form_question_342 second_form_question_347 second_form_question_355 second_form_question_361 second_form_question_367 second_form_question_373  second_form_question_378 second_form_question_383 second_form_question_387  second_form_question_391 second_form_question_395 second_form_question_400 second_form_question_405 second_form_question_410 second_form_question_415 second_form_question_420 second_form_question_425 second_form_question_430 second_form_question_438 second_form_question_446 second_form_question_451  second_form_question_456 second_form_question_461 second_form_question_466  second_form_question_471 second_form_question_476 second_form_question_481  second_form_question_486 second_form_question_492 second_form_question_498 second_form_question_504 second_form_question_508 second_form_question_515 second_form_question_523  second_form_question_527 second_form_question_531  second_form_question_536 second_form_question_542 second_form_question_548 second_form_question_554 second_form_question_560 second_form_question_564 second_form_question_571 second_form_question_575 second_form_question_580 second_form_question_585 second_form_question_594  second_form_question_598 second_form_question_602 second_form_question_606 second_form_question_610 second_form_question_616  second_form_question_620 second_form_question_626  second_form_question_632 second_form_question_636 second_form_question_642 second_form_question_648 second_form_question_654 second_form_question_659 second_form_question_666  second_form_question_673 second_form_question_683 second_form_question_693 second_form_question_698 second_form_question_703 second_form_question_708 second_form_question_716 second_form_question_722 second_form_question_728 second_form_question_734 second_form_question_742 second_form_question_750 second_form_question_755 second_form_question_760 second_form_question_764 second_form_question_768  second_form_question_772 second_form_question_778  second_form_question_784    	second_form_question_791 second_form_question_797 second_form_question_803 second_form_question_809 second_form_question_815 second_form_question_821 second_form_question_828 second_form_question_835 second_form_question_841 second_form_question_846 second_form_question_852 second_form_question_859 second_form_question_867 second_form_question_874 second_form_question_881  second_form_question_888 second_form_question_893  second_form_question_900           -_id').lean();
                if (urbanData) {
                    filteredCities.push({ ...cities[i], ...urbanData });
                    processedULBCodes.add(cities[i].ulb_code); // Add ULB code to set
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