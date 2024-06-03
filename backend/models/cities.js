const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    ulb_name: {
        type: String,
    },
    ulb_code: {
        type: String,
    },
    category: {
        type: String,
    },
    type: {
        type: String,
    },
    verticals: {
        type: String,
    }
});

const cityModel = mongoose.model("citie", citySchema);

module.exports = cityModel;