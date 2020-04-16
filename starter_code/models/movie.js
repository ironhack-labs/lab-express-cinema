const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title : String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;