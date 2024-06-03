const express = require('express');
const {
    loginController,
    authController,
} = require('../controllers/oneuserControllers');


const authMiddleware = require('../middlewares/authMiddleware');


const router = express.Router();


router.post('/login', loginController);


router.post('/getOneUserData', authMiddleware, authController);

module.exports = router;