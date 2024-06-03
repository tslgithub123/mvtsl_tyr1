const express = require('express');
const {
    loginController,
    registerController,
    authController,
    getAllNotificationController,
    deleteAllNotificationController,
} = require('../controllers/userControllers');

const authMiddleware = require('../middlewares/authMiddleware');



const router = express.Router();



router.post('/login', loginController);


router.post('/register', registerController);


router.post('/getUserData', authMiddleware, authController);


router.post(
    '/get-all-notification',
    authMiddleware,
    getAllNotificationController
);

router.post(
    '/delete-all-notification',
    authMiddleware,
    deleteAllNotificationController
);


module.exports = router;

