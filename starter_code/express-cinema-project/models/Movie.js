const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    // structures & rules defined here
    title: { type: String, required: true},
    director: { type: String, required: true},
    stars: { type: [String], required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    showtimes: { type: [String], required: true},
}, {
    // Additional settings for Schema class
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;