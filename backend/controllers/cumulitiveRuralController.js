const City = require('../models/cities');
const Rural = require('../models/ruralModels');

const getCitiesWithSpecificFields = async (req, res) => {
    try {
        const category = req.params.category;

        let query;

        switch (category) {
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

        const projection = {
            ulb_name: 1,
            ulb_code: 1,
            _id: 0 
        };

        const cities = await City.find(query, projection).lean();

        const filteredCities = [];
        const processedULBCodes = new Set(); 
        for (let i = 0; i < cities.length; i++) {
            
            if (!processedULBCodes.has(cities[i].ulb_code)) {
                const urbanData = await Rural.findOne({ ulb_code: cities[i].ulb_code }).select('question_1 question_10 question_19 question_24 question_29 question_34 question_41 question_45 question_50 question_55 question_60 question_71 question_77 question_83 question_89 question_94 question_101 question_106 question_111 question_115 question_119 question_126 question_132 question_138 question_145 question_150 question_155 question_160 question_165 question_173 question_180 question_187 question_191 question_195 question_203 question_209 question_214 question_219 question_224 question_239 question_243 question_249 question_254 question_258 question_265 question_269 question_274 question_279 question_284 question_289 question_294 question_299 question_307 question_315 question_320 question_325 question_330 question_335 question_340 question_345 question_350 question_355 question_361 question_367 question_373 question_381 question_385 question_393 question_397 question_403 question_410 question_414 question_419 question_423 question_427 question_432 question_438 question_442 question_449 question_454 question_459 question_464 question_469 question_474 question_483 question_487 question_491 question_499 question_507 question_515 question_523 question_528 question_533 question_539 question_545 question_549 question_555 question_561 question_567 question_572 question_579 question_586 question_596 question_606 question_611 question_616 question_621 question_629 question_637 question_642 question_647 question_652 question_657 question_665 question_673 question_681 question_689 question_694 question_699 question_703 question_707 question_711 question_717 question_723 question_730 question_736 question_742 question_748 question_754 question_760 question_767 question_774 question_780 question_785 question_791 question_798 question_806 question_813 question_820 question_827 question_832 question_839 -_id').lean();
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