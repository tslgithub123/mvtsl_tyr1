const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    getAllUsersController,
    getAllOneUsersController,
    getAdminHomePage,
    editRuralSubmissionController,
    deleteRuralSubmissionController,
    editUrbanSubmissionController,
    deleteUrbanSubmissionController,
    editAmrutSubmissionController,
    deleteAmrutSubmissionController,
} = require("../controllers/adminControllers");

const router = express.Router();


router.get("/getAllUsers", authMiddleware, getAllUsersController);
router.get("/getAllOneUsers", authMiddleware, getAllOneUsersController);
router.get('/admin-homepage', authMiddleware, getAdminHomePage);
router.put('/rural/:ulbCode', editRuralSubmissionController);
router.delete('/rural/:ulbCode', deleteRuralSubmissionController);
router.put('/urban/:ulbCode', editUrbanSubmissionController);
router.delete('/urban/:ulbCode', deleteUrbanSubmissionController);
router.put('/amrut/:ulbCode', editAmrutSubmissionController);
router.delete('/amrut/:ulbCode', deleteAmrutSubmissionController);



module.exports = router;