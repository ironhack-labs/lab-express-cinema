const mongoose = require('mongoose');

//Schema
const movieSchema = new mongoose.Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
    }
);

//Model

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

