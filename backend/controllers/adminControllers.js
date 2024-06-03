const userModel = require("../models/userModels");
const oneuserModel = require("../models/oneuserModels")
const City = require('../models/cities');
const CitySubmission = require('../models/CitySubmission');
const Rural = require("../models/ruralModels");
const Urban = require("../models/urbanModels");
const Amrut = require("../models/amrutModels");


const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).send({
            success: true,
            message: "users data list",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while fetching users",
            error,
        });
    }
};


const getAllOneUsersController = async (req, res) => {
    try {
        const oneusers = await oneuserModel.find({});
        res.status(200).send({
            success: true,
            message: "users data list",
            data: oneusers,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while fetching users",
            error,
        });
    }
};


const getAdminHomePage = async (req, res) => {
    try {
        // Check if the logged-in user is an Admin
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ success: false, message: 'Access denied. Only admin users can access this endpoint.' });
        }

        // Fetch all cities data
        const cities = await City.find();
        res.status(200).json({ success: true, cities });
    } catch (error) {
        console.error('Error fetching cities for admin:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const getAllSubmittedCities = async (req, res) => {
    try {
      // Find all city submissions
      const submissions = await CitySubmission.find().select('ulbCode');
  
      // Check if submissions exist
      if (!submissions || submissions.length === 0) {
        return res.status(404).json({ success: false, msg: 'No submissions found' });
      }
  
      // Extract ulbCode from each submission
      const submittedCities = submissions.map(submission => submission.ulbCode);
  
      // Return the list of submitted cities
      res.status(200).json({ success: true, cities: submittedCities });
    } catch (error) {
      console.error('Error fetching submitted cities:', error);
      res.status(500).json({ success: false, msg: 'Failed to fetch submitted cities' });
    }
  };



  const editRuralSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params; // Assuming the ULB code is passed as a parameter
        const updatedFormData = req.body; // Assuming the updated form data is sent in the request body

        // Find the rural submission by ULB code
        const ruralSubmission = await Rural.findOne({ ulb_code: ulbCode });

        // If submission not found, return error
        if (!ruralSubmission) {
            return res.status(404).json({ success: false, message: 'Rural submission not found' });
        }

        // Update the submission data
        Object.assign(ruralSubmission, updatedFormData);
        await ruralSubmission.save();

        // Return success response
        res.status(200).json({ success: true, message: 'Rural submission updated successfully', ruralSubmission });
    } catch (error) {
        console.error('Error editing rural submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const deleteRuralSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params; // Assuming the ulbCode is passed as a parameter
        console.log(`Received ulbCode: ${ulbCode}`); // Debugging log

        // Find the rural submission by ulb_code and delete it
        const deletedRuralSubmission = await Rural.findOneAndDelete({ ulb_code: ulbCode });
        console.log(`Deleted Rural Submission: ${deletedRuralSubmission}`); // Debugging log

        // If submission not found, return error
        if (!deletedRuralSubmission) {
            return res.status(404).json({ success: false, message: 'Rural submission not found' });
        }

        // Also delete the corresponding entry from the CitySubmission collection
        const deletedCitySubmission = await CitySubmission.findOneAndDelete({ ulbCode: ulbCode });
        console.log(`Deleted City Submission: ${deletedCitySubmission}`); // Debugging log

        // Check if the city submission was found and deleted
        if (!deletedCitySubmission) {
            return res.status(200).json({ success: true, message: 'Rural submission deleted, but city submission not found', deletedRuralSubmission });
        }

        // Return success response with information about both deletions
        res.status(200).json({ 
            success: true, 
            message: 'Rural submission and corresponding city submission deleted successfully', 
            deletedRuralSubmission, 
            deletedCitySubmission 
        });
    } catch (error) {
        console.error('Error deleting rural submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const editUrbanSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params; // Assuming the form ID is passed as a parameter
        const updatedFormData = req.body; // Assuming the updated form data is sent in the request body

        // Find the rural submission by ID
        const urbanSubmission = await Urban.findOne({ ulb_code: ulbCode });

        // If submission not found, return error
        if (!urbanSubmission) {
            return res.status(404).json({ success: false, message: 'Urban submission not found' });
        }

        // Update the submission data
        Object.assign(urbanSubmission, updatedFormData);
        await urbanSubmission.save();

        // Return success response
        res.status(200).json({ success: true, message: 'Urban submission updated successfully', urbanSubmission });
    } catch (error) {
        console.error('Error editing urban submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const deleteUrbanSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params;// Assuming the form ID is passed as a parameter

        // Find the rural submission by ID and delete it
        const deletedUrbanSubmission = await Urban.findOneAndDelete({ ulb_code: ulbCode });

        // If submission not found, return error
        if (!deletedUrbanSubmission) {
            return res.status(404).json({ success: false, message: 'Urban submission not found' });
        }

        const deletedCitySubmission = await CitySubmission.findOneAndDelete({ ulbCode: ulbCode });
        console.log(`Deleted City Submission: ${deletedCitySubmission}`); // Debugging log

        // Check if the city submission was found and deleted
        if (!deletedCitySubmission) {
            return res.status(200).json({ success: true, message: 'Urban submission deleted, but city submission not found', deletedUrbanSubmission });
        }

        // Return success response with information about both deletions
        res.status(200).json({ 
            success: true, 
            message: 'Urban submission and corresponding city submission deleted successfully', 
            deletedUrbanSubmission, 
            deletedCitySubmission 
        });
    } catch (error) {
        console.error('Error deleting rural submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


const editAmrutSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params; // Assuming the form ID is passed as a parameter
        const updatedFormData = req.body; // Assuming the updated form data is sent in the request body

        // Find the rural submission by ID
        const amrutSubmission = await Amrut.findOne({ ulb_code: ulbCode });

        // If submission not found, return error
        if (!amrutSubmission) {
            return res.status(404).json({ success: false, message: 'Amrut submission not found' });
        }

        // Update the submission data
        Object.assign(amrutSubmission, updatedFormData);
        await amrutSubmission.save();

        // Return success response
        res.status(200).json({ success: true, message: 'Amrut submission updated successfully', amrutSubmission });
    } catch (error) {
        console.error('Error editing amrut submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const deleteAmrutSubmissionController = async (req, res) => {
    try {
        const { ulbCode } = req.params; // Assuming the form ID is passed as a parameter

        // Find the rural submission by ID and delete it
        const deletedAmrutSubmission = await Amrut.findOneAndDelete({ ulb_code: ulbCode });

        // If submission not found, return error
        if (!deletedAmrutSubmission) {
            return res.status(404).json({ success: false, message: 'Amrut submission not found' });
        }

        const deletedCitySubmission = await CitySubmission.findOneAndDelete({ ulbCode: ulbCode });
        console.log(`Deleted City Submission: ${deletedCitySubmission}`); // Debugging log

        // Check if the city submission was found and deleted
        if (!deletedCitySubmission) {
            return res.status(200).json({ success: true, message: 'Amrut submission deleted, but city submission not found', deletedAmrutSubmission });
        }

        // Return success response with information about both deletions
        res.status(200).json({ 
            success: true, 
            message: 'Amrut submission and corresponding city submission deleted successfully', 
            deletedAmrutSubmission, 
            deletedCitySubmission 
        });
    } catch (error) {
        console.error('Error deleting rural submission:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};




module.exports = {
    getAllUsersController,
    getAllOneUsersController,
    getAdminHomePage,
    editRuralSubmissionController,
    deleteRuralSubmissionController,
    editUrbanSubmissionController,
    deleteUrbanSubmissionController,
    editAmrutSubmissionController,
    deleteAmrutSubmissionController,
    getAllSubmittedCities,
};