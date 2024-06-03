const Rural = require("../models/ruralModels");

// Function to get rural form data by ULB code
const getRuralDataByULBCoView = async (req, res) => {
  try {
    const ulbCode = req.params.ulbCode;
    // Fetch rural data from the database based on ULB code
    const ruralData = await Rural.findOne({ ulb_code: ulbCode });
    if (!ruralData) {
      return res.status(404).json({ msg: "Rural data not found" });
    }
    res.status(200).json(ruralData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getRuralDataByULBCoView,
};