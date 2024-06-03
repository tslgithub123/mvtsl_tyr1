
const Rural = require("../models/ruralModels");

const createRuralData = async (req, res) => {
  try {
    const ruralData = new Rural(req.body);
    if (!ruralData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    await ruralData.save();
    res.status(200).json({ msg: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getRuralDataByULBCode = async (ulbCode) => {
  try {
      const ruralData = await Rural.findOne({ ulb_code: ulbCode });

      return ruralData;
  } catch (error) {
      throw new Error(error.message);
  }
};

const updateRuralDataByULBCode = async (req, res) => {
  try {
    const ulbCode = req.params.ulbCode;
    const updatedData = req.body;
    const result = await Rural.findOneAndUpdate(
      { ulb_code: ulbCode },
      updatedData,
      { new: true }
    );
    res.status(200).json({ msg: "Rural data updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteRuralDataByULBCode = async (req, res) => {
    const { ulbCode } = req.params;
  
    try {
      const deletedData = await Rural.findOneAndDelete({ ulb_code: ulbCode });
  
      if (!deletedData) {
        return res.status(404).json({ message: 'Rural data not found for the provided ULB code' });
      }
  
      res.status(200).json({ message: 'Rural data deleted successfully' });
    } catch (error) {
      console.error('Error deleting rural data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = {
  createRuralData,
  getRuralDataByULBCode,
  updateRuralDataByULBCode,
  deleteRuralDataByULBCode,
};
