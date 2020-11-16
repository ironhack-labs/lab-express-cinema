const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    director: String, 
    stars: [{
        type: String, 
    }],
    image: String, 
    showtimes: [{
        type: String,
    }],
    description: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;