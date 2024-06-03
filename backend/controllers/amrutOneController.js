const Amrut = require("../models/amrutModels");

// Function to get amrut form data by ULB code
const getAmrutDataByULBCo = async (req, res) => {
  try {
    const ulbCode = req.params.ulbCode;
    // Fetch amrut data from the database based on ULB code
    const amrutData = await Amrut.findOne({ ulb_code: ulbCode });
    if (!amrutData) {
      return res.status(404).json({ msg: "Amrut data not found" });
    }
    res.status(200).json(amrutData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAmrutDataByULBCo,
};