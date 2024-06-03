const userModel = require("../models/userModels");
const City = require("../models/cities");

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const moment = require("moment")

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res
                .status(200)
                .send({ message: "User Already Exist", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({ message: "Register Successfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Register Controller ${error.message}`,
        });
    }
};


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ email });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If passwords don't match, return error
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        // If user is found and password is correct, generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        // Check if the user is an Admin
        const isAdmin = user.isAdmin;

        // If user is Admin, fetch all cities data
        if (isAdmin) {
            const cities = await City.find();
            return res.status(200).json({ success: true, message: 'Login Success', token, userId: user._id, isAdmin, cities });
        }

        // Send the user's ID back to the client without cities data
        res.status(200).json({ success: true, message: 'Login Success', token, userId: user._id, isAdmin });
    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ success: false, message: `Error in Login CTRL ${error.message}` });
    }
};

const getCitiesByUser = async (req, res) => {
    try {
        const oneuser = await userModel.findById({ _id: req.body.userId });
        if (!oneuser) {
            return res.status(200).send({
                message: 'User not found',
                success: false,
            });
        } else {
            // Extract cities array from user data
            const cities = oneuser.cities || [];
            res.status(200).send({
                success: true,
                cities: cities,
            });
        }
    } catch (error) {
        console.error("Error in auth controller:", error);
        res.status(500).send({
            message: 'Internal server error',
            success: false,
            error,
        });
    }
};

const authController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.body.userId });
        user.password = undefined;
        if (!user) {
            return res.status(200).send({
                message: 'user not found',
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: 'auth error',
            success: false,
            error,
        });
    }
};


const getAllNotificationController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const seennotification = user.seennotification;
        const notification = user.notification;
        seennotification.push(...notification);
        user.notification = [];
        user.seennotification = notification;
        const updatedUser = await user.save();
        res.status(200).send({
            success: true,
            message: 'all notification marked is read',
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error in notification',
            success: false,
            error
        })
    }
};


const deleteAllNotificationController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        user.notification = [];
        user.seennotification = [];
        const updatedUser = await user.save();
        updatedUser.password = undefined;
        res.status(200).send({
            success: true,
            message: "Notification Deleted Successfully",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "unable to delete all notifications",
            error,
        })
    }
};


module.exports = {
    loginController,
    registerController,
    authController,
    getAllNotificationController,
    deleteAllNotificationController,
    getCitiesByUser,
};