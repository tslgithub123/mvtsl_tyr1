const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "name is require"],
    },
    email: {
        type: String,
        require: [true, "email is require"],
    },
    password: {
        type: String,
        require: [true, "password is require"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    notification: {
        type: Array,
        default: [],
    },
    seennotification: {
        type: Array,
        default: [],
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'citie'
    }]
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;