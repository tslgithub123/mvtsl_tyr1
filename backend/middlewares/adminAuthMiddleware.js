const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        // Check if Authorization header exists
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            throw new Error("Authorization header missing or invalid");
        }

        // Extract token from Authorization header
        const token = req.headers.authorization.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token contains admin role
        if (decoded.role !== 'admin') {
            throw new Error("User is not an admin");
        }

        // Add decoded user to the request object
        req.user = decoded;

        // Call next middleware
        next();
    } catch (error) {
        console.error("Error in admin authentication middleware:", error);

        // Send error response
        res.status(401).send({
            message: "Authentication failed",
            success: false,
            error: error.message // Include error message for debugging
        });
    }
};
