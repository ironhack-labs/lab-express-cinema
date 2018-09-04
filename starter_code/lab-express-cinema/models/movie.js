const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    // structure & rules here
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: Array },
    image: { type: String },
    description: { type: String, required: true },
    showtimes: { type: Array },
}, {
    //additional settings for Schema class
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;