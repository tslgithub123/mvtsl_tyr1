const oneuserModel = require("../models/oneuserModels")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const moment = require("moment")

const loginController = async (req, res) => {
    try {
        const oneuser = await oneuserModel.findOne({ email: req.body.email });
        if (!oneuser) {
            return res
                .status(200)
                .send({ message: 'user not found', success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: 'Invalid Email or Password', success: false });
        }
        const token = jwt.sign({ id: oneuser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(200).send({ message: 'Login Success', success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
};


const authController = async (req, res) => {
    try {
        const oneuser = await oneuserModel.findById({ _id: req.body.oneuserId });
        oneuser.password = undefined;
        if (!oneuser) {
            return res.status(200).send({
                message: 'user not found',
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: oneuser,
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


module.exports = {
    loginController,
    authController,
};