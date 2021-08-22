const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Author", authorSchema);
