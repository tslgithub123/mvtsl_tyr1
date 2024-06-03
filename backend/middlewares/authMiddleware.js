
const JWT = require("jsonwebtoken");
const User = require("../models/userModels");

module.exports = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            throw new Error("Authorization header missing or invalid");
        }

        // Extract token from Authorization header
        const token = req.headers.authorization.split(" ")[1];

        // Verify token
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        // Add decoded user ID to request body
        req.body.userId = decoded.id;

        // Fetch user from database using decoded user ID
        const user = await User.findById(decoded.id);

        // Check if user is admin
        if (!user) {
            throw new Error("User not found");
        }

        // Add isAdmin property to user object
        req.user = {
            id: user._id,
            isAdmin: user.isAdmin // Assuming isAdmin is a property in the user model
        };

        // Call next middleware
        next();
    } catch (error) {
        console.error("Error in authentication middleware:", error);

        // Send error response
        res.status(401).send({
            message: "Authentication failed",
            success: false,
            error: error.message // Include error message for debugging
        });
    }
};
