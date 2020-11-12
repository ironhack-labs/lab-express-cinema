const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        unique: true,
        trim: true
    },
    director: {
        type: String,
        trim: true
    },
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}, {timestamps: true});

module.exports = model("Movie", movieSchema);