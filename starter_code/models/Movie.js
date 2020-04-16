const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    stars: [String],
    image: {
        type: String,
        default: "https://images.pexels.com/photos/390089/film-movie-motion-picture-390089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    description: String,
    showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;