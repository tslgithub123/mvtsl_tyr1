const Amrut = require("../models/amrutModels");

const writeAmrutData = async (req, res) => {
    try {
        const amrutData = new Amrut(req.body);

        if (!amrutData) {
            return res.status(404).json({ msg: "User data not found" });
        }

        await amrutData.save();
        res.status(200).json({ msg: "Data added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAmrutDataByULBCode = async (ulbCode) => {
    try {
        // Fetch data from the database based on ULB code
        const amrutData = await Amrut.findOne({ ulb_code: ulbCode });

        return amrutData;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { writeAmrutData, getAmrutDataByULBCode };