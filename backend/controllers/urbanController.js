const Urban = require("../models/urbanModels");

const fillUrbanData = async (req, res) => {
    try {
        const urbanData = new Urban(req.body);

        if (!urbanData) {
            return res.status(404).json({ msg: "User data not found" });
        }

        await urbanData.save();
        res.status(200).json({ msg: "Data added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUrbanDataByULBCode = async (ulbCode) => {
    try {
        // Fetch data from the database based on ULB code
        const urbanData = await Urban.findOne({ ulb_code: ulbCode });

        return urbanData;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = { fillUrbanData, getUrbanDataByULBCode };