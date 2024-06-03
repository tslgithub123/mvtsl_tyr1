const Urban = require("../models/urbanModels");

// Function to get urban form data by ULB code
const getUrbanDataByULBCo = async (req, res) => {
  try {
    const ulbCode = req.params.ulbCode;
    // Fetch urban data from the database based on ULB code
    const urbanData = await Urban.findOne({ ulb_code: ulbCode });
    if (!urbanData) {
      return res.status(404).json({ msg: "Urban data not found" });
    }
    res.status(200).json(urbanData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getUrbanDataByULBCo,
};