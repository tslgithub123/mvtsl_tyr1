const mongoose = require("mongoose");

const oneuserSchema = new mongoose.Schema({
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
});

const oneuserModel = mongoose.model("oneusers", oneuserSchema);

module.exports = oneuserModel;